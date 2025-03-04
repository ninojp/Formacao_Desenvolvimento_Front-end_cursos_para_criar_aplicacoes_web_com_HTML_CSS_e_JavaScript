'use strict';
import ui from "./ui.js";

document.addEventListener('DOMContentLoaded', async () => {
    // await ui.renderizarPensamentos();
    try {
        await ui.renderizarPensamentos();
    } catch (error) {
        console.log('Erro ao renderizar pensamentos! ', error);
        alert('Erro ao renderizar pensamentos! ');
        throw error;
    }
});
