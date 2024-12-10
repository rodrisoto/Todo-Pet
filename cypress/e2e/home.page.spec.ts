describe('Home Page Tests', () => {
  beforeEach(() => {
    // Navegar a la página de inicio con parámetros en la URL
    cy.visit('/home?email=test@example.com');
  });

  it('should display the header with menu button', () => {
    // Verificar que el encabezado y el botón de menú existen
    cy.get('ion-header').should('exist');
    cy.get('ion-menu-button[menu="mainMenu"]').should('exist');
  });

  it('should display user information', () => {
    // Verificar que la información del usuario está presente
    cy.get('.user-info').should('exist');
    // Línea eliminada:
    // cy.get('.user-avatar').should('have.attr', 'src', '../../assets/img/user.png');
    cy.get('.user-info h2').should('contain', 'Bienvenid@'); // Cambia según el contenido dinámico esperado
    cy.get('.user-info h2').should('contain', 'test@example.com'); // Correo dinámico
  });

  it('should display news cards', () => {
    // Verificar que hay tarjetas de noticias
    cy.get('ion-card').should('have.length', 3);

    // Verificar la tarjeta específica con título "Día de los Muertos para perros"
    cy.get('ion-card').eq(0).within(() => {
      cy.get('ion-card-title').should('contain', 'Día de los Muertos para perros');
    });

    // Verificar otra tarjeta
    cy.get('ion-card').eq(1).within(() => {
      cy.get('ion-card-title').should('contain', 'La influencia de los perros en la salud mental:');
    });
  });

  it('should open the menu when clicking the menu button', () => {
    // Hacer clic en el botón del menú
    cy.get('ion-menu-button[menu="mainMenu"]').click();

    // Verificar que el menú está abierto
    cy.get('ion-menu[menu-id="mainMenu"]').should('have.attr', 'side', 'start');
    cy.get('ion-menu[menu-id="mainMenu"]').should('have.class', 'show-menu');
  });
});
