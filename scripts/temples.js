const toggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.menu-close');
const menuList = document.getElementById('menu-list');
const mainContent = document.querySelector('main');
const headerTitle = document.querySelector('.mobile-head h1');


function setMenuOpen(open) {
  menuList.classList.toggle('show', open);
  document.body.classList.toggle('menu-open', open);
  mainContent.classList.toggle('show', open);
  toggle.classList.toggle('hide', open);
  closeButton.classList.toggle('show', open);
  if (headerTitle) {
    headerTitle.classList.toggle('hide', open);
  }
}

if (toggle && menuList && closeButton && mainContent) {
  toggle.addEventListener('click', () => {
    setMenuOpen(true);
  });

  closeButton.addEventListener('click', () => {
    setMenuOpen(false);
  });
}

// select the DOm element for output
const currentyear =document.querySelector("#currentyear");
// use the year object
const year = new Date();
currentyear.innerHTML = `${year.getFullYear()} 📸 `;
document.getElementById("lastModifiedDate").innerHTML = `${document.lastModified}`;