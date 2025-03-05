'use strict';

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3001/pensamentos/');
            return await response.json();
        } catch (error) {
            console.log('api.js: Erro ao buscar pensamentos na APILocal', error);
            alert('api.js: Erro ao buscar pensamentos na APILocal');
            throw error;
        };
    },
    //============================================================================
    async buscaPensamentoPorId(id) {
        try {
            const response = await fetch(`http://localhost:3001/pensamentos/${id}`);
            return await response.json();
        } catch (error) {
            console.log('api.js: Erro ao buscar o pensamento na APILocal', error);
            alert('api.js: Erro ao buscar o pensamento na APILocal');
            throw error;
        };
    },
    //============================================================================
    async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3001/pensamentos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            console.log('api.js: Erro ao Salvar pensamentos na APILocal', error);
            alert('api.js: Erro ao Salvar pensamentos na APILocal');
            throw error;
        };
    },
    //============================================================================
    
    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`http://localhost:3001/pensamentos/${pensamento.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            console.log('api.js: Erro ao Editar pensamentos na APILocal', error);
            alert('api.js: Erro ao Editar pensamentos na APILocal');
            throw error;
        };
    }
    //============================================================================
};
export default api;
