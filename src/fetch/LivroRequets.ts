import { SERVER_CFG } from '../app.cofig';

class LivroRequests {
    static listarLivros() {
        throw new Error('Method not implemented.');
    }

    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizarLivro;
    private routeRemoveLivro;


    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros';
        this.routeCadastroLivro = '/novo/livro';
        this.routeAtualizarLivro = '/atualizar/livro';
        this.routeRemoveLivro = '/remove/livro';
    }

    async listarLivros() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if(respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros;
            }
        } catch (error) {
            console.error(`erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests();