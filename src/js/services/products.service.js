import axios from '../plugins/axios';

export async function getProducts() {
  try {   
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/auth/products',
    };
    const response = await axios.request(config);     

    return response;   
  } 
  catch (err) {
    console.log(err);
  }
}
