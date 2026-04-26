// 👉 CAMBIA ESTA FECHA
const startDate = new Date("2024-12-24T00:00:00");

/* contador */
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

/* 🌳 hojas formando corazón (ESTO ES LO IMPORTANTE) */
const container = document.querySelector(".leaves");

const centerX = 150;
const centerY = 130;
const scale = 7;

for (let i = 0; i < 140; i++) {

    const t = Math.random() * Math.PI * 2;

    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

    const leaf = document.createElement("span");
    leaf.innerHTML = "💜";

    leaf.style.left = (centerX + x * scale) + "px";
    leaf.style.top = (centerY + y * scale) + "px";

    leaf.style.fontSize = (8 + Math.random() * 10) + "px";
    leaf.style.opacity = 0.7;

    container.appendChild(leaf);
}

/* 🍃 hojas cayendo desde el árbol */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "💜";

    heart.style.left = (65 + Math.random() * 20) + "vw";
    heart.style.animationDuration = (4 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 600);
