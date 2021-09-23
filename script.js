var icons = document.getElementsByClassName(".fa-angle-down");

icons.forEach(i => {
    i.addEventListener("click", () => {
        i.parentElement.classList.toggle("big");
    });
});

