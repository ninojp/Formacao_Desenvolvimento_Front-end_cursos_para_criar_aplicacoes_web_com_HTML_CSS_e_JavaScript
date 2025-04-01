'use strict';
const URL_BASE = "http://localhost:3001/";

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch(`${URL_BASE}pensamentos/`);
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
            const response = await fetch(`${URL_BASE}pensamentos/${id}`);
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
            const response = await fetch(`${URL_BASE}pensamentos/`, {
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
            const response = await fetch(`${URL_BASE}pensamentos/${pensamento.id}`, {
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
    },
    //============================================================================
    
    async excluirPensamento(id) {
        try {
            const response = await fetch(`${URL_BASE}pensamentos/${id}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log('api.js: Erro ao Excluir pensamento na APILocal', error);
            alert('api.js: Erro ao Excluir pensamentos na APILocal');
            throw error;
        };
    },
    //============================================================================

    async buscarPensamentosPorTermo(termo) {
        try {
            const pensamentos = await this.buscarPensamentos();
            const pensamentosFiltrados = pensamentos.filter( pensamento => {
                return (pensamento.conteudo.toLowerCase().includes(termo.toLowerCase()) || 
                pensamento.autoria.toLowerCase().includes(termo.toLowerCase()))
            });
            console.log(pensamentosFiltrados);
            return pensamentosFiltrados;
        } catch (error) {
          console.error('Erro! Ao Filtrar Pensamentos! ', error);
            throw error;
        };
    },
    // async atualizarPensamentos(id, favorito) {
    //     try {
    //         const response = await 
    //     } catch (error) {
    //         //vou continuar no apiAxios.js
    //     }
    // }
};
export default api;
