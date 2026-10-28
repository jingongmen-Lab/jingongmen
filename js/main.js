// 1. 拿到当前页面的文件名，如 "about.html"
const currentPage = location.pathname.split("/").pop();

// 2. 选中导航里的全部链接（用的就是你熟悉的 CSS 选择器）
const navLinks = document.querySelectorAll(".site-nav a");

// 3. 逐个检查：这个链接指向的页面 == 当前页面吗？
for (const link of navLinks) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
}
// ===== 灯箱（页面里有 .lightbox 才启用） =====
const lightbox = document.querySelector(".lightbox");

if (lightbox) {   // 门卫：灯箱存在吗？
  const lightboxImg = lightbox.querySelector("img");
  const newsImages = document.querySelectorAll(".news-img");

  for (const img of newsImages) {
    img.addEventListener("click", function () {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  }

  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("open");
  });
}

// ===== 留言簿校验（页面里有表单才启用） =====
const form = document.querySelector(".contact-form");

if (form) {   // 门卫：表单存在吗？
  form.addEventListener("submit", function (event) {
    const name = document.querySelector("#name").value;
    if (name === "") {
      alert("请填写姓名");
      event.preventDefault();
    }

    const phone = document.querySelector("#phone").value;
    const phoneOk = /^1\d{10}$/.test(phone);
    if (!phoneOk) {
      alert("电话号码应该是 1 开头的 11 位数字");
      event.preventDefault();
    }
  });
}