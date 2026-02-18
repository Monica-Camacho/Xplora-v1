// Función para los botones de desplazamiento en las tarjetas
function scrollRight() {
    const wrapper = document.querySelector('.cards-wrapper');
    wrapper.scrollBy({ left: 200, behavior: 'smooth' });
}

function scrollInverse() {
    const wrapper = document.querySelector('.cards-wrapper');
    wrapper.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRightB() {
    const wrapper = document.querySelector('.popular-card-container');
    wrapper.scrollBy({ left: 200, behavior: 'smooth' });
}

function scrollInverseB() {
    const wrapper = document.querySelector('.popular-card-container');
    wrapper.scrollBy({ left: -200, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {

    // Función para la sección de preguntas frecuentes
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Alterna la clase "active" en el contenedor faq-item
            item.classList.toggle('active');
        });
    });

    // Función para el swiper (SECCIÓN ASOCIADOS)
    if (typeof Swiper !== "undefined" && document.querySelector('.clients-slider')) {
        const swiper = new Swiper('.clients-slider', {
            // 1. CONFIGURACIÓN BASE (Móvil)
            slidesPerView: 2, // Mostramos solo 2
            spaceBetween: 15, // Espacio ajustado
            loop: true,       // Carrusel infinito

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            // 2. BREAKPOINTS (Ajustes para pantallas más grandes)
            breakpoints: {
                // Tablet (>= 640px): Mostramos 3
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // Escritorio (>= 1024px): Mostramos 5 (o 4 si prefieres)
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }
        });
    }

    // Función de cambio de barra de búsqueda
    const btnViajeRedondo = document.getElementById("viaje-redondo");
    const btnViajeSencillo = document.getElementById("viaje-sencillo");
    const btnMultidestino = document.getElementById("multidestino");

    const barViajeRedondo = document.getElementById("viaje-redondo-bar");
    const barViajeSencillo = document.getElementById("viaje-sencillo-bar");
    const barMultidestino = document.getElementById("multidestino-bar");

    function changeSearchBar(selectedButton, selectedBar) {
        [btnViajeRedondo, btnViajeSencillo, btnMultidestino].forEach(btn => btn.classList.remove("active"));
        [barViajeRedondo, barViajeSencillo, barMultidestino].forEach(bar => bar.classList.add("hidden"));

        selectedButton.classList.add("active");
        selectedBar.classList.remove("hidden");
    }

    btnViajeRedondo.addEventListener("click", function () {
        changeSearchBar(btnViajeRedondo, barViajeRedondo);
    });

    btnViajeSencillo.addEventListener("click", function () {
        changeSearchBar(btnViajeSencillo, barViajeSencillo);
    });

    btnMultidestino.addEventListener("click", function () {
        changeSearchBar(btnMultidestino, barMultidestino);
    });

    // Funcion para agregar vuelo adicional
    const addFlightButton = document.getElementById('add-flight-btn');
    addFlightButton.addEventListener('click', function (event) {
        event.preventDefault();

        const multidestinoBar = document.getElementById('multidestino-bar');
        const vueloCount = multidestinoBar.querySelectorAll('.flight-section').length + 1;

        const newFlightSection = document.createElement('div');
        newFlightSection.classList.add('flight-cont');
        newFlightSection.innerHTML = `
            <h4>Vuelo ${vueloCount}</h4>
            <div class="flight-section">
                <div class="search-field">
                    <i class="bi bi-geo-alt icon"></i>
                    <input type="text" placeholder="Origen" class="form-control">
                </div>
                <div class="search-field">
                    <i class="bi bi-geo-alt icon"></i>
                    <input type="text" placeholder="Destino" class="form-control">
                </div>
                <div class="date-field">
                    <label>Fecha</label>
                    <input type="date" class="form-control">
                </div>
            </div>
        `;

        multidestinoBar.insertBefore(newFlightSection, addFlightButton);
    });

    // Funcion de contador de scroll (no sirve)
    function counter() {
        $('.counterUp').each(function () {
            var $this = $(this);
            var countTo = parseInt($this.attr('data-count'), 10);

            if (!$this.hasClass('hasCounted') && $this.offset().top < $(window).scrollTop() + $(window).height()) {
                console.log(`Iniciando conteo en: ${countTo}`);
                $this.addClass('hasCounted');

                $({ countNum: 0 }).animate(
                    { countNum: countTo },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    }
                );
            }
        });
    }

    // Ejecutar el contador al hacer scroll
    $(window).on('scroll', counter);
    counter();

});
