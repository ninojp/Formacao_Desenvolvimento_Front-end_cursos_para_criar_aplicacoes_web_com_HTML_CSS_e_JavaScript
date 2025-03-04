'use strict';

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3001/pensamentos/');
            return await response.json();
        } catch (error) {
            console.log('Erro ao buscar pensamentos na APILocal', error);
            alert('Erro ao buscar pensamentos na APILocal');
            throw error;
        };
    }
};
export default api;
