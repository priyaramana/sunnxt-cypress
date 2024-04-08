/// <reference types = "Cypress"/>
import "cypress-real-events";

describe("Login page",()=>{
    let data;
    beforeEach("Launch webpage",()=>{
        cy.fixture("logincreds").then((fdata)=>{
            data = fdata
        cy.visit("https://www.sunnxt.com/")
        cy.get('.header_myaccount_logo__LnEUB > img').realHover()
        cy.contains("Sign In").click()
        cy.wait(2000)
    })
})
    it("valid cred's",()=>{  
        //cy.origin("https://www.sunnxt.com/signin",()=>{
        const {email, password} = data.valid;
        cy.Sunnxtlogin(email,password)
        cy.get("button[type='submit']").click()
        cy.wait(2000)
        cy.get('.header_myaccount_logo__LnEUB > img').realHover()
        cy.get('.header_logout__1Xu3f').should('be.visible')
})
it("invalid creds",()=>{
    const {email, pass} = data.invalid;
    cy.Sunnxtlogin(email,pass)
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    cy.get(".signin_validations__2rQgH").should("be.visible").and("have.text","User does not exist. Please sign up.")
})
it("empty email id field",()=>{
    
    cy.get("input[name='password']").type("pass")
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    cy.get(".signin_validations__2rQgH").should("be.visible").and("have.text","Please enter valid email or mobile number")
})
it("empty password field",()=>{
    cy.get("input[name='email']").type("email")
    //const {email, pass} = data.Pass;
    //cy.Sunnxtlogin(email,pass)
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    cy.get(".signin_validations__2rQgH").should("be.visible").and("have.text","Please enter password")
})

it("empty mail and pass fields",()=>{
    // const {email, pass} = data.Na;
    cy.get("input[name='email']").type("email")
    cy.get("input[name='password']").type("pass")
     cy.get("button[type='submit']").click()
     cy.wait(1000)
     cy.get(".signin_validations__2rQgH").should("be.visible").and("have.text","Please enter password").and("have.text","Please enter valid email or mobile number")
})
})