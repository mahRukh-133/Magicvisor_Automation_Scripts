// cypress/support/commands.js

Cypress.Commands.add('visitURL', (url) => {
    cy.visit(url);
  });
  
  // cypress/support/commands.j

Cypress.Commands.add('generateUniqueFirstName', () => {
    // Sample array of first names (you can replace these with your own data)
    const firstNames = ["John", "Emma", "Michael", "Sophia", "William"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    return randomFirstName;
  });
  
  Cypress.Commands.add('generateUniqueLastName', () => {
    // Sample array of last names (you can replace these with your own data)
    const lastNames = ["Smith", "Johnson", "Brown", "Lee", "Davis"];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return randomLastName;
  });
  Cypress.Commands.add('checkFileExistence', (filePath) => {
    cy.readFile(filePath, 'utf-8').should('exist');
  });
  