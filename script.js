function updateButton(theme) {
  const img = themeToggle.querySelector("img");

  img.src = theme === "light"
    ? "assets/dark.png"
    : "assets/light.png"; // ⚠️ sem espaço no nome

  themeToggle.setAttribute(
    "aria-label",
    theme === "light"
      ? "Alternar para modo escuro"
      : "Alternar para modo claro"
  );
}
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = root.classList.contains("light") ? "light" : "dark";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  root.classList.remove(currentTheme);
  root.classList.add(newTheme);
  
  localStorage.setItem("theme", newTheme);
  updateButton(newTheme);
});
const savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.classList.add(savedTheme);
updateButton(savedTheme);