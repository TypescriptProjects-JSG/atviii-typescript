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
                <h1 className='titles'> <strong>Clientes que mais consumiram em valor </strong></h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome</th>
                                <th>Total </th>
                            </tr>
                        </thead>
                        <tbody className='body-table'>
                            <tr>
                                <td>Carlos Eduardo Falandes</td>
                                <td>R$ 670</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;