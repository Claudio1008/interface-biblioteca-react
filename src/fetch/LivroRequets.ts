class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizarLivro;
    private routeRemoveLivro;


    constructor() {
        this.serverURL = 'http://localhost:3333'
        this.routeListaLivro = '/lista/livro';
        this.routeCadastroLivro = '/novo/livro';
        this.routeAtualizarLivro = '/atualizar/livro';
        this.routeRemoveLivro = '/remove/livro';
    }
}

export default LivroRequests;