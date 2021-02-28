const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

let refs = {
  switchToggle: document.querySelector("#theme-switch-toggle"),
  body: document.body.classList,
};

getThemeFromLocalStorage();

refs.switchToggle.addEventListener("change", (event) => {
  event.preventDefault();
  if (event.target.checked) {
    refs.body.add(Theme.DARK);
    refs.body.remove(Theme.LIGHT);
    let theme = document.body.classList.value;
    console.log(theme);
    localStorage.setItem("class", theme);
  } else {
    refs.body.remove(Theme.DARK);
    refs.body.add(Theme.LIGHT);
    localStorage.setItem("class", Theme.LIGHT);
    refs.switchToggle.setAttribute("checked", false);
  }
});

function getThemeFromLocalStorage() {
  let currentTheme = localStorage.getItem("class");
  if (currentTheme === Theme.DARK) {
    console.log(currentTheme);
    refs.body.value = currentTheme;
    refs.switchToggle.setAttribute("checked", true);
  }
}

            

        
