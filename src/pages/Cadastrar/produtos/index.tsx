import NavBar_ from '../../../component/barraNavegacao'
import { Button } from 'react-bootstrap';

function CadastrarProdutos() {
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='cadastro-titulo'><strong>Cadastro de Produtos</strong></h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Nome do produto:</label>
                            <input placeholder='Insira o nome do produto como está no sistema' type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Valor R$:</label>
                            <input placeholder='R$ XX,XX' type="number" min={0} />
                        </div>
                        <Button className="submit" variant="outline" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarProdutos;