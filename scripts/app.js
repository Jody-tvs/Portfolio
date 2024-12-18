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