export const inicializarModoOscuro = () => {
    const btn = document.querySelector('#theme-toggle');
    const body = document.body;

    if (!btn) return;

    const aplicarTema = (esOscuro) => {
        if (esOscuro) {
            body.classList.add("dark-mode");
            btn.innerHTML = '🌙';
            localStorage.setItem("tema-preferido", "oscuro");
        } else {
            body.classList.remove("dark-mode");
            btn.innerHTML = '☀️';
            localStorage.setItem("tema-preferido", "claro");
        }
    };

    // 1. Primero vamos a buscar si hay algo guardado
    const guardado = localStorage.getItem("tema-preferido");

    // 2. Ahora sí, comprobamos
    if (guardado) {
        aplicarTema(guardado === "oscuro");
    } else {
        // 3. Si no hay nada guardado, miramos la hora (optimizada)
        const horaActual = new Date().getHours();
        const esDeNoche = horaActual >= 20 || horaActual < 8;
        aplicarTema(esDeNoche);
    }

    btn.addEventListener("click", () => {
        aplicarTema(!body.classList.contains("dark-mode"));
    });
};

export default inicializarModoOscuro;