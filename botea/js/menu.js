document.addEventListener("DOMContentLoaded", function () {

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {

            const menuId = this.getAttribute("data-id");

            window.location.href = `menu.html?id=${menuId}`;
        });
    });
});
