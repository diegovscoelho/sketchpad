const container = document.getElementById("container");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    let tamanho = prompt("Qual o tamanho do quadrado?");
    tamanho = parseInt(tamanho, 10);

    if (!isNaN(tamanho) && tamanho > 0 && tamanho <= 100) {
        container.innerHTML = ""; 
        const rows = tamanho;
        const columns = tamanho;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const gridItem = document.createElement("div");
                gridItem.className = 'grid-item';
                container.appendChild(gridItem);
            }
        }

        const gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach((item) => {
            item.style.height = `${800 / tamanho}px`; 
            item.style.width = `${800 / tamanho}px`;  
        });

        gridItems.forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "blue";
                setTimeout(() => {
                    item.style.backgroundColor = ""; 
                }, 500);
            });
        });
    } else {
        alert("Por favor, insira um número válido.");
    }
});
