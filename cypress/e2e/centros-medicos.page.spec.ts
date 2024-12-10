describe('Centros Médicos Page Tests', () => {
  beforeEach(() => {
    // Navegar a la página de centros médicos
    cy.visit('/centros-medicos');
  });

  it('should display the title "Centros Médicos"', () => {
    // Verificar que el título está presente
    cy.get('ion-title', { timeout: 10000 }).should('contain', 'Centros Médicos');
  });

  it('should display a list of medical centers', () => {
    // Verificar que la lista de centros médicos está presente
    cy.get('ion-list', { timeout: 10000 }).should('exist');

    // Verificar que hay al menos un centro médico
    cy.get('ion-item').should('have.length.at.least', 1);

    // Verificar contenido de un elemento
    cy.get('ion-item').first().within(() => {
      cy.get('h2').should('contain', 'Veterinaria El Bosque'); // Cambia según los datos reales
      cy.get('p').should('contain', 'Av. El Bosque 0123, Santiago, Chile'); // Cambia según los datos reales
      cy.get('.product-image').should('have.attr', 'src').and('not.be.empty');
    });
  });

  it('should correctly render medical center images', () => {
    // Verificar que todas las imágenes tienen un atributo src válido
    cy.get('.product-image', { timeout: 10000 })
      .should('have.length.at.least', 1)
      .each(($img) => {
        cy.wrap($img).invoke('attr', 'src').then((src) => {
          cy.log('Imagen encontrada:', src);
        });
        cy.wrap($img).should('have.attr', 'src').and('not.be.empty');
      });
  });
});
