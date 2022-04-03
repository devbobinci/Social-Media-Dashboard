const toggleBtn = document.querySelector(".toggle-btn");
const toggleBar = document.querySelector(".toggle-bar");

function handleChangeTheme() {
  //   toggle bar
  toggleBtn.classList.toggle("changed");
  toggleBar.classList.toggle("changedTheme");
  console.log("changed");
  //   body view
  document.querySelector(".main-dark-panel").classList.toggle("changedTheme");
  document.body.classList.toggle("changeTheme");
  //h1,h2,h3,h4,h5,h6,p
  document.querySelectorAll(".text").forEach((txt) => {
    txt.classList.toggle("changedColor");
  });
  document.querySelectorAll(".overall-container").forEach((container) => {
    container.classList.toggle("changeBackground");
  });
  document.querySelectorAll(".stats-container").forEach((container) => {
    container.classList.toggle("changeBackground");
  });
  document.querySelectorAll(".follow").forEach((follow) => {
    follow.classList.toggle("changeFollowColor");
  });
}

toggleBtn.addEventListener("click", handleChangeTheme);
