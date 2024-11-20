import axios from 'axios';

const API_URL = 'https://673ccf6796b8dcd5f3fbc68e.mockapi.io/users';

export const api = {
  // Get all users
  getUsers: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Get single user
  getUser: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // Create user
  createUser: async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
  },

  // Update user
  updateUser: async (id, userData) => {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  },

  // Delete user
  deleteUser: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },

  // Login user
  loginUser: async (credentials) => {
    try {
      const users = await axios.get(API_URL);
      const user = users.data.find(
        u => u.username === credentials.username && u.password === credentials.password
      );
      return user || null;
    } catch (error) {
      throw new Error('Login failed');
    }
  }
};
