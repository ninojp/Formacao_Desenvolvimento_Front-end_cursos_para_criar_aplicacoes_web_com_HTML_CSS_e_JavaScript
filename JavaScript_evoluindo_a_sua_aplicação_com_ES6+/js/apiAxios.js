'use strict';
const URL_BASE = "http://localhost:3001/";

const converterStringParaData = (dataString) => {
    const [ano, mes, dia] = dataString.split('-');
    return new Date(Date.UTC(ano, mes -1, dia))
};
const apiAxios = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}pensamentos/`);
            const pensamentos =  await response.data;
            return pensamentos.map( (pensamento) => {
                return { ...pensamento, data: new Date(pensamento.data)};
            });
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
            const pensamento =  await response.data;
            return {...pensamento, data: new Date(pensamento.data)};
        } catch (error) {
            console.log('api.js: Erro ao buscar o pensamento na APILocal', error);
            alert('api.js: Erro ao buscar o pensamento na APILocal');
            throw error;
        };
    },
    //============================================================================
    async salvarPensamento(pensamento) {
        try {
            const data = converterStringParaData(pensamento.data);
            const response = await axios.post(`${URL_BASE}pensamentos/`, { ...pensamento, data: data.toISOString() });
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
            const data = converterStringParaData(pensamento.data);
            const response = await axios.put(`${URL_BASE}pensamentos/${pensamento.id}`, { ...pensamento, data: data.toISOString() });
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
