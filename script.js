// === Кнопка "Наверх" ===
const scrollBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// === Аккордеон ===
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    item.querySelector(".accordion-title").addEventListener("click", () => {

        accordionItems.forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});
// === Фильтрация фотографий ===
const filterBtns = document.querySelectorAll(".filters button");
const galleryImgs = document.querySelectorAll(".gallery img");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        galleryImgs.forEach(img => {
            if (category === "all" || img.dataset.category === category) {
                img.classList.remove("hidden");
            } else {
                img.classList.add("hidden");
            }
        });
    });
});
// === Модальное окно с увеличением фото ===
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});