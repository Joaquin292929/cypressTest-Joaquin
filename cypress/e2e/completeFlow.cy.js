describe('Flujo Completo de Registro', () => {
    it('debe completar el flujo de registro exitosamente', () => {
        // Visitar la página de registro
        cy.visit('/registro.html');

        // Completar el formulario de registro
        cy.get('input[name="nombre"]').type('Juan Pérez');
        cy.get('input[name="email"]').type('juan@example.com');
        cy.get('input[name="password"]').type('Password123');
        cy.get('input[name="confirmPassword"]').type('Password123');
        cy.get('input[name="fechaNacimiento"]').type('1990-01-01');
        cy.get('input[name="telefono"]').type('1234567890');
        cy.get('input[name="terminos"]').check();

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Verificar redirección a la página de confirmación
        cy.url().should('include', '/confirmacion.html');

        // Verificar contenido de la página de confirmación
        cy.get('h1').should('contain', 'Bienvenido');
        cy.get('.user-info').should('contain', 'Juan Pérez');
        cy.get('.user-info').should('contain', 'juan@example.com');
    });
});