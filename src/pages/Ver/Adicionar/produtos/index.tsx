import {  Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../Listagem/styles.css'

function AdcProdutos() {
    const navigate = useNavigate();
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className="titles">  <strong>Produtos WB  </strong></h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className="titles-table">
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Creme</td>
                                <td>R$ 120,00</td>    
                                <td>
                                    <div>
                                        <a className="add-produto" href={`/adicionar_produto/1`}>Adicionar ao cliente</a> <br />  
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="button-l">
                    <Button className="submit submit-add" variant="outline" onClick={() => navigate(-1)}>Voltar</Button>{' '} 
                </div>
            </main>
        </section>
    );
}

export default AdcProdutos;