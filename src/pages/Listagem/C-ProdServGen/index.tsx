import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import '../styles.css'

function Consumos() {
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <div className="tables">
                    <h1 className='titles'><strong>Produtos mais consumidos por gênero</strong></h1>
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Sexo</th>
                                <th>Nome do produto</th>
                            </tr>
                        </thead>
                        <tbody className='body-table'>
                            <tr>
                                <td>Feminino</td>
                                <td>Esmalte preto</td>
                            </tr>
                            <tr>
                                <td>Masculino</td>
                                <td>Shampoo</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h1 className='titles'> <strong> Serviços mais consumidos </strong></h1>
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Sexo</th>
                                <th>Nome do serviço</th>
                            </tr>
                        </thead>
                        <tbody className='body-table'>
                            <tr>
                                <td>Feminino</td>
                                <td>Massagem</td>
                            </tr>
                            <tr>
                                <td>Masculino</td>
                                <td>Barbearia</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;