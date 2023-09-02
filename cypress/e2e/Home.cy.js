describe('Find the flight', () => {
  it('Look for booking', () => {
    cy.intercept('GET', '/api/flight-confirmation', (req) => {
      // Simulate a successful login by modifying the response
      req.reply({
        statusCode: 200,
        body: {
          // Your mock response data here, e.g., a token or user information
          token: 'your_access_token',
        },
      });
    }).as('SearchFlight');
  
    // Visit the login page
    cy.visit('/')

    cy.get('.SearchCard--Wrapper > :nth-child(1) > h3').should('be.visible').click();
    cy.get('.From--Cards > .rbt > div > .rbt-input-main').click();
    cy.get('.From--Cards > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').should('be.visible').click().type('Sultan Abdul Halim Airport');
    cy.get('#Dropdown1-item-0').should('be.visible').click();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > div > .rbt-input-main').should('be.visible').click();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').should('be.visible').clear();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').should('be.visible').type('Nha-Trang Airport');
    cy.get('#Dropdown1-item-0').should('be.visible').click();
    cy.get('.SearchCard--Wrapper > :nth-child(3) > :nth-child(1)').should('be.visible').click();
    cy.get(':nth-child(3) > .Departure--Text > h3').should('be.visible').click();
    cy.get('.react-calendar__month-view__days').click();
    cy.get(':nth-child(19) > abbr').click();
   // cy.get('.react-calendar__month-view__days > :nth-child(7)').should('be.visible').click({force:true});
 //   cy.get(':nth-child(4) > .Departure--Text > h3').should('be.visible').click();
   // cy.get('.react-calendar__tile--active > abbr').click();
    cy.get(':nth-child(5) > :nth-child(1)').should('have.text', 'Travellers');
    cy.get('.Departure--Text--Travellers > h3').click();
    cy.get('.Departure--Text--Travellers > h3').click();
    cy.get('#adults').click();
    cy.get('#adults').click();
    cy.get('.Departure--Text--Travellers > h3').click();
    //cy.get(':nth-child(2) > .Traveller--dropbtn > span > .Count_number-p').click();
    cy.get('.Departure--Text--Travellers > h3').click();
    cy.get(':nth-child(3) > .Traveller--dropbtn > span > .Count_number-p').click();
    cy.get('.class--selection > h3').should('have.text', 'Class');
    cy.get('.class--selection > .rbt > div > .rbt-input-main').click();
    cy.get('#Dropdown1-item-0').should('have.text', 'Economy');
    cy.get('#Dropdown1-item-0 > .rbt-highlight-text').click();
    cy.get('.MuiButtonBase-root').should('have.text', 'Search');
    cy.get('.MuiButtonBase-root').should('be.visible');
    cy.get('.MuiButtonBase-root').click();
    //cy.wait('@SearchFlight');

  })
})