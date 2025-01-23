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

//compétences
const skills = [
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "SASS", icon: "fab fa-sass" },
  { name: "React", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "Github", icon: "fab fa-github" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Figma", icon: "fab fa-figma" },
]

const skillsContainer = document.getElementById("skills-container")

skills.forEach(skill => {
  const skillDiv = document.createElement("div")
  skillDiv.classList.add("skill")

  skillDiv.innerHTML = `
    <i class="${skill.icon}"></i>
    <p>${skill.name}</p>
  `

  skillsContainer.appendChild(skillDiv)
})

//effet typewriting sur le titre
function typeWriter() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i)
    i++
    setTimeout(typeWriter, 100)
  }
}
window.addEventListener("load", typeWriter)