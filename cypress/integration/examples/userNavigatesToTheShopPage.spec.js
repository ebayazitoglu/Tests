/// <reference types="cypress" /> 
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
import homePage from '../PageObject/Homepage'

describe('Shop Page Is Usable', function(){
    it("Navigate to Home Page and Agree to Consents", function(){
        homePage.loadHomePageandAgree()
        cy.viewport(1536, 960)              //expand the cypress screen so that the top menu is visible
    })
    it('Navigate to Deals Page and verify the page url',()=>{
        cy.viewport(1536, 960)              //expand the cypress screen so that the top menu is visible
         homePage.topMmenuDeals().click()
        cy.url().should('eq', 'https://www.sky.com/deals')

    })
})