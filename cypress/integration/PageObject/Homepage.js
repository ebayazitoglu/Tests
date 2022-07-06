export default{

    cookiesConsentAgree (){
        return cy.get('#sp_message_iframe_474555')
    },mainMenu () {
        return cy.get('burger.svelte-vq5b39')
    },
    topMmenuDeals (){
        return cy.get('[data-tracking-label=masthead_visit_primary_deals_link]')
    },
    signInLink () {
        return cy.get('[data-test-id=sign-in-link]')
    },
    inputUserName (){
        return cy.get('[data-testid=AUTHN__INPUT_LABEL]')
    },
    submitButton (){
        return cy.get('[data-testid=AUTHN__SUBMIT_BTN]')
    },
    cratePasswordMessage () {
        return cy.get('[data-testid=CREATE_PASSWORD__TITLE]')
    },
    searchButton (){
        return cy.get('[data-test-id=masthead-search-toggle-button]')
    },
    searchInputBox(){
        return cy.get('[data-test-id=input-box]')
    },
    editorialSection(){
        return cy.get('[data-test-id=editorial-image-section]')
    },

    loadHomePageandAgree () {
        cy.visit("https://www.sky.com/")
        //find the frame id
        cy.frameLoaded('[title="SP Consent Message"]')      //swithc to iframe mod
        cy.iframe('[title="SP Consent Message"]')             // using the ifame 
            .find('button[title="Agree"]').click()

    }
    }