import axios from 'axios';

const api = axios.create({

    baseURL : 'https://strapi-cms-portfolio-if0l.onrender.com/api', 

});

export const getProjects = async () => {

    const response = await api.get('/projects-cards?populate=cover');
    return response.data.data;

};


export default api;

