function nextSlide() {
  document.getElementById("slide1").classList.add("hidden");
  document.getElementById("slide2").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play();

  startBungaAnimation();
}

// LOVE RAIN
function createHeartRain() {
  const loveArea = document.querySelector('.love-animation');
  setInterval(() => {
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 16 + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    loveArea.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 200);
}

// SNOW RAIN
function createSnowRain() {
  const snowArea = document.querySelector('.snow-animation');
  setInterval(() => {
    const snow = document.createElement('span');
    snow.textContent = '❄️';
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.fontSize = Math.random() * 20 + 10 + 'px';
    snow.style.animationDuration = (Math.random() * 4 + 2) + 's';
    snowArea.appendChild(snow);
    setTimeout(() => snow.remove(), 6000);
  }, 300);
}

// BUNGA BLOOM
function startBungaAnimation() {
  const bungaArea = document.getElementById("bungaContainer");
  for (let i = 0; i < 20; i++) {
    const bunga = document.createElement("div");
    bunga.classList.add("bunga");
    bunga.style.left = Math.random() * 100 + "vw";
    bunga.style.top = Math.random() * 100 + "vh";
    bungaArea.appendChild(bunga);
    setTimeout(() => bunga.remove(), 1500);
  }
}

window.onload = function () {
  createHeartRain();
  createSnowRain();
};
