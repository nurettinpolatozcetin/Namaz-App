import axios from 'axios';

const API_BASE_URL = 'https://api.collectapi.com/pray/all?data.city=istanbul';
const API_KEY = '';

const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    Authorization: `Apikey ${API_KEY}`, 
    'Content-Type': 'application/json', 
  },
});

const namazq = async (endpoint = '') => {
  try {
    const response = await api.get(endpoint); 
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default namazq; 
