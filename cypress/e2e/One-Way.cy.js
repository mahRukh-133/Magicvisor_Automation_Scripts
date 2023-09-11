const fs = require('fs');
beforeEach(() => {
    // Add the window:beforeunload event listener to prevent page clearing
    cy.on('window:beforeunload', (event) => {
        event.preventDefault();
        event.returnValue = '';
      });
      
  });
// Function to generate a random first name
function generateRandomFirstName() {
  // Define an array of first names or use an API to fetch random names
  const firstNames = ["John", "Emma", "Michael", "Sophia", "William"];

  // Generate a random index to select a name from the array
  const randomIndex = Math.floor(Math.random() * firstNames.length);

  // Get the random first name
  return firstNames[randomIndex];
}


it('Round Trip',()=>{
  const uniqueFirstName = generateRandomFirstName();
  const uniqueLastName = cy.generateUniqueLastName();
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 7);
  
 cy.visit('https://www.magicviser.com/search-flights?originLocationCode=AOR&destinationLocationCode=BMV&departureDate=2023-10-12&null&adults=1&children=0&infants=0&nonStop=false&max=70&currencyCode=USD&class=Economy&oneway=true&2023-09-13')
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
 cy.url().should('include','/preview?adults=1&children=0&infants=0&numberOfSeats=9&departureDate=undefined&returnDate=undefined')

 //Treveller Details
 cy.get('[placeholder="First Name"]').click().type(uniqueFirstName); 
 //Last Name 
 cy.get(':nth-child(3) > :nth-child(3) > #validationCustom01').click().type('JOHNY')
 // Find the input element by its id and set its value to the current date
//cy.get('#dateInput').type(new Date().toLocaleDateString());
cy.get('.mantine-Input-input').eq(0).click().type(new Date().toLocaleDateString())
cy.get('.mantine-Input-input').eq(1).click({force:true}).type(futureDate.toLocaleDateString())
// Find the input element by its placeholder text
cy.get('.mantine-Input-input').eq(2).click()
cy.contains("Aruba").click()

cy.get('.mantine-Input-input').eq(3).click({force:true}).type(new Date(Date.now() - 31536000000).toLocaleDateString())
cy.get(':nth-child(6) > :nth-child(4) > #validationCustom01').click().type('4773-761972-05082595')
cy.get('.contact--details > :nth-child(2) > #validationCustom01').click().type('Test@gmail.com')
cy.get('.contact--details > :nth-child(3) > #validationCustom01').click().type('555-555-1234')
cy.get('.Stepper--next').click()
cy.get('#agree').click()
cy.get('.Stepper--next').click()



cy.url().then((url) => {
  // Create a JSON object with the URL
  const data = { currentURL: url };

  // Write the JSON object to a file
  cy.writeFile('cypress/fixtures/current-url.json', data); // Save the data to a JSON file});

 
})


it('Checkout Page',()=>{
  cy.readFile('cypress/fixtures/current-url.json').then((data) => {
    const currentURL = data.currentURL;

    // Check if the URL exists
    if (currentURL) {
      cy.visit(currentURL); // Visit the stored URL
      
    } else {
      // Handle the case where the URL is not found
      cy.log('No URL found in JSON file');
    }
    }

    
    
  )
  
})

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
