import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type='button' icon="pi pi_refresh" text />
    const paginatorRight = <Button type='button' icon="pi pi_download" text />

    useEffect(() => {
        const fetchEmprestimo = async() => {
            try {
                const listaDeEmprestimos = await EmprestimoRequests.listarEmprestimos();
                setEmprestimos(listaDeEmprestimos);
            } catch (error) {
                console.error(`erro ao chamar a API : ${error}`);
            }
        };
        fetchEmprestimo();
    }, [emprestimos]);
    return (
        <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="nomeAluno" header="nome do aluno" style={{ width: '25%' }}></Column>
                <Column field="tituloLivro" header="titulo do livro" style={{ width: '25%' }}></Column>
                <Column field="dataEmprestimo" header="data do emprestimo" style={{ width: '25%' }}></Column>
                <Column field="dataDevolucao" header="data de devolução" style={{ width: '25%' }}></Column>
                <Column field="statusEmprestimos" header="status do emprestimo" style={{ width: '25%' }}></Column>
            </DataTable>
    )
}

export default TabelaEmprestimo;