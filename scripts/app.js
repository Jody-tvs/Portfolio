//défilement fluide (smooth scroll) du menu à la section dédié
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

//gère l'effet de fade-in au scroll
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

//effet d'écriture typewriting sur le titre principal
function typeWriter() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i)
    i++
    setTimeout(typeWriter, 100)
  }
}
window.addEventListener("load", typeWriter) //l'effet se lance au chargement de la page

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

//projets
const projects = [
  {
    title: "Folie d'Armes",
    description: "Site e-commerce créé avec JavaScript, SASS et HTML.",
    image: "assets/folie.png",
    link: "projets/projet1.html",
  },
  {
    title: "Manhattan Restaurant",
    description: "Site vitrine créé avec HTML et CSS.",
    image: "assets/manhattan.png",
    link: "projets/projet2.html",
  },
  {
    title: "Le monde à portée",
    description: "Blog de voyage créé avec HTML, CSS et JavaScript.",
    image: "assets/monde.png",
    link: "projets/projet3.html",
  },
]

const projectsGrid = document.getElementById("projects-grid")

projects.forEach(project => {
  const projectDiv = document.createElement("div")
  projectDiv.classList.add("project")

  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <img src="${project.image}" alt="${project.title}" class="photo-style">
    <p>${project.description}</p>
    <a href="${project.link}" class="btn-primary">Détails du projet</a>
  `

  projectsGrid.appendChild(projectDiv)
})