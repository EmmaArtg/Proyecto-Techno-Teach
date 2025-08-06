document.addEventListener("DOMContentLoaded", function() {
  // Obtener la URL de la página actual
  const currentPageUrl = window.location.href;

  // Obtener todos los enlaces de la barra de navegación
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Recorrer cada enlace para compararlo con la URL actual
  navLinks.forEach(link => {
    // Si la URL de la página actual contiene el href del enlace
    if (currentPageUrl.includes(link.getAttribute('href'))) {
      // Se le añade la clase 'active' para resaltarlo
      link.classList.add('active');
    }
  });
});
