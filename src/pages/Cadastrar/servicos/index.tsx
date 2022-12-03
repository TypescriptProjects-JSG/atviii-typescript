import NavBar_ from '../../../component/barraNavegacao'
import { Button } from 'react-bootstrap';

function CadastrarServicos() {
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='cadastro-titulo'><strong>Cadastro de Serviços</strong></h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Nome do serviço:</label>
                            <input placeholder='Insira o nome do serviço' type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Valor R$:</label>
                            <input placeholder='XX' type="number" min={0}  />
                        </div>
                        <Button className="submit" variant="outline" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarServicos;