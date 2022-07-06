/// <reference types="cypress" />
//import 'cypress-iframe'
import Homepage from "../PageObject/Homepage";


describe('Show Deals',()=>{
    it('See Deals',()=>{
        Homepage.loadHomePageandAgree()
        cy.viewport(1536, 960)  
        Homepage.searchButton().click()
        Homepage.searchInputBox().type('sky{enter}')
        Homepage.editorialSection().should('be.visible')   
    
})
})