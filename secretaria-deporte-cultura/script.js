// ===============================
// CAMBIO DE TEMA CLARO / OSCURO
// ===============================

function cambiarTema() {
    document.body.classList.toggle("dark-mode");
}


// ===============================
// ANIMACIÓN SUAVE AL CARGAR
// ===============================

window.addEventListener("load", function () {
    document.body.classList.add("fade-in");
});


// ===============================
// TRANSICIÓN SUAVE ENTRE PÁGINAS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const url = this.href;

                document.body.classList.remove("fade-in");
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = url;
                }, 400);
            });
        }
    });

});

