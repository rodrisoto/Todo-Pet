describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/login'); // Asegúrate de que esta ruta sea correcta
  });

  it('should display the login form', () => {
    cy.get('[data-test="email-input"]').should('exist');
    cy.get('[data-test="password-input"]').should('exist');
    cy.get('ion-button.login-button').should('exist');
  });

  it('should show an error for invalid login', () => {
    cy.get('[data-test="email-input"]').type('wrong@example.com');
    cy.get('[data-test="password-input"]').type('incorrect');
    cy.get('ion-button.login-button').click();
    cy.contains('Credenciales incorrectas').should('exist');
  });

  it('should navigate to registration page', () => {
    cy.get('ion-button.register-button').click();
    cy.url().should('include', '/registro');
  });
});
