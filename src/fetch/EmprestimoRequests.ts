import { SERVER_CFG } from '../app.cofig';

class EmprestimoRequests {
    static listarEmprestimos() {
        throw new Error('Method not implemented.');
    }

    private serverURL;
    private routeListaEmprestimo;
    private routeCadastroEmprestimo;
    private routeAtualizarEmprestimo;
    private routeRemoveEmprestimo;


    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimos';
        this.routeCadastroEmprestimo = '/novo/emprestimo';
        this.routeAtualizarEmprestimo = '/atualizar/emprestimo';
        this.routeRemoveEmprestimo = '/remove/emprestimo';
    }

    async listarEmprestimos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            if(respostaAPI.ok) {
                const listaDeEmprestimos = await respostaAPI.json();
                return listaDeEmprestimos;
            }
        } catch (error) {
            console.error(`erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new EmprestimoRequests();