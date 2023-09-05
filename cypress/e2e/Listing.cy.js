beforeEach(() => {
    // Add the window:beforeunload event listener to prevent page clearing
    cy.on('window:beforeunload', (event) => {
        event.preventDefault();
        event.returnValue = '';
      });
      
  });
it('Listing',()=>{
 cy.visit('https://www.magicviser.com/search-flights?originLocationCode=AOR&destinationLocationCode=BMV&departureDate=2023-09-09&returnDate=2023-09-16&adults=2&children=0&infants=0&nonStop=false&max=70&currencyCode=USD&class=Economy&oneway=false&2023-09-16')
 cy.get('.Flight--recomments--active > .Flight--recomment > h3').should('have.text', 'Recommended');
 cy.get(':nth-child(4) > .Flight--recomment > h3').should('have.text', 'Cheapest');
 cy.get(':nth-child(6) > .Flight--recomment > h3').should('have.text', 'Shortest');
 cy.get(':nth-child(8) > .Flight--recomment > h3').should('have.text', 'Alternate Dates');
 cy.get(':nth-child(4) > .Flight--recomment > h3').click();
 cy.get(':nth-child(6) > .Flight--recomment > h3').click();
 cy.get(':nth-child(8) > .Flight--recomment').click();
 cy.get(':nth-child(4) > .Flight--recomment > h4').click();
 cy.get(':nth-child(1) > li > .itinerary--parent > .checkout--section > #BuyBtn').should('have.text', 'Buy');
 cy.get(':nth-child(1) > li > .itinerary--parent > .checkout--section > #BuyBtn').should('be.enabled');
 cy.get(':nth-child(1) > li > .itinerary--parent > .checkout--section > #BuyBtn').click();
 cy.url().should('include','/preview?adults=2&children=0&infants=0&numberOfSeats=9&departureDate=undefined&returnDate=undefined')

 // Traveller Details
 cy.get('[type="button"][data-progress="true"] > .mantine-15y9sjv > .mantine-Text-root').should('have.text', 'Traveler details');
 cy.get('.User--Details--left > :nth-child(1) > :nth-child(2)').click();
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .form-label').should('have.text', 'First name*');
 //cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #validationCustom01').clear('JOhn');
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #validationCustom01').type('JOhn');
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .form-label').should('have.text', 'Middle name');
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(3) > .form-label').should('have.text', 'Last name*');
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(3) > #validationCustom01').clear('ali');
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(3) > #validationCustom01').type('ali');
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(4) > .form-label').should('have.text', 'Gender*');
 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > .form-label').should('have.text', 'Date of birth*');
 cy.get('#mantine-r0').click();
 cy.get(':nth-child(2) > :nth-child(4) > .mantine-UnstyledButton-root').click();
 cy.get(':nth-child(1) > .PassPort--Text').should('have.text', 'Passport Information');
 cy.get(':nth-child(1) > :nth-child(5) > :nth-child(1) > .form-label').should('have.text', 'Expiry Date*');
 cy.get('#mantine-r2').click();
 cy.get(':nth-child(5) > :nth-child(6) > .mantine-UnstyledButton-root').click();
 cy.get('.User--Details--left > :nth-child(1) > :nth-child(5) > :nth-child(2)').should('have.text', 'Issue Country*');
 cy.get('#mantine-r4').click({force:true})
 cy.get('#mantine-r4-1').click({force:true})
 cy.get(':nth-child(1) > :nth-child(5) > :nth-child(3) > .form-label').should('have.text', 'issued Date*');
 cy.get('#mantine-r6').click();
 cy.get('[type="button"][data-previous="true"]').click();
 cy.get(':nth-child(2) > :nth-child(2) > .mantine-UnstyledButton-root').click();
 cy.get(':nth-child(1) > :nth-child(5) > :nth-child(4) > .form-label').should('have.text', 'Passport ID*');
 cy.get(':nth-child(1) > :nth-child(5) > :nth-child(4) > #validationCustom01').clear('ABA9875413');
 cy.get(':nth-child(1) > :nth-child(5) > :nth-child(4) > #validationCustom01').type('ABA9875413');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .form-label').should('have.text', 'First name*');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > #validationCustom01').clear('H');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > #validationCustom01').type('Hey');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .form-label').should('have.text', 'Last name*');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > #validationCustom01').clear('k');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > #validationCustom01').type('khan');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .form-label').should('have.text', 'Gender*');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > #validationCustom01').select('Female');
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > .form-label').should('have.text', 'Date of birth*');
 cy.get('#mantine-r8').click();
 cy.get(':nth-child(5) > :nth-child(5) > .mantine-UnstyledButton-root').click();
 cy.get(':nth-child(2) > .PassPort--Text').should('have.text', 'Passport Information');
 cy.get('#mantine-ra').click();
 cy.get('.mantine-MonthLevel-monthLevel').click();
 cy.get('[type="button"][data-next="true"] > .mantine-480qv8').as('btn')
 cy.get('@btn').click()
 cy.get(':nth-child(2) > :nth-child(5) > :nth-child(2) > .form-label').should('have.text', 'Issue Country*');
 cy.get('#mantine-rc').click();
 cy.get('#mantine-rc-1').click()
 cy.get(':nth-child(2) > :nth-child(5) > :nth-child(3) > .form-label').should('have.text', 'issued Date*');
 cy.get('#mantine-re').click();
 cy.get(':nth-child(1) > :nth-child(5) > .mantine-UnstyledButton-root').click();
 cy.get(':nth-child(2) > :nth-child(5) > :nth-child(4) > .form-label').should('have.text', 'Passport ID*');
 cy.get(':nth-child(2) > :nth-child(5) > :nth-child(4) > #validationCustom01').clear('RT678543');
 cy.get(':nth-child(2) > :nth-child(5) > :nth-child(4) > #validationCustom01').type('RT678543');
 cy.get('.contact--details > h4').should('have.text', 'Contact details');
 cy.get('.contact--details > :nth-child(2) > .form-label').should('have.text', 'Contact email*');
 cy.get('.contact--details > :nth-child(2) > #validationCustom01').clear('est@gmail.com');
 cy.get('.contact--details > :nth-child(2) > #validationCustom01').type('est@gmail.com');
 cy.get('.contact--details > :nth-child(3) > .form-label').should('have.text', 'Phone number*');
 cy.get('.contact--details > :nth-child(3) > #validationCustom01').clear('555-555-1234');
 cy.get('.contact--details > :nth-child(3) > #validationCustom01').type('555-555-1234');
 cy.get('h2').should('have.text', 'Total');
 cy.get(':nth-child(1) > h5').should('have.text', '$441.20');
 cy.get('.Stepper--next').should('have.text', 'Next');
 cy.get('.Stepper--next').should('be.enabled');
 cy.get('.Stepper--next').click();
 cy.get('#agree').click()
  cy.get('.Stepper--next').click()
 cy.wait(6000)
 //cy.visit('https://checkout.stripe.com/c/pay/cs_test_a10FhAQ7pNOR31PgeXp6gxuWzdswBR0NmIhV0ItUFjp8qm1AuKjwoW2UVe#fidkdWxOYHwnPyd1blpxYHZxWjA0SE5%2FSUtHYDBNbHdHbzdxa3ZcVmZ9SFZdYDBQQ2p2VDBgYmd3Z1FRRkNdSGdqc3JydEtGYU9rSm1Of1ZmVHNLclxUT0ZGajddf3JpM39LfT1IRkp9M2t3NTVGZGdQampRdScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl')
// cy.url().should('include','')
 //cy.intercept('POST', 'https://r.stripe.com/0').as('stripeRequest');

 // Perform actions that trigger the Stripe request in your application
  //Preview
 
 //cy.wait('@stripeRequest').then((interception) => {
   // Access the intercepted request and response data if needed
  // const request = interception.request;
  // const response = interception.response;
 
   // Perform assertions or additional actions based on the intercepted data
   // For example, you can check the response status code or response body
 //  expect(response.statusCode).to.equal(200);
// });
 
})

