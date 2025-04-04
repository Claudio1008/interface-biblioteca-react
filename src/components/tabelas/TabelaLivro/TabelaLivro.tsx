import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import LivroRequests from '../../../fetch/LivroRequets';

function TabelaLivro() {
    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type='button' icon="pi pi_refresh" text />
    const paginatorRight = <Button type='button' icon="pi pi_download" text />

    useEffect(() => {
        const fetchLivro = async() => {
            try {
                const listaDeLivros = await LivroRequests.listarLivros();
                setLivros(listaDeLivros);
            } catch (error) {
                console.error(`erro ao chamar a API : ${error}`);
            }
        };
        fetchLivro();
    }, [livros]);
    return (
        <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="titulo" style={{ width: '25%' }}></Column>
                <Column field="autor" header="autor" style={{ width: '25%' }}></Column>
                <Column field="editora" header="editora" style={{ width: '25%' }}></Column>
                <Column field="isbn" header="isbn" style={{ width: '25%' }}></Column>
                <Column field="valorAquisicao" header="valor da aquisição" style={{ width: '25%' }}></Column>
            </DataTable>
    )
}

export default TabelaLivro;