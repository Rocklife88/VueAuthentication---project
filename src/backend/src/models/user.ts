import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(__dirname, '../../database.json');

export const readDatabase = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [] };
  }
};

export const writeDatabase = (data: any) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing to database:', error);
  }
};
