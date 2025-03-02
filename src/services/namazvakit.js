import axios from 'axios';

const API_BASE_URL = 'https://api.collectapi.com/pray/all?data.city=istanbul';
const API_KEY = '';

const api = axios.create({
  baseURL: API_BASE_URL, // baseURL olarak düzeltildi
  headers: {
    Authorization: `Apikey ${API_KEY}`, // CollectAPI için "Apikey" kullanılır
    'Content-Type': 'application/json', // application.json yerine application/json
  },
});

const namazq = async (endpoint = '') => {
  try {
    const response = await api.get(endpoint); // endpoint parametresi ile istek yap
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default namazq; // Doğru şekilde export edildi
