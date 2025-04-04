import estilo from './Cabecalho.module.css'
import logotipo from '../../assets/logotipo.png'
import { APP_ROUTES } from '../../app.cofig';

function Cabecalho() {
  return (
    <header className={estilo.cabecalho}>
      <a href={APP_ROUTES.ROUTE_HOME} 
      className={estilo.imgLogo}> <img src={logotipo} 
      alt="logotipo"/>
      </a>
      <img src={logotipo} alt="logotipo" />
      <a href={APP_ROUTES.ROUTE_LOGIN}>Login</a>
    </header>
  );
}

export default Cabecalho;