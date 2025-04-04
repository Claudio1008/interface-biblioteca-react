import estilo from './Cabecalho.module.css'
import logotipo from '../../assets/logotipo.png'
import { APP_ROUTES } from '../../app.cofig';

function Cabecalho() {
  return (
    <header className={estilo.cabecalho}>
      <a href={APP_ROUTES.ROUTE_HOME}
        className={estilo.logo}> <img src={logotipo}
          alt="logotipo" />
      </a>
      <a href={APP_ROUTES.ROUTE_LOGIN}>Login</a>
      <a href={APP_ROUTES.ROUTE_LIVRO}>Livros</a>
      <a href={APP_ROUTES.ROUTE_ALUNO}>Alunos</a>
      <a href={APP_ROUTES.ROUTE_EMPRESTIMO}>Emprestimos</a>
    </header>
  );
}

export default Cabecalho;