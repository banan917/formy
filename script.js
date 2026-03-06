let current = 0;
const screens = document.querySelectorAll(".screen");

const text = [
    "Ты добрая и искренняя 💕",
    "С тобой легко и тепло",
    "Ты делаешь мой мир лучше",
    "Я очень счастлив, что ты есть ❤️"
];

let line = 0;
let char = 0;
const typingBox = document.getElementById("typing");

function nextScreen() {
    if (current < screens.length - 1) {
        screens[current].classList.remove("active");
        current++;
        screens[current].classList.add("active");

        if (current === 1) {
            type();
            document.getElementById("bgMusic").play();
        }
    }
}

function type() {
    if (line < text.length) {
        if (char < text[line].length) {
            typingBox.innerHTML += text[line][char];
            char++;
            setTimeout(type, 50);
        } else {
            typingBox.innerHTML += "<br><br>";
            line++;
            char = 0;
            setTimeout(type, 500);
        }
    }
}

function showSecret() {
    const secret = document.getElementById("secretText");
    secret.style.opacity = 1;
    secret.innerHTML = "Ты моё самое тёплое чудо 💖";
}
