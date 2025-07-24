function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/brisola.png")
    img.setAttribute("alt", "Foto do cuco de sao paulo!!")
  } else {
    img.setAttribute("src", "./assets/avatarrayan.png")
    img.setAttribute("alt", "foto de perfil")
  }

  localStorage.setItem(
    "theme",
    html.classList.contains("light") ? "light" : "dark"
  )
}

const savedTheme = localStorage.getItem("theme")
const img = document.querySelector("#profile img")
if (savedTheme === "light") {
  img.setAttribute("src", "./assets/brisola.png")
  img.setAttribute("alt", "foto do cuco")
} else {
  img.setAttribute("src", "./assets/avatarrayan.png")
  img.setAttribute("alt", "Foto de Perfil")
}
document.getElementById("profile").classList.remove("hidden")
