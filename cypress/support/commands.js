// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkItemOrderWindow', () => {
    const orderItemWindow = "#detail_modal_buy > div > div > div.modal-body";
    const nameFiled = "#field-basket-name";
    const phoneField = "#field-basket-phone";
    const radioRequestCall = "#field-get-call";
    const radioRequestCallAndEmail = '#field-get-call-and-letter';
    const checkBoxLabel = '#detail_modal_buy > div > div > div.modal-body > div.detail_modal_buy_one_click > form > div:nth-child(12) > div.form-agreement-classic.d-flex > label';
    const checkBogsAgreemnet = "#field-agreement";
    const sendButton = '#detail_modal_buy > div > div > div.modal-body > div.detail_modal_buy_one_click > form > button'

    cy.get(orderItemWindow).should('be.visible');
    cy.get(nameFiled).invoke('attr', 'placeholder').should('contain', '* Имя');
    cy.get(phoneField).invoke('attr', 'placeholder').should('contain', '+7 (___) ___-__ -__');
    cy.get(radioRequestCall).invoke('attr', 'type').should('contain', 'radio')
    cy.get(radioRequestCall).should('have.value', 'Заказать звонок');
    cy.get(radioRequestCallAndEmail).should('attr', 'name');
    cy.get(radioRequestCallAndEmail).should('have.value', 'Заказать звонок и письмо');
    cy.get(checkBogsAgreemnet).should('be.checked');
    cy.get(checkBoxLabel)
        .should('have.text', '\n\t\t\t С условиями согласен\n\t\t')
        .find('a')
        .should('have.attr', 'href', '/user_agreement/')
        .should('have.text', 'условиями')
    cy.get(sendButton).should('be.enabled').should('have.text', 'Отправить');
})