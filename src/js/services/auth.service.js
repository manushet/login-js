import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {String} username 
 * @param {String} password 
 */
export async function login(username, password) {
  try {
    let data = JSON.stringify({
        username: username,
        password: password,
    });
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `/auth/login`,
        data : data
    };
    const response = await axios.request(config);     
    console.log(response.data);
    return response.data;   
    /*
    data: 
      email: "atuny0@sohu.com"
      firstName: "Terry"
      gender: "male"
      id: 1
      image: "https://robohash.org/hicveldicta.png"
      lastName: "Medhurst"
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY4OTc2MzczMywiZXhwIjoxNjg5NzY3MzMzfQ.yCikiORiFWFIwOV4W4YIP63A-MwN8C3GiiYXV7n3_kA"
      username: "atuny0"
    */
  } 
  catch (err) {
    throw new Error(err);
  }
}
