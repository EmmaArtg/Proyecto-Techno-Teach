document.addEventListener("DOMContentLoaded", function () {
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

//Para el grafico de barras

  document.addEventListener("DOMContentLoaded", function () {
      const currentPageUrl = window.location.href;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      navLinks.forEach(link => {
        if (currentPageUrl.includes(link.getAttribute('href'))) {
    link.classList.add('active');
        }
      });
  actualizarGrafico();
    });

  let grafico;

  function actualizarGrafico() {
      const tipo = document.getElementById('filtro').value;
  const ctx = document.getElementById('grafico').getContext('2d');

  let datos, etiquetas;

  if (tipo === 'ventas') {
    etiquetas = ['Efectivo', 'Transferencia'];
  datos = [1554000, 475500];
      } else if (tipo === 'gastos') {
    etiquetas = ['Insumos + Servicios', 'Capital Quincena', 'Arriendo'];
  datos = [1427050, 182000, 400000];
      }

  if (grafico) {
    grafico.destroy();
      }

  grafico = new Chart(ctx, {
    type: 'bar',
  data: {
    labels: etiquetas,
  datasets: [{
    label: `Total ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`,
  data: datos,
  backgroundColor: [
  '#4CAF50', '#2196F3', '#FF9800'
  ],
  borderRadius: 5
          }]
        },
  options: {
    responsive: true,
  scales: {
    y: {
    beginAtZero: true,
  ticks: {
    callback: function (value) {
                  return '$' + value.toLocaleString();
                }
              }
            }
          },
  plugins: {
    legend: {
    display: false
            },
  tooltip: {
    callbacks: {
    label: function (context) {
                  return '$' + context.parsed.y.toLocaleString();
                }
              }
            }
          }
        }
      });
    }
//para el carrusel
  const carousel = document.querySelector('#carouselCreadores');
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 2000,
    ride: 'carousel'
  });