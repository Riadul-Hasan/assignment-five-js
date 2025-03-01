// Theme Part
const themeChange = document.getElementById("change-theme");
themeChange.addEventListener("click", function () {
  const randomThemeR = Math.random() * 255;
  const randomThemeG = Math.random() * 255;
  const randomThemeB = Math.random() * 255;
  const randomTheme = `rgb(${randomThemeR}, ${randomThemeG}, ${randomThemeB})`;
  document.getElementById("body-part").style.backgroundColor = randomTheme;
  console.log(randomTheme);
});

// Entering blogs page
const discoverBtn = document.getElementById("discoder-btn");
discoverBtn.addEventListener("click", function () {
  window.location.href = "blogs.html";
});
