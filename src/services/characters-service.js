const URL = 'http://hp-api.herokuapp.com/api/characters';

const queryApi = () => {
    fetch(URL).then(response => response.json())
};

export default queryApi;
