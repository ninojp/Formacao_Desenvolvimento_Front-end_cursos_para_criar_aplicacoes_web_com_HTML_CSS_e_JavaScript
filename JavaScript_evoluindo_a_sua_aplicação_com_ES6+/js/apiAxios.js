'use strict';
const URL_BASE = "http://localhost:3001/";

const apiAxios = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}pensamentos/`);
            return await response.data;
        } catch (error) {
            console.log('api.js: Erro ao buscar pensamentos na APILocal', error);
            alert('api.js: Erro ao buscar pensamentos na APILocal');
            throw error;
        };
    },
    //============================================================================
    async buscaPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}pensamentos/${id}`);
            return await response.data;
        } catch (error) {
            console.log('api.js: Erro ao buscar o pensamento na APILocal', error);
            alert('api.js: Erro ao buscar o pensamento na APILocal');
            throw error;
        };
    },
    //============================================================================
    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}pensamentos/`, pensamento);
            return await response.data;
        } catch (error) {
            console.log('api.js: Erro ao Salvar pensamentos na APILocal', error);
            alert('api.js: Erro ao Salvar pensamentos na APILocal');
            throw error;
        };
    },
    //============================================================================
    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}pensamentos/${pensamento.id}`, pensamento);
            return await response.data;
        } catch (error) {
            console.log('api.js: Erro ao Editar pensamentos na APILocal', error);
            alert('api.js: Erro ao Editar pensamentos na APILocal');
            throw error;
        };
    },
    //============================================================================
    async excluirPensamento(id) {
        try {
            const response = await axios.delete(`${URL_BASE}pensamentos/${id}`);
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
            return pensamentosFiltrados;
        } catch (error) {
          console.error('Erro! buscarPensamentosPorTermo(termo) ', error);
            throw error;
        };
    },
    //=============================================================================

    async atualizarFavorito(id, favorito) {
        try {
            const response = await axios.patch(`${URL_BASE}pensamentos/${id}`, { favorito });
            return response.data;
        } catch (error) {
            console.error('Erro! atualizarFavorito()');
            alert('Erro! ao tentar atualizar o favorito')
            throw error;
        };
    }
};
export default apiAxios;
