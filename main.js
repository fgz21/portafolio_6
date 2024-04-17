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
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Utilizar Toastify para mostrar un mensaje de éxito
     Toastify({
    text: `Copied Email: ${email}`,
    duration: 5000, // Duración en milisegundos
    gravity: "top", // Posición del mensaje
    backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 
  }).showToast();
});