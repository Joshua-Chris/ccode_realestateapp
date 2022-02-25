import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'fec8b5acbfmsh57ca5eb9d27d847p1081fcjsn8d97dae75e0c'
    },
  });
    
  return data;
}