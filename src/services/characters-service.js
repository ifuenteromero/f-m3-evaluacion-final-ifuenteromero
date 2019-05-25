const URL = 'http://hp-api.herokuapp.com/api/characters';

const queryApi = () => {
  return  fetch(URL).then(response => response.json())
};

export default queryApi;
