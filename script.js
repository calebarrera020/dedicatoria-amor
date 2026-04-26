// 💕 CAMBIA ESTA FECHA
const startDate = new Date("2024-01-01T00:00:00");

/* ⏱️ CONTADOR */
function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const h = hours % 24;
    const m = minutes % 60;
    const s = seconds % 60;

    document.getElementById("counter").innerHTML =
        `${days} días ${h} horas ${m} minutos ${s} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();

/* 🌳 GENERAR HOJAS EN EL ÁRBOL */
const leavesContainer = document.querySelector(".leaves");

for (let i = 0; i < 90; i++) {
    const leaf = document.createElement("span");
    leaf.innerHTML = "💜";

    leaf.style.left = Math.random() * 100 + "%";
    leaf.style.top = Math.random() * 100 + "%";
    leaf.style.fontSize = (10 + Math.random() * 12) + "px";

    leavesContainer.appendChild(leaf);
}

/* 🍃 HOJAS CAYENDO DESDE EL ÁRBOL */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "💜";

    // solo desde la zona del árbol (lado derecho)
    heart.style.left = (65 + Math.random() * 20) + "vw";
    heart.style.animationDuration = (4 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 600);
