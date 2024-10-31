const container = document.getElementById("container");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    let tamanho = prompt("Qual o tamanho do quadrado?");

    // Converte o tamanho para um número
    tamanho = parseInt(tamanho, 10);

    // Verifica se o tamanho é um número válido
    if (!isNaN(tamanho) && tamanho > 0 && tamanho <= 100) {
        // Limpa o contêiner antes de adicionar novos itens
        container.innerHTML = ""; 

        // Define o número de linhas e colunas
        const rows = tamanho;
        const columns = tamanho;

        // Cria os itens da grade
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const gridItem = document.createElement("div");
                gridItem.className = 'grid-item';
                container.appendChild(gridItem);
            }
        }

        // Ajusta o tamanho dos itens
        const gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach((item) => {
            item.style.height = `${800 / tamanho}px`; // Altura proporcional
            item.style.width = `${800 / tamanho}px`;  // Largura proporcional
        });

        // Adiciona os eventos de mouseover
        gridItems.forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "blue";
                setTimeout(() => {
                    item.style.backgroundColor = ""; // Remove a cor após 500ms
                }, 500);
            });
        });
    } else {
        alert("Por favor, insira um número válido.");
    }
});
