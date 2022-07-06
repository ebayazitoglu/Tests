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
// Cypress.Commands.add("login", (email, password) => { ... })

import Homepage from "../integration/PageObject/Homepage";
import 'cypress-iframe'
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('Login',function(username, password){
    cy.clearCookies();
    cy.intercept({
        method :'POST',
        url :   'https://agg.oogway.sky.com/idris/signin/methods/identifier'    
    },
    {
        statusCode : 200,
        body : {"authenticationmethods":["create"],"recoverymethods":[]}
    }).as('identifier')
    
    Homepage.loadHomePageandAgree()
    Homepage.signInLink().click()
    cy.frameLoaded('[title="iFrame containing Sky Sign-In application"]')      
    cy.iframe('[title="iFrame containing Sky Sign-In application"]')
        .find('#username')
        .click()
        .type('xxx@yyy.com').type('{enter}')
    cy.wait('@identifier').should('exist')
    
})