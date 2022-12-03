import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';

function EditarProduto() {
    const navigate = useNavigate()
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1><strong>Editar Produto:</strong> Creme</h1>
                <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Nome" >Nome do Produto:</label>
                                <input placeholder="Altere o nome do produto" type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Nome" >Valor R$:</label>
                                <input placeholder="Altere o valor do produto" type="number" min={0}/>
                            </div>
                            <div className="campo-button campo-btns">
                                <div className="button-l">
                                    <Button className="submit" variant="outline" onClick={() => navigate(-1)}>Voltar</Button>{' '}
                                    
                                </div>
                                <div>
                                <Button className="submit btn-resp" variant="outline" type='submit'>Editar</Button>{' '}
                                </div>
                            </div>
                        </form>
                    </div>
            </main>

        </section>
    )
};

export default EditarProduto;