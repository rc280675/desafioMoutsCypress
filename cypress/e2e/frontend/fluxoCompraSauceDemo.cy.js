import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Fluxo de compra SauceDemo', () => {

  beforeEach(() => {
    LoginPage.visitar()
    LoginPage.login('standard_user', 'secret_sauce')
  })

  it('Deve realizar login com sucesso', () => {

    LoginPage.validarLoginSucesso()

  })

  it('Deve adicionar produto ao carrinho', () => {

    InventoryPage.adicionarPrimeiroProduto()
    InventoryPage.validarProdutoNoCarrinho()

  })

  it('Deve finalizar compra', () => {

    InventoryPage.adicionarPrimeiroProduto()
    InventoryPage.abrirCarrinho()

    CheckoutPage.iniciarCheckout()
    CheckoutPage.preencherDados('Teste', 'teste', '88800000')

    CheckoutPage.continuar()
    CheckoutPage.finalizar()

    CheckoutPage.validarCompraFinalizada()

  })

})