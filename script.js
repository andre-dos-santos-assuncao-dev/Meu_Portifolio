function verMais() {
    let outrosProjetos = document.querySelectorAll(".outros_projetos");
    let botaoVerMais = document.querySelector(".botao_ver_mais");
    let caixaProjetos = document.querySelector(".caixa_projetos");

    if (botaoVerMais.textContent === "Ver mais") {
        caixaProjetos.animate([
            { maxHeight: "360px" },
            { maxHeight: "750px" }
        ], {
            duration: 500,
            fill: "forwards"
        });
        for (let i = 0; i < outrosProjetos.length; i++) {
            outrosProjetos[i].style.display = "block";
            let h3 = outrosProjetos[i].querySelector("h3");
            let button = outrosProjetos[i].querySelectorAll("button")
            for (let i = 0; i < button.length; i++) {
                button[i].animate([
                    {padding: "0px 0px", fontSize: "0px"},
                    {padding: "12px 12px", fontSize: "16px"}
                ], {
                    duration: 500,
                    fill: "forwards"
                });
            }
            h3.animate([
                { fontSize: "0px"},
                { fontSize: "20px"}
            ], {
                duration: 500,
                fill: "forwards"
            });
            outrosProjetos[i].animate([
                { maxHeight: "0px", transformOrigin: "top" },
                { maxHeight: "300px" }
            ], {
                duration: 500,
                fill: "forwards"
            });
        }
        botaoVerMais.textContent = "Ver menos";
    } else {
        caixaProjetos.animate([
            { maxHeight: "750px" },
            { maxHeight: "360px" }
        ], {
            duration: 500,
            fill: "forwards"
        });
        for (let i = 0; i < outrosProjetos.length; i++) {
            let h3 = outrosProjetos[i].querySelector("h3");
            let button = outrosProjetos[i].querySelectorAll("button");
            for (let i = 0; i < button.length; i++) {
                button[i].animate([
                    {padding: "12px 12px", fontSize: "16px"},
                    {padding: "0px 0px", fontSize: "0px"}
                ], {
                    duration: 400,
                    fill: "forwards"
                });
            }
            h3.animate([
                { fontSize: "20px"},
                { fontSize: "0px"}
            ], {
                duration: 500,
                fill: "forwards"
            });
            outrosProjetos[i].animate([
                { maxHeight: "300px"}, 
                { maxHeight: "0px", transformOrigin: "top"  }
            ], {    
                duration: 500, 
                fill: "forwards"
            });
            task = setTimeout(() => {       
                outrosProjetos[i].style.display = "none";
            }, 500);
        }
        
        botaoVerMais.textContent = "Ver mais";
    }
}   