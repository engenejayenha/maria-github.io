document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
  
    // Aplicar el tema guardado en localStorage
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggleBtn.textContent = 'Modo Claro';
    } else {
      themeToggleBtn.textContent = 'Modo Oscuro';
    }
  
    // Evento de clic en el botón para alternar el tema
    themeToggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
  
      // Verificar el estado actual y actualizar el botón
      if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggleBtn.textContent = 'Modo Oscuro';
        localStorage.setItem('theme', 'light');
      }
    });
  });
  
  // Función para cambiar entre modos
  function toggleMode() {
    const currentMode = localStorage.getItem('mode') || 'light'; // Por defecto es claro
    let newMode;
  
    if (currentMode === 'light') {
      newMode = 'dark';
    } else if (currentMode === 'dark') {
      newMode = 'colorblind';
    } else {
      newMode = 'light';
    }
  
    // Actualizar clase en el body
    document.body.classList.remove('light-mode', 'dark-mode', 'colorblind-mode');
    if (newMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (newMode === 'colorblind') {
      document.body.classList.add('colorblind-mode');
    }
  
    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem('mode', newMode);
  }
  
  // Cargar el modo guardado cuando se cargue la página
  document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('mode') || 'light';
    document.body.classList.add(`${savedMode}-mode`);
  
    // Evento para el botón de cambiar modo
    const toggleButton = document.getElementById('toggle-mode-btn');
    toggleButton.addEventListener('click', toggleMode);
  });
  