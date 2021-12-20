var root = document.querySelector(":root");
var themeChanger = document.querySelector(".theme-changer");


themeChanger.onclick = () => {
  themeChanger.style.right === "0px" ? (themeChanger.style.right = "-50px") : (themeChanger.style.right = "0px");
};

let colorcount = 0;

const themeColors = [ tinycolor("#666af6").darken(5).toString(), "crimson", "#7209b7", "#318ac0", "#e34f26", "#06d6a0","#f7df1e","#31446c","#fefefe","#313131"];
const textColors=["#fefefe","#fefefe","#fefefe","#fefefe","#fefefe","#fefefe","#313131","#fefefe","#313131","#fefefe"]

themeColors.forEach((color) => {
  let box = document.createElement("div");
  console.log(textColors[colorcount]);
  box.setAttribute("data-text-color",textColors[colorcount])
  box.setAttribute("data-sub-bg",tinycolor(color).darken(5).toString())
  box.classList.add("box");
  box.style.background = color;
  themeChanger.appendChild(box);

  box.onclick = function () {
    setColor(box.style.background,box.getAttribute("data-text-color"),box.getAttribute("data-sub-bg"));
  };
  colorcount++;
});

function setColor(bgcolor,textcolor,subBg) {

   
  root.style.setProperty("--drawer-bg", bgcolor);
  root.style.setProperty("--drawer-text",textcolor)
  root.style.setProperty("--sub-menu-bg",subBg)
  root.style.setProperty("--sub-menu-text",textcolor)
  root.style.setProperty("--menu-button-text",textcolor)
 

  
}

