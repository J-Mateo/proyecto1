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

    const guardado = localStorage.getItem("tema-preferido");
    if (guardado) {
        aplicarTema(guardado === "oscuro");
    } else {
        const esDeNoche = new Date().getHours() >= 20 || new Date().getHours() < 8;
        aplicarTema(esDeNoche);
    }

    btn.addEventListener("click", () => {
        aplicarTema(!body.classList.contains("dark-mode"));
    });
};
export default inicializarModoOscuro;