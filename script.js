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
                    {padding: "12px 0px", fontSize: "16px"}
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
                    {padding: "12px 0px", fontSize: "16px"},
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

function abrirDescricao(id, botao) {
    let img = document.getElementById("img_projeto" + id);
    let descricao_projeto = document.getElementById("descricao_projeto" + id);
    let descricao = descricao_projeto.querySelector("p");

    img.classList.remove("rotacionar1");
    img.classList.remove("rotacionar2");
    descricao.classList.remove("rotacionar1");
    descricao.classList.remove("rotacionar2");

    if (botao.textContent === "Ver Detalhes") {
        botao.textContent = "Fechar";
        botao.disabled = true;
        img.classList.toggle("rotacionar1")
        img.animate([
            {opacity: "1"},
            {opacity: "0"}
        ], {
            duration: 700,
            fill: "forwards"
        });
        task = setTimeout(() => {
            img.style.display = "none";
            descricao.style.display = "block";
            descricao.classList.toggle("rotacionar2");
            task = setTimeout(() => {
                botao.disabled = false;
            }, 700);
            descricao.animate([
                {opacity: "0"},
                {opacity: "1"}
            ], {
                duration: 700,
                fill: "forwards"
            });
        }, 700);
    } else {
        botao.textContent = "Ver Detalhes";
        botao.disabled = true;
        descricao.classList.toggle("rotacionar1");
        descricao.animate([
            {opacity: "1"},
            {opacity: "0"}
        ], {
            duration: 700,
            fill: "forwards"
        });
        task = setTimeout(() => {
            descricao.style.display = "none";
            img.style.display = "block";
            img.classList.toggle("rotacionar2");
            task = setTimeout(() => {
                botao.disabled = false;
            }, 700);
            img.animate([
                {opacity: "0"},
                {opacity: "1"}
            ], {
                duration: 700,
                fill: "forwards"
            });
        }, 700);
    }   
}