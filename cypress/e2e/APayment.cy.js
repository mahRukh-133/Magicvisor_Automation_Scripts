it('Checkout Page',()=>{

  
    cy.readFile('cypress/fixtures/current-url.json').then((data) => {
      const currentURL = data.currentURL;
    
      // Check if the URL exists
      if (currentURL) {
        cy.visit(currentURL); // Visit the stored URL
        // Visit the root of the currentURL
      } else {
        // Handle the case where the URL is not found
        cy.log('No URL found in JSON file');
      }
    });
    
   
    
  
  
    cy.get('#email').click().type('testflow832+1@gmail.com');
    cy.get('[data-testid="card-tab-button"]').click();
    cy.get('#cardNumber').click().type('4242 4242 4242 4242');
    cy.get('#cardExpiry').clear('03 / ');
    cy.get('#cardExpiry').type('03 / 33');
    cy.get('#cardCvc').clear('3');
    cy.get('#cardCvc').type('333');
    cy.get('#billingName').clear('T');
    cy.get('#billingName').type('Test');
    cy.get('#enableStripePass').check();
    cy.get('#enableStripePass').uncheck();
    cy.get('.SubmitButton-IconContainer').click();
    // Verify user pay the payment successfully  
    cy.url().should('include','/confirmation?success=true')
    cy.get('.Stepper--next').click()
})