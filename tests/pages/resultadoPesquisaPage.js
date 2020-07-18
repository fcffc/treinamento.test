/**
 * File: resultadoPesquisaPage.js
 * Autor: Fernanda Ferreira
 * Data: 17/07/2020
 */
const expect = require('chai').expect;

class ResultadoPesquisaPage {
    // define os elementos
    get resultadoBuscaLbl() { return $('div#pnlPanel span > h1') }

    // get selectMenorPreco() { return $('select[option="Menor preço"]') }

    get selectMenorPreco() { return $('select > option:nth-child(3)') }

    get voltagem110() { return $('ul#neemu-search-filters li.neemu-filter.filter_voltagem > ul > li:nth-child(1) > a > span.neemu-filter-text') }

    get firstProductImg() { return $('div#pnlPanel li:nth-child(1) > div.nm-product-img-container > a > img') }

    get firstProductLink() { return $('div#pnlPanel li:nth-child(1) > div.nm-product-info > div.nm-product-name > a') }

    get firstPriceLbl() { return $('div#pnlPanel li:nth-child(1) > div.nm-product-info > div.nm-offer > a > div.nm-price-container > span.nm-price-value') }

    get firstFormaPgtoLbl() { return $('div#pnlPanel li:nth-child(1) > div.nm-product-info > div.nm-offer > a > div.nm-installment-container') }

    //Metodos dos elementos de ação
    resultadoBusca(texto) {
        this.resultadoBuscaLbl.waitForDisplayed();
        expect(this.resultadoBuscaLbl.getText()).to.equal(texto);
    }

    firstProductValue(){
        this.firstProductLink.waitForDisplayed();
        return this.firstProductLink.getText();
    }

    firstPriceValue(){
        this.firstPriceLbl.waitForDisplayed();
        return this.firstPriceLbl.getText();
    }

    firstFormaPgtoValue(){
        this.firstFormaPgtoLbl.waitForDisplayed();
        return this.firstFormaPgtoLbl.getText();
    }

    selecionarProduto(){
        this.selectMenorPreco.waitForDisplayed();
        this.selectMenorPreco.click();
        this.voltagem110.waitForDisplayed();
        this.voltagem110.click();
        this.firstProductImg.waitForDisplayed();
        this.firstProductImg.click();
    }
}

module.exports = ResultadoPesquisaPage;