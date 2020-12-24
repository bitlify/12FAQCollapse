const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        btn.parentNode.classList.toggle("active");
    })
})