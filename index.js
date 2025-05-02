document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.getElementById("menu-toggle");
    let mobileMenu = document.getElementById("mobile-menu");
    let closeButton = document.getElementById("close-icon");
    let barMenuIcon = document.getElementById("bar-menu-icon");

    menuToggle.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
        if (mobileMenu.classList.contains("active")) {
            barMenuIcon.style.display = "none";
            closeButton.style.display = "block";
        } else {
            barMenuIcon.style.display = "block";
            closeButton.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let scrollButton = document.querySelector(".scroll");

    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0, // Vị trí cuộn đến (đầu trang)
            behavior: "smooth" // Hiệu ứng cuộn mượt
        });
    });
});
// document.addEventListener("DOMContentLoaded", function() {
//     let userIcon= document.getElementById("user");
//     let buttonUser= document.getElementById("button-user");

//     userIcon.addEventListener("click", function() {
//         buttonUser.classList.toggle("active");
//         if (buttonUser.classList.contains("active")) {
//             userIcon.style.display = "none";
//         } else {
//             userIcon.style.display = "block";
//         }
//     });
// });