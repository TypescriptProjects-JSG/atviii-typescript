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
                <h1 className='titles'><strong>Clientes que menos consumiram</strong></h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome</th>
                                <th>Produtos</th>
                                <th>Servicos</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='body-table'>
                                <td>Júlia Sousa Gayotto </td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;