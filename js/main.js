// ページの読み込みが完了した後に実行
window.addEventListener("load", function () {
  // 特定の画像要素を取得
  const image = document.getElementById("targetImage");
  // 画像の高さを取得
  const imageHeight = image.offsetHeight;
  // テキストボックスの要素を取得
  const textBox = document.getElementById("mainTitle");
  const feature = document.getElementById("feature");
  // テキストボックスのスタイルにtop値を設定
  textBox.style.top = imageHeight / 2.4 + "px";
  feature.style.top = imageHeight - 120 + "px";
});

// マーキー
document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".marquee");
  const spans = Array.from(marquee.querySelectorAll("span"));

  // 各spanの幅を計算し、全体の幅を設定
  const spanWidth = spans.reduce((acc, span) => acc + span.offsetWidth, 0);

  // テキストを3セットに増やす
  spans.forEach((span) => {
    const clone1 = span.cloneNode(true);
    const clone2 = span.cloneNode(true);
    marquee.appendChild(clone1);
    marquee.appendChild(clone2);
  });

  // 全体幅を設定
  const totalWidth = spanWidth * 3; // 3セット
  marquee.style.width = `${totalWidth}px`;

  // アニメーション時間を設定
  const speed = 50; // ピクセル/秒
  const animationDuration = totalWidth / speed;
  marquee.style.animationDuration = `${animationDuration}s`;
});

// スライダー
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-item");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // 初期表示
  showSlide(currentIndex);

  // 自動切り替え
  setInterval(nextSlide, 5000); // 5秒ごとに切り替え
});
