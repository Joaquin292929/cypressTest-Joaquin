describe('Casos Extremos del Formulario de Registro', () => {
    beforeEach(() => {
        cy.visit('/registro.html');
    });

    it('debe probar valores límite para cada campo', () => {
        // Nombre con longitud máxima
        cy.get('input[name="nombre"]').type('a'.repeat(255));
        cy.get('input[name="nombre"]').blur();
        cy.get('[data-error="nombre"]').should('not.be.visible');

        // Email con longitud máxima
        cy.get('input[name="email"]').type('a'.repeat(64) + '@example.com');
        cy.get('input[name="email"]').blur();
        cy.get('[data-error="email"]').should('not.be.visible');

        // Contraseña con longitud mínima
        cy.get('input[name="password"]').type('Abc12345');
        cy.get('input[name="password"]').blur();
        cy.get('[data-error="password"]').should('not.be.visible');

        // Confirmar contraseña con longitud mínima
        cy.get('input[name="confirmPassword"]').type('Abc12345');
        cy.get('input[name="confirmPassword"]').blur();
        cy.get('[data-error="confirmPassword"]').should('not.be.visible');

        // Teléfono con longitud máxima
        cy.get('input[name="telefono"]').type('1'.repeat(15));
        cy.get('input[name="telefono"]').blur();
        cy.get('[data-error="telefono"]').should('not.be.visible');
    });

    it('debe intentar inyección de scripts (básico)', () => {
        const scriptInjection = '<script>alert("XSS")</script>';
        cy.get('input[name="nombre"]').type(scriptInjection);
        cy.get('input[name="email"]').type('attack@example.com');
        cy.get('input[name="password"]').type('Password123');
        cy.get('input[name="confirmPassword"]').type('Password123');
        cy.get('input[name="telefono"]').type('1234567890');
        cy.get('input[name="terminos"]').check();

        cy.get('button[type="submit"]').click();

        // Verificar que el script se muestra como texto y no se ejecuta
        cy.url().should('include', '/confirmacion.html');
        cy.get('.user-info').should('contain', scriptInjection);
        // No debería activarse ninguna alerta (Cypress automáticamente fallaría si sucede)
    });

    it('debe probar caracteres especiales en los campos', () => {
        const nombreEspecial = 'Jüan Pér€z Ñíguez';
        cy.get('input[name="nombre"]').type(nombreEspecial);
        cy.get('input[name="email"]').type('juan.special@example.com');
        cy.get('input[name="password"]').type('Password123!');
        cy.get('input[name="confirmPassword"]').type('Password123!');
        cy.get('input[name="telefono"]').type('1234567890');
        cy.get('input[name="terminos"]').check();

        cy.get('button[type="submit"]').click();

        // Verificar que el nombre con caracteres especiales aparece correctamente
        cy.url().should('include', '/confirmacion.html');
        cy.get('.user-info').should('contain', nombreEspecial);
    });
});