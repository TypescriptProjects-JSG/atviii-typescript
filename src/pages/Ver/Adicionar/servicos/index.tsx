import { Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdcServicos() {
    const navigate = useNavigate();
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className="titles"> <strong> Serviços WB</strong> </h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className="titles-table">
                            <tr>
                                <th>Serviço</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Massagem</td>
                                <td>R$ 500,00</td>    
                                <td>
                                    <div>
                                        <a href={`/adicionar_servico/1`}>Adicionar ao cliente</a> <br />  
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="button-l">
                        <Button className="submit" variant="outline" onClick={() => navigate(-1)}>Voltar</Button>{' '} 
                    </div>
                </div>
            </main>
        </section>
    );
}

export default AdcServicos;