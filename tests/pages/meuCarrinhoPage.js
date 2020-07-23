/**
 * File: meuCarrinhoPage.js
 * Autor: Fernanda Ferreira
 * Data: 17/07/2020
 */

class MeuCarrinhoPage {
    // define os elementos
    get nomeProdutoLbl() { return $('section#sectionContent a > strong') }
    get qtdeProdutoLbl() { return $('input[data-id="qtdeSku"]') }
    get tipoPrazoFreteLbl() { return $('span[data-id="disponibilidade"]') }
    get valorFreteLbl() { return $('span[data-id="valor"]') }
    get valorProdutoUnLbl() { return $('ins[data-id="precoPorValorUnitario"]') }
    get valorTotalProdutoLbl() { return $('td[data-id="precoTotal"]') }
    get subTotalProdutoLbl() { return $('td[data-id="subTotalProdutos"]') }
    get freteConsultadoLbl() { return $('#Cep') }
    get subTotalfreteLbl() { return $('td[data-id="valorFrete"]') }
    get cupomDescontoLbl() { return $('td[data-id="cupom"]') }
    get valorTotalCarrinhoLbl() { return $('em[data-id="valorTotal"]') }
    get concluirCompraDownBtn() { return $('a[data-id="btnComprar"][class*="btConcluir"]') }

    //Metodos dos elementos de ação
    nomeProdutoValue() {
        this.nomeProdutoLbl.waitForDisplayed();
        return this.nomeProdutoLbl.getText();
    }
    qtdeProdutoValue() {
        this.qtdeProdutoLbl.waitForDisplayed();
        return this.qtdeProdutoLbl.getValue();
    }
    tipoPrazoFreteValue() {
        this.tipoPrazoFreteLbl.waitForDisplayed();
        return this.tipoPrazoFreteLbl.getText();
    }
    valorFreteValue() {
        this.valorFreteLbl.waitForDisplayed();
        return this.valorFreteLbl.getText();
    }
    valorProdutoUnValue() {
        this.valorProdutoUnLbl.waitForDisplayed();
        return this.valorProdutoUnLbl.getText();
    }
    valorTotalProdutoValue() {
        this.valorTotalProdutoLbl.waitForDisplayed();
        return this.valorTotalProdutoLbl.getText();
    }
    subTotalProdutoValue() {
        this.subTotalProdutoLbl.waitForDisplayed();
        return this.subTotalProdutoLbl.getText();
    }
    freteConsultadoValue() {
        this.freteConsultadoLbl.waitForDisplayed();
        return this.freteConsultadoLbl.getValue();
    }
    subTotalfreteValue() {
        this.subTotalfreteLbl.waitForDisplayed();
        return this.subTotalfreteLbl.getText();
    }
    cupomDescontoValue() {
        this.cupomDescontoLbl.waitForDisplayed();
        return this.cupomDescontoLbl.getText();
    }
    valorTotalCarrinhoValue() {
        this.valorTotalCarrinhoLbl.waitForDisplayed();
        return this.valorTotalCarrinhoLbl.getText();
    }
    concluirCompraClick() {
        this.concluirCompraDownBtn.waitForDisplayed();
        this.concluirCompraDownBtn.click();
    }
}

module.exports = MeuCarrinhoPage;