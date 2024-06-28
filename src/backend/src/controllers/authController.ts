import { Request, Response } from 'express';
import { readDatabase, writeDatabase } from '../models/user';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export const register = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const db = readDatabase();

    const existingUser = db.users.find((user: any) => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    db.users.push({ username, password });
    writeDatabase(db);

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const db = readDatabase();

    const user = db.users.find((user: any) => user.username === username && user.password === password);
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
