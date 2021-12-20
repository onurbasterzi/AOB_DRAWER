const dropdown = document.querySelectorAll(".drawer-link .main-nav .dropdown");
const drawer = document.querySelector(".drawer");
const menuButton = drawer.children[0];
menuButtonState();

menuButton.onclick = () => {
  drawer.classList.toggle("active");
  menuButtonState()
};

dropdown.forEach((item) => {
  const submenu = item.querySelector(".sub-menu");

  // item.onclick = () => {
  //   if (!item.classList.contains("active")) {
  //     dropdown.forEach((el) => {
  //       const sub = el.querySelector(".sub-menu");
  //       removeActiveClass(el,sub)
     
  //     });

  //     addActiveClass(item, submenu);
  //   } else {

  //     removeActiveClass(item, submenu);
  //   }
  // };

    item.onmouseenter = () => {
    if (!item.classList.contains("active")) {
      dropdown.forEach((el) => {
        const sub = el.querySelector(".sub-menu");
        removeActiveClass(el, sub);
      });
      addActiveClass(item, submenu);
    } else {
      removeActiveClass(item, submenu);
    }
  };

  item.onmouseleave = () => {
      removeActiveClass(item, submenu);
  };
});

const addActiveClass = (arrow, submenu) => {
  arrow.classList.add("active");
  submenu.classList.add("active");
};

const removeActiveClass = (arrow, submenu) => {
  arrow.classList.remove("active");
  submenu.classList.remove("active");
};


function menuButtonState(){
  [...menuButton.children].forEach((item) => {
    if (item.classList.contains("none")) {
      item.classList.remove("none");
    } else {
      item.classList.add("none");
    }
  });
};
