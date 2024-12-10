describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/login'); // Asegúrate de que esta ruta sea correcta
  });

  it('should display error for invalid email format', () => {
    cy.get('ion-input[data-test="email-input"]').type('invalidemail');
    cy.get('ion-input[data-test="password-input"]').type('1234');
    cy.get('ion-button[data-test="login-button"]').click();

    // Verifica que se muestre el mensaje de error
    cy.contains('El formato del correo es inválido.').should('exist');
  });

  it('should display error for empty password', () => {
    cy.get('ion-input[data-test="email-input"]').type('test@example.com');
    cy.get('ion-button[data-test="login-button"]').click();

    // Verifica que se muestre el mensaje de error
    cy.contains('El campo de contraseña no puede estar vacío.').should('exist');
  });

  it('should display error for invalid credentials', () => {
    cy.get('ion-input[data-test="email-input"]').type('wrong@example.com');
    cy.get('ion-input[data-test="password-input"]').type('1234');
    cy.get('ion-button[data-test="login-button"]').click();

    // Verifica que se muestre el mensaje de error
    cy.contains('Correo o contraseña incorrectos.').should('exist');
  });
});
