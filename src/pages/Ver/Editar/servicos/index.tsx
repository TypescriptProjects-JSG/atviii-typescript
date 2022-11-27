import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../../Cadastrar/styles.css'
import '../../Listagem/styles.css'

function EditarServico() {
    const navigate = useNavigate()
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1><strong>Editar Serviço:</strong> Massagem</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome" >Nome do Serviço:</label>
                            <input placeholder="Altere o nome do serviço" type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Nome" >Valor R$:</label>
                            <input placeholder="Altere o valor do serviço" type="number" min={0}/>
                        </div>
                        <div className="campo-button">
                            <div className="button-l">
                                <Button className="submit" variant="outline" onClick={() => navigate(-1)}>Voltar</Button>{' '}
                            </div>
                            <div>
                                <Button className="submit" variant="outline" type='submit'>Editar</Button>{' '}
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
};

export default EditarServico;