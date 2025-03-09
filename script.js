document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Campos del formulario
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const terminosCheckbox = document.getElementById('terminos');
    const telefonoInput = document.getElementById('telefono');
    
    // Expresiones regulares para validación
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    // Función para mostrar mensajes de error
    function showError(input, errorElement) {
        const error = document.querySelector(`[data-error="${errorElement}"]`);
        if (error) {
            error.style.display = 'block';
        }
        input.classList.add('error');
    }
    
    // Función para ocultar mensajes de error
    function hideError(input, errorElement) {
        const error = document.querySelector(`[data-error="${errorElement}"]`);
        if (error) {
            error.style.display = 'none';
        }
        input.classList.remove('error');
    }
    
    // Validar nombre
    nombreInput.addEventListener('blur', function() {
        if (!nombreInput.value.trim()) {
            showError(nombreInput, 'nombre');
        } else {
            hideError(nombreInput, 'nombre');
        }
        validateForm();
    });
    
    // Validar email
    emailInput.addEventListener('blur', function() {
        if (!emailInput.value.trim()) {
            showError(emailInput, 'email');
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'email');
        } else {
            hideError(emailInput, 'email');
        }
        validateForm();
    });
    
    // Validar contraseña
    passwordInput.addEventListener('blur', function() {
        if (!passwordInput.value) {
            showError(passwordInput, 'password');
        } else if (!passwordRegex.test(passwordInput.value)) {
            showError(passwordInput, 'password');
        } else {
            hideError(passwordInput, 'password');
        }
        
        // Re-validar confirmación si ya tiene contenido
        if (confirmPasswordInput.value) {
            validatePasswordMatch();
        }
        validateForm();
    });
    
    // Validar confirmación de contraseña
    confirmPasswordInput.addEventListener('blur', function() {
        validatePasswordMatch();
        validateForm();
    });
    
    function validatePasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'confirmPassword');
        } else {
            hideError(confirmPasswordInput, 'confirmPassword');
        }
    }
    
    // Validar términos y condiciones
    terminosCheckbox.addEventListener('change', function() {
        if (!terminosCheckbox.checked) {
            showError(terminosCheckbox, 'terminos');
        } else {
            hideError(terminosCheckbox, 'terminos');
        }
        validateForm();
    });

    // Validar teléfono
    telefonoInput.addEventListener('blur', function() {
        if (!telefonoInput.value.trim()) {
            showError(telefonoInput, 'telefono');
        } else {
            hideError(telefonoInput, 'telefono');
        }
        validateForm();
    });
    
    // Validar el formulario completo
    function validateForm() {
        // Verificar si hay errores en el formulario
        const isNombreValid = nombreInput.value.trim() !== '';
        const isEmailValid = emailRegex.test(emailInput.value);
        const isPasswordValid = passwordRegex.test(passwordInput.value);
        const isPasswordMatch = passwordInput.value === confirmPasswordInput.value;
        const isTerminosChecked = terminosCheckbox.checked;
        const isTelefonoValid = telefonoInput.value.trim() !== '';
        
        // Habilitar o deshabilitar el botón de envío
        submitBtn.disabled = !(isNombreValid && isEmailValid && isPasswordValid && isPasswordMatch && isTerminosChecked && isTelefonoValid);
    }
    
    // Validar al enviar el formulario
    form.addEventListener('submit', function(event) {
        // Validar todos los campos obligatorios
        if (!nombreInput.value.trim()) {
            showError(nombreInput, 'nombre');
            event.preventDefault();
        }
        
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            showError(emailInput, 'email');
            event.preventDefault();
        }
        
        if (!passwordRegex.test(passwordInput.value)) {
            showError(passwordInput, 'password');
            event.preventDefault();
        }
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'confirmPassword');
            event.preventDefault();
        }
        
        if (!terminosCheckbox.checked) {
            showError(terminosCheckbox, 'terminos');
            event.preventDefault();
        }

        if (!telefonoInput.value.trim()) {
            showError(telefonoInput, 'telefono');
            event.preventDefault();
        }
    });
    
    // Validar el formulario al cargar la página
    validateForm();
});