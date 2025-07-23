function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/brisola.png")
    img.setAttribute("alt", "Foto do cuco de sao paulo!!")
  } else {
    //se tiver sem light mode, manter a img
    img.setAttribute("src", "./assets/avatarrayan.png")
  }
}
