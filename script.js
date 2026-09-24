```javascript
/* ================= DATASET ================= */

const productosDataset = [
    {
        producto: 'Subwoofer 12"',
        categoria: 'Subwoofer',
        potencia: '250 W RMS',
        impedancia: '4 Ω'
    },
    {
        producto: 'BD-100',
        categoria: 'Driver',
        potencia: '100 W',
        impedancia: '8 Ω'
    },
    {
        producto: 'Taramps 400.4',
        categoria: 'Potencia',
        potencia: '400 W',
        impedancia: '4 Ω'
    },
    {
        producto: 'Parlante 5"',
        categoria: 'Parlante',
        potencia: '50 W RMS',
        impedancia: '4 Ω'
    }
];

const datasetBody = document.getElementById("dataset-body");

if (datasetBody) {

    datasetBody.innerHTML = "";

    productosDataset.forEach(producto => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.producto}</td>
            <td>${producto.categoria}</td>
            <td>${producto.potencia}</td>
            <td>${producto.impedancia}</td>
        `;

        datasetBody.appendChild(fila);

    });
}


/* ================= CAROUSEL ================= */

let currentSlide = 0;

function moveCarousel(direction) {

    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".product-card");

    if (!track || cards.length === 0) {
        return;
    }

    if (window.innerWidth <= 900) {

        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = cards.length - 1;
        }

        if (currentSlide >= cards.length) {
            currentSlide = 0;
        }

        track.style.display = "flex";
        track.style.transition = "transform 0.4s ease";
        track.style.transform =
            "translateX(-" + (currentSlide * 100) + "%)";

        cards.forEach(card => {
            card.style.minWidth = "100%";
        });
    }
}


/* ================= PRESENTACIÓN ================= */

let currentPresentation = 0;


/* Esta función queda disponible para el HTML */
window.changePresentation = function(direction) {

    const slides = document.querySelectorAll(".presentation-slide");
    const counter = document.getElementById("presentation-counter");

    if (!slides.length) {
        return;
    }

    /* Ocultar diapositiva actual */
    slides[currentPresentation].classList.remove("active");

    /* Cambiar número */
    currentPresentation += direction;

    /* Volver al final */
    if (currentPresentation < 0) {
        currentPresentation = slides.length - 1;
    }

    /* Volver al principio */
    if (currentPresentation >= slides.length) {
        currentPresentation = 0;
    }

    /* Mostrar nueva diapositiva */
    slides[currentPresentation].classList.add("active");

    /* Actualizar contador */
    if (counter) {
        counter.textContent =
            (currentPresentation + 1) + " / " + slides.length;
    }
};


/* ================= INICIO PRESENTACIÓN ================= */

const presentationSlides =
    document.querySelectorAll(".presentation-slide");

const presentationCounter =
    document.getElementById("presentation-counter");

if (presentationSlides.length > 0) {

    presentationSlides.forEach((slide, index) => {

        if (index === 0) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }

    });

    if (presentationCounter) {
        presentationCounter.textContent =
            "1 / " + presentationSlides.length;
    }
}


/* ================= SCROLL SUAVE ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
```
