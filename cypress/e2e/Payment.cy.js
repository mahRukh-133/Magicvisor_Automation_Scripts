it('',()=>{
    cy.visit('https://checkout.stripe.com/c/pay/cs_test_a1Gl2jx2aZrY40w9cl3oOW1Yc1anduxHTTCjO3dMkoJJawWO5cgZoXCFlS#fidkdWxOYHwnPyd1blpxYHZxWjA0SE5%2FSUtHYDBNbHdHbzdxa3ZcVmZ9SFZdYDBQQ2p2VDBgYmd3Z1FRRkNdSGdqc3JydEtGYU9rSm1Of1ZmVHNLclxUT0ZGajddf3JpM39LfT1IRkp9M2t3NTVGZGdQampRdScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').clear('testflow832+1@gmail.com');
    cy.get('#email').type('testflow832+1@gmail.com');
    cy.get('[data-testid="card-tab-button"]').click();
    cy.get('[data-testid="card-tab-button"]').click();
    cy.get('#cardNumber').clear('4');
    cy.get('#cardNumber').type('4242 4242 4242 4242');
    cy.get('#cardExpiry').clear('03 / ');
    cy.get('#cardExpiry').type('03 / 33');
    cy.get('#cardCvc').clear('3');
    cy.get('#cardCvc').type('333');
    cy.get('#billingName').clear('T');
    cy.get('#billingName').type('Test');
    cy.get('#enableStripePass').check();
    cy.get('#enableStripePass').uncheck();
    cy.get('.SubmitButton-IconContainer').click();
    /* ==== End Cypress Studio ==== */
})