it('Review',()=>{
   cy.visit('/preview?adults=1&children=0&infants=0&numberOfSeats=9&departureDate=undefined&returnDate=undefined')

   //Traveler Details
   cy.get('[type="button"][data-progress="true"] > .mantine-15y9sjv > .mantine-Text-root').should('have.text', 'Traveler details');
   cy.get('.contact--details--user > h4').should('have.text', 'Adult 1');
   cy.get(':nth-child(2) > :nth-child(1) > .form-label').should('have.text', 'First name*');
   cy.get(':nth-child(1) > #validationCustom01').clear('J');
   cy.get(':nth-child(1) > #validationCustom01').type('JOhn');
   cy.get('.contact--details--user > :nth-child(2) > :nth-child(3) > .form-label').should('have.text', 'Last name*');
   cy.get('.contact--details--user > :nth-child(2) > :nth-child(3) > #validationCustom01').clear('A');
   cy.get('.contact--details--user > :nth-child(2) > :nth-child(3) > #validationCustom01').type('Ali');
   cy.get(':nth-child(2) > :nth-child(4) > .form-label').should('have.text', 'Gender*');
   cy.get(':nth-child(2) > :nth-child(4) > #validationCustom01').select('Female');
   cy.get(':nth-child(5) > .form-label').should('have.text', 'Date of birth*');
   cy.get('#mantine-r0').clear('1');
   cy.get('#mantine-r0').type('12-08-1998{enter}');
   cy.get('.Stepper--next').click();
   cy.get('#mantine-r2').click();
   cy.get('.PassPort--Text').should('have.text', 'Passport Information');
   cy.get('.contact--details--user > :nth-child(5) > :nth-child(1)').should('have.text', 'Expiry Date*ExpiryDate is required');
   cy.get('#mantine-r2').click();
   cy.get(':nth-child(5) > :nth-child(6) > .mantine-UnstyledButton-root').click();
   cy.get(':nth-child(5) > :nth-child(2) > .form-label').should('have.text', 'Issue Country*');
   cy.get('#mantine-r4').click();
   cy.get(':nth-child(5) > :nth-child(3) > .form-label').should('have.text', 'issued Date*');
   cy.get('#mantine-r6').click();
   cy.get('[type="button"][data-previous="true"]').click();
   cy.get(':nth-child(1) > :nth-child(2) > .mantine-UnstyledButton-root').click();
   cy.get(':nth-child(5) > :nth-child(4) > .form-label').should('have.text', 'Passport ID*');
   cy.get(':nth-child(5) > :nth-child(4) > #validationCustom01').clear('HJ789654');
   cy.get(':nth-child(5) > :nth-child(4) > #validationCustom01').type('HJ789654');
   cy.get('.contact--details--user').click();
   cy.get('.contact--details > h4').should('have.text', 'Contact details');
   cy.get('.contact--details > :nth-child(2) > .form-label').should('have.text', 'Contact email*');
   cy.get('.contact--details > :nth-child(2) > #validationCustom01').clear('est@gmail.com');
   cy.get('.contact--details > :nth-child(2) > #validationCustom01').type('est@gmail.com');
   cy.get('.contact--details > :nth-child(3)').should('have.text', 'Phone number*phoneNumber is required');
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').clear('5555-3333-3333');
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').type('5555-3333-3333');
   cy.get('.contact--details > h4').click();
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').click();
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').click();
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').clear('555) 555-1234');
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').type('555) 555-1234');
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').clear('555) 555-1234');
   cy.get('.contact--details > :nth-child(3) > #validationCustom01').type('555-555-1234');
   cy.get('h3').should('have.text', 'Ticket (1 adult)');
   cy.get('h2').should('have.text', 'Total');
   cy.get('.Stepper--next').click();
}
)