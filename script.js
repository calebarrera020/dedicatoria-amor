const startDate = new Date("2024-12-24T00:00:00");

function updateCounter() {
    const now = new Date();
    const difference = Math.max(0, now - startDate);
    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.querySelector("#counter").textContent =
        `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

const leafColors = [
    "#c9a3ff", "#d7b7ff", "#e7ccff", "#b891f5",
    "#a979df", "#d9a6ef", "#efc4ff", "#f3dcff"
];

const leavesContainer = document.querySelector(".leaves");
const leafFragment = document.createDocumentFragment();

function isInsideHeart(x, y) {
    return Math.pow(x * x + y * y - 1, 3) - x * x * Math.pow(y, 3) <= 0;
}

for (let created = 0; created < 820;) {
    const x = Math.random() * 2.8 - 1.4;
    const y = Math.random() * 2.6 - 1.25;

    if (!isInsideHeart(x, y)) continue;

    const leaf = document.createElement("span");
    const size = 14 + Math.random() * 17;
    leaf.className = "leaf";
    leaf.textContent = "\u2665";
    leaf.style.left = `${50 + x * 34}%`;
    leaf.style.top = `${48 - y * 38}%`;
    leaf.style.fontSize = `${size}px`;
    leaf.style.setProperty("--leaf-color", leafColors[Math.floor(Math.random() * leafColors.length)]);
    leaf.style.setProperty("--rotation", `${Math.random() * 70 - 35}deg`);
    leaf.style.setProperty("--duration", `${2.5 + Math.random() * 3}s`);
    leaf.style.animationDelay = `${Math.random() * -5}s`;
    leafFragment.appendChild(leaf);
    created++;
}

leavesContainer.appendChild(leafFragment);

// Crea una transición triangular y suave entre la copa y el tronco.
const connectionFragment = document.createDocumentFragment();

for (let i = 0; i < 75; i++) {
    const progress = Math.random();
    const width = 13 * (1 - progress) + 3;
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    leaf.textContent = "\u2665";
    leaf.style.left = `${50 + (Math.random() * 2 - 1) * width}%`;
    leaf.style.top = `${74 + progress * 13}%`;
    leaf.style.fontSize = `${12 + Math.random() * 13}px`;
    leaf.style.setProperty("--leaf-color", leafColors[Math.floor(Math.random() * leafColors.length)]);
    leaf.style.setProperty("--rotation", `${Math.random() * 70 - 35}deg`);
    leaf.style.setProperty("--duration", `${2.5 + Math.random() * 3}s`);
    leaf.style.animationDelay = `${Math.random() * -5}s`;
    connectionFragment.appendChild(leaf);
}

leavesContainer.appendChild(connectionFragment);

function createFallingHeart() {
    const tree = document.querySelector(".tree");
    const heart = document.createElement("span");
    heart.className = "falling-heart";
    heart.textContent = "\u2665";
    heart.style.left = `${25 + Math.random() * 50}%`;
    heart.style.top = `${22 + Math.random() * 32}%`;
    heart.style.fontSize = `${12 + Math.random() * 12}px`;
    heart.style.setProperty("--leaf-color", leafColors[Math.floor(Math.random() * leafColors.length)]);
    heart.style.setProperty("--fall-time", `${3.5 + Math.random() * 2}s`);
    heart.style.setProperty("--drift", `${Math.random() * 100 - 50}px`);
    tree.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());
}

updateCounter();
setInterval(updateCounter, 1000);
setInterval(createFallingHeart, 700);
