function verMais() {
    let outrosProjetos = document.getElementById("outros_projetos");
    let botaoVerMais = document.querySelector(".botao_ver_mais");

    if (outrosProjetos.style.display === "none") {
        outrosProjetos.style.display = "block";
        botaoVerMais.textContent = "Ver menos";
    } else {

        outrosProjetos.style.display = "none";
        botaoVerMais.textContent = "Ver mais";
    }
}   