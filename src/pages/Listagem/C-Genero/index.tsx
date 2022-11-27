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
                    <h1 className='titles'><strong>Clientes Masculino</strong></h1>
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        <tbody className='body-table'>
                            <tr>
                                <td>
                                    Carlos Eduardo Falandes
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <h1 className='titles'><strong>Clientes Feminino</strong></h1>
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        <tbody className='body-table'>
                            <tr>
                                <td>
                                    Júlia Sousa Gayotto
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Consumos;