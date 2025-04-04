import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import AlunoRequests from '../../../fetch/AlunoRequets';

function TabelaAluno() {
    const [alunos, setAlunos] = useState([]);

    const paginatorLeft = <Button type='button' icon="pi pi_refresh" text />
    const paginatorRight = <Button type='button' icon="pi pi_download" text />

    useEffect(() => {
        const fetchAluno = async() => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAlunos();
                setAlunos(listaDeAlunos);
            } catch (error) {
                console.error(`erro ao chamar a API : ${error}`);
            }
        };
        fetchAluno();
    }, [alunos]);
    return (
        <DataTable value={alunos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="nome" header="nome" style={{ width: '25%' }}></Column>
                <Column field="sobrenome" header="sobrenome" style={{ width: '25%' }}></Column>
                <Column field="endereco" header="endereço" style={{ width: '25%' }}></Column>
                <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
                <Column field="endereco" header="endereço" style={{ width: '25%' }}></Column>
                <Column field="endereco" header="endereço" style={{ width: '25%' }}></Column>
            </DataTable>
    )
}

export default TabelaAluno;