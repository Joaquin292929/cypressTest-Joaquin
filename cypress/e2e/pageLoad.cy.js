describe('Carga de Página de Registro', () => {
  it('debe cargar la página de registro correctamente', () => {
      // Visitar la página de registro
      cy.visit('/registro.html');

      // Verificar que el formulario esté visible
      cy.get('form#registroForm').should('be.visible');

      // Verificar que todos los campos del formulario existan
      cy.get('input[name="nombre"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="password"]').should('exist');
      cy.get('input[name="confirmPassword"]').should('exist');
      cy.get('input[name="fechaNacimiento"]').should('exist');
      cy.get('input[name="telefono"]').should('exist');
      cy.get('input[name="terminos"]').should('exist');
      cy.get('button[type="submit"]').should('exist');
  });
});