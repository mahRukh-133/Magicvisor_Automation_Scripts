describe('Find the flight', () => {
    it('Look for booking', () => {
      cy.visit('/')




      cy.get('.From--Cards > .rbt > div > .rbt-input-main').click();
      cy.get('#Dropdown1').click();
     // cy.get('#Dropdown1-item-3').click();
      cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > div > .rbt-input-main').click();
      cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').clear();
      cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').type('vie');
      cy.get('#Dropdown1-item-1 > .rbt-highlight-text').click();
      cy.get(':nth-child(3) > .Departure--Text > h3').click();
      cy.get('.react-calendar__month-view__days').click();
      cy.get(':nth-child(19) > abbr').click();
      cy.get(':nth-child(33)').click();
      cy.get('.MuiButtonBase-root').click();
    })})