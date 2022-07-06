/// <reference types="cypress" />
//import 'cypress-iframe'
import Homepage from "../PageObject/Homepage";


describe('Show Deals',()=>{
    it('See Deals',()=>{
        Homepage.loadHomePageandAgree()
        cy.visit('https://www.sky.com/deals/sky-q')
        cy.viewport(1536, 960)  
    
    cy.get('.text__Text-sc-1u9gciq-0.iNTDeb').first()
     .invoke('text', "£27.50")
     .should('text', '£27.50')
  
    cy.get('.text__Text-sc-1u9gciq-0.iNTDeb').eq(1)
     .invoke('text', '£66.50')
     .should('text', '£66.50')

    cy.get('.text__Text-sc-1u9gciq-0.iNTDeb').eq(2)
     .invoke('text', '£42.50')
     .should('text', '£42.50')
    
})
})