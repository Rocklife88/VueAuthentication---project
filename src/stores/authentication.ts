import { defineStore } from 'pinia';
import axios from 'axios';
import { apiUrl } from '@/api/api';

interface AuthenticationState {
  isAuthenticated: boolean;
  token: string;
}

export const useAuthenticationStore = defineStore('authentication', {
  state: (): AuthenticationState => ({
    isAuthenticated: !!localStorage.getItem('token'), // Check if there's a saved token
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    // Login user
    async loginUser(username: string, password: string) {
      try {
        const response = await axios.post(`${apiUrl}/login`, { username, password });
        this.token = response.data.token;
        this.isAuthenticated = true;
        localStorage.setItem('token', response.data.token); // Save the token in localStorage
        return response.data.message;
      } catch (error) {
        console.error('Error during login:', error);
        throw new Error('Login failed');
      }
    },

    // Register user
    async registerUser(username: string, password: string) {
      try {
        const response = await axios.post(`${apiUrl}/register`, { username, password });
        return response.data.message; // Simply return a message without logging in the user
      } catch (error) {
        console.error('Error during registration:', error);
        throw new Error('Registration failed');
      }
    },

    // Logout user
    logoutUser() {
      this.isAuthenticated = false;
      this.token = '';
      localStorage.removeItem('token'); // Remove the token from localStorage
    },
  },
});
