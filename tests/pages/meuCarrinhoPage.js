/**
 * File: meuCarrinhoPage.js
 * Autor: Fernanda Ferreira
 * Data: 17/07/2020
 */

class MeuCarrinhoPage {
    // define os elementos
    get inputSearch() { return $('input[name="q"]') }

    //Metodos dos elementos de ação
    pesquisar(search){
        this.inputSearch.waitForDisplayed();
        this.inputSearch.setValue(search);
        browser.keys('Enter');
    }
}

module.exports = MeuCarrinhoPage;