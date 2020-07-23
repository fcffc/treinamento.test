/**
 * File: identificacaoPage.js
 * Autor: Fernanda Ferreira
 * Data: 22/07/2020
 */
const assert = require('chai').assert;
const expect = require('chai').expect;

class IdentificacaoPage {
    // define os elementos
    get tituloLbl() { return $('h2[data-id="titulo"]') }
    get sectionCompraLbl() { return $('div[class="resumoContent"] > h2') }

    //Metodos dos elementos de ação
    visualizarCompra(){
        this.tituloLbl.waitForDisplayed();
        assert.equal(this.tituloLbl.isDisplayed(), true);
        assert.equal(this.sectionCompraLbl.isDisplayed(), true);
        expect(this.sectionCompraLbl.getText()).to.equal("Resumo da compra");
    }
}

module.exports = IdentificacaoPage;