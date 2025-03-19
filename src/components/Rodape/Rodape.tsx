import estilo from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={estilo.rodape}>
            <p>Desenvolvido por : Claudio Gabriel Gonçalves Batista</p>
            <p>Copyright</p>
        </footer>
    );
}

export default Rodape;