/// <reference types = "Cypress"/>
//import {testData} from '../fixtures/example.json';
describe("Login test", ()=>{
    it("login page", ()=> {
        cy.visit("https://www.saucedemo.com/");
       /* testData.forEach((items) => {
            
            cy.get("#user-name").clear().type(items.email);
            cy.get("#password").clear().type(items.password);*/
        })
    });
