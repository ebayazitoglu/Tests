
/// <reference types="cypress" />
import 'cypress-iframe'

import Homepage from "../PageObject/Homepage";

describe("Login with given credentials", () => {
    it("Login ", () => {
      cy.Login()
      cy.frameLoaded('[title="iFrame containing Sky Sign-In application"]')      
      cy.iframe('[title="iFrame containing Sky Sign-In application"]').within(()=>{
        cy.get(Homepage.cratePasswordMessage().should('be.visible'))
      })  
    });
  });
  
 