// api.ts

import axios from 'axios';


// api-interfaces.ts
export interface LoginResponse {
    token: string;
    message: string;
  }
  
  export interface RegisterResponse {
    message: string;
  }
  
// apis
export const apiUrl = 'http://localhost:3001/api';

export function login(username: string, password: string): Promise<LoginResponse> {
    return axios.post(`${apiUrl}/login`, { username, password })
      .then(response => response.data)
  }
  
  export function register(username: string, password: string): Promise<RegisterResponse> {
    return axios.post(`${apiUrl}/register`, { username, password })
      .then(response => response.data)
  }
