import estilo from './Welcome.module.css'
import { useEffect, useState } from 'react';
import AlunoRequests from '../../fetch/AlunoRequets';

function Welcome() {
    const [alunos, setAlunos] = useState('');

    useEffect(() => {
        const fetchAluno = async() => {
            try {
                const aluno = AlunoRequests.listarAlunos();
                setAlunos(JSON.stringify(alunos));
                console.table(aluno);
            } catch (error) {
                console.error(`erro ao chamar a API : ${error}`);
            }
        };
        fetchAluno();
    }, []);

    return (
        <main className={estilo.principal}>
            <p>Bem-vindo(a) à nossa biblioteca</p>
            <p>Para ter uma melhor experiencia , faça o login no sistema</p>
        </main>
    );
}

export default Welcome;