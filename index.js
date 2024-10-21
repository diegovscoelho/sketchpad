const container = document.getElementById("container");
const rows = 16;
const columns = 16;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement("div");
        gridItem.className = 'grid-item';
        container.appendChild(gridItem);
    }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        // Muda a cor para azul
        item.style.backgroundColor = "blue";

        // Após 1 segundo (1000ms), volta para a cor original
        setTimeout(() => {
            item.style.backgroundColor = ""; // Remove o background inline, voltando ao valor original
        }, 500);
    });
});
