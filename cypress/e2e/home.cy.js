it('Search For Flight',()=>{
    cy.visit('https://www.magicviser.com/')








    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > :nth-child(1) > .RadioButton--class > .form-check-label').click();
    cy.get('#Multi-city').check();
    cy.get('.From--Cards > .rbt > div > .rbt-input-main').click();
    cy.get('.From--Cards > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').clear();
    cy.get('.From--Cards > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').type('mala');
    cy.get('#Dropdown1-item-3 > .rbt-highlight-text').click();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > h3').click();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > div > .rbt-input-main').click();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').clear();
    cy.get('.SearchCard--Wrapper > :nth-child(2) > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > .rbt-input-main').type('viet');
    cy.get('#Dropdown1-item-0').click();
    cy.get(':nth-child(3) > .Departure--Text > h3').click();
    cy.get(':nth-child(32) > abbr').click();
    cy.get(':nth-child(4) > .Departure--Text > h3').click();
    cy.get(':nth-child(4) > .Departure--Text > h3').click();
    cy.get(':nth-child(33) > abbr').click();
    cy.get('#adults').click();
    cy.get('.MuiButtonBase-root').click();
    /* ==== End Cypress Studio ==== */
})