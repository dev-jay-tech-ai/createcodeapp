import axios from 'axios';
import { apiUrl } from './config.js'

export const translate = async (text) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/translate`, 
      method: 'POST',
      data : { "title" : text } 
    });
    if(!response || response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: response.data.message || err.message };
  }
};
