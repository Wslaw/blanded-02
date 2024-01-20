import axios from 'axios';

const API_KEY = 'TqTTq4eWiRX9yRA7NFLoka98Eawte8AHdxmThjeIK14LGwetCMB37daF';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
//   "https://api.pexels.com/v1/search?query=nature&ge=1"

axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};



export const getImages = async (query, page) => {
  const response = await axios.get(`search?query=${query}&page=${page}`); 
  return response.data;

};
