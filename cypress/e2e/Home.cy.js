describe('Find the flight', () => {
  it('Look for booking', () => {
    cy.visit('/')
    cy.get('.SearchCard--Wrapper > :nth-child(1) > h3').click();
    cy.get('.From--Cards > .rbt > div > .rbt-input-main').click();
    cy.get('.From--Cards > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').clear();
    cy.get('.From--Cards > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').type('mala');
    cy.get('#Dropdown1-item-3').click();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > div > .rbt-input-main').click();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').clear();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').type('viet');
    cy.get('#Dropdown1-item-1 > .rbt-highlight-text').click();
    cy.get(':nth-child(3) > .Departure--Text > h3').click();
    cy.get('.react-calendar__month-view__days > :nth-child(6) > abbr').click();
    cy.get(':nth-child(20) > abbr').click();
    cy.get('#adults').click();
    cy.get('#adults').click();
    cy.get(':nth-child(2) > .Traveller--dropbtn > span > .Count_number-p').click();
    cy.get(':nth-child(2) > .Traveller--dropbtn > span > .Count_number-p').click();
    cy.get('.MuiButtonBase-root').should('be.visible');
    cy.get('.MuiButtonBase-root').click();
  })
})