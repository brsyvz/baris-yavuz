document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".banner-header__mobile-drawer .drawer");
    const closeBtn = document.querySelector(".banner-header__mobile-drawer .drawer-close");
    const drawerContent = document.querySelector(".banner-header__content");
    const drawerWrapper = document.querySelector(".banner-header__mobile-drawer");

    if (menuBtn && closeBtn && drawerContent) {
      menuBtn.addEventListener("click", function () {
        drawerContent.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";
        drawerWrapper.classList.add("has-box-shadow");
      });
  
      closeBtn.addEventListener("click", function () {
        drawerContent.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
        drawerWrapper.classList.remove("has-box-shadow");
      });
    }
  });
  