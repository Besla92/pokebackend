import axios from 'axios';

async function getUser(id) {
    try {
      const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`);
    //console.log(response.config.url)
    } catch (error) {
      console.error(error);
    }
  }

  export default getUser;