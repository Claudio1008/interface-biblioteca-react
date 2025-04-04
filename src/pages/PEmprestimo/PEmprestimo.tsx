import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";
import TabelaEmprestimo from "../../components/tabelas/TabelaEmprestimo/TabelaEmprestimo";

function PEmprestimo() {
    return (
        <>
            <Cabecalho />
            <TabelaEmprestimo />
            <Rodape />
        </>
    );
}

export default PEmprestimo;