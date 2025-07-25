// Optional sidebar toggle functionality
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebar.style.left = "0";
        container.style.marginLeft = "240px";
    } else {
        sidebar.style.left = "-240px";
        container.style.marginLeft = "0";
    }
});
