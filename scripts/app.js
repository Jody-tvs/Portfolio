//défilement fluide (smooth scroll) du menu à la section dédié
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

//gère l'effet du scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeInContents = document.querySelectorAll(".fade-in-content")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      } else {
        //retire l'effet quand l'élément sort de la vue
        entry.target.classList.remove("visible")
      }
    })
  }, {
    threshold: 0.2 //active quand 20% du contenu est visible
  })

  fadeInContents.forEach(content => observer.observe(content))
})

const textElement = document.querySelector("#home h1")
const text = textElement.textContent
textElement.textContent = ""
let i = 0

//effet typewriting sur le titre
function typeWriter() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i)
    i++
    setTimeout(typeWriter, 100)
  }
}
window.addEventListener("load", typeWriter)