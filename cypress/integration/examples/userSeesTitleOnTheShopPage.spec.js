// <reference types="cypress" /> 
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
import homePage from '../PageObject/Homepage'

describe('User sees Title On The Shop Page', ()=>{
        it("Navigate to Home Page and Agree to Consents", function(){
            cy.visit("http://sky.com")
            //find the frame id
            cy.frameLoaded('[title="SP Consent Message"]')  //swithc to iframe mod
            cy.iframe('[title="SP Consent Message"]')             // using the ifame 
                .find('button[title="Agree"]').click()
    })
    it('Login with invalid credentials',()=>{
        
    })
})