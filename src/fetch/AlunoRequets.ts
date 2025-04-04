import { SERVER_CFG } from '../app.cofig';

class AlunoRequests {
    static listarAlunos() {
        throw new Error('Method not implemented.');
    }

    private serverURL;
    private routeListaAluno;
    private routeCadastroAluno;
    private routeAtualizarAluno;
    private routeRemoveAluno;


    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaAluno = '/lista/alunos';
        this.routeCadastroAluno = '/novo/aluno';
        this.routeAtualizarAluno = '/atualizar/aluno';
        this.routeRemoveAluno = '/remove/aluno';
    }

    async listarAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if(respostaAPI.ok) {
                const listaDeAlunos = await respostaAPI.json();
                return listaDeAlunos;
            }
        } catch (error) {
            console.error(`erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new AlunoRequests();