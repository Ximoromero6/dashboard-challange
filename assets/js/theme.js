export function toggleTheme() {
  const body = document.body;
  const toggleInput = document.getElementById("theme-toggle");

  // Verifica si hay tema oscuro en localStorage al cargar
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    body.classList.add("dark-mode");
    if (toggleInput) toggleInput.checked = true;
  }

  // Listener para cambiar el tema
  toggleInput?.addEventListener("change", () => {
    const isChecked = toggleInput.checked;

    body.classList.toggle("dark-mode", isChecked);
    localStorage.setItem("theme", isChecked ? "dark" : "light");
  });
}
