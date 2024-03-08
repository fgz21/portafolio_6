 document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    })
  })




// Seleccionar todos los elementos con el atributo 'title'
const button = document.querySelector('button[data-tooltip-target="tooltip"]');
const email = button.textContent.trim();

button.addEventListener('click', () => {
  // Crear un elemento de texto temporal para copiar el correo electrónico
  const tempInput = document.createElement('input');
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Mostrar mensaje de éxito
  alert(`Copied Email: ${email}`);
});