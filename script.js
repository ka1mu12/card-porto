document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  body.classList.add(currentTheme + "-mode");

  // Update button text based on current theme
  updateToggleButton(currentTheme);

  darkModeToggle.addEventListener("click", function () {
    const currentTheme = body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    body.classList.remove(currentTheme + "-mode");
    body.classList.add(newTheme + "-mode");

    localStorage.setItem("theme", newTheme);
    updateToggleButton(newTheme);
  });

  function updateToggleButton(theme) {
    if (theme === "dark") {
      darkModeToggle.textContent = "☀️ Light Mode";
    } else {
      darkModeToggle.textContent = "🌙 Dark Mode";
    }
  }
});
