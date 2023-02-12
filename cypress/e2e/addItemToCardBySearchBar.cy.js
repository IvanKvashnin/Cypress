require('cypress-xpath')

const searchBar = "#header > div.main-header__top.top-header > div > div > div.main-header__search.search-block > div.search-form-wrapper > form > div > div > div > input";
const deltaF4 = "//*[@id='header']/div[2]/div/div[2]/div[3]/div[1]/ul/li[1]/a";
const itemTitleName = "#section_detail_product > div.product-card > div > div.row.detail-product__col-wrap > div.col-md-8.detail-product-index > div > h1";
const price = "#section_detail_product > div.product-card > div > div.row.detail-product__col-wrap > div.col-md-4 > div > div.detail-product__payment.payment-block > div.price-block.payment-block__price > div";
const addToBasketButton = "#section_detail_product > div.product-card > div > div.row.detail-product__col-wrap > div.col-md-4 > div > div.detail-product__payment.payment-block > button";

beforeEach(() => {
  cy.visit('/');
}) 

describe('Проверяем добавления товара в корзину', () => {
  it('Добаляем товар корзину через поисковую строку', () => {
    cy.get(searchBar).type('гидромолот');
    cy.xpath(deltaF4).click();
    cy.url().should('include', '/product/gidromolot-delta-f-4/');
    cy.get(itemTitleName).should(($h1) => expect($h1).contain('Гидромолот Delta F-4'));
    cy.get(price).should(($span) => expect($span).contain('209 500 ₽'));
    cy.get(addToBasketButton).should('be.visible').click();
    cy.checkItemOrderWindow();
  })
})
