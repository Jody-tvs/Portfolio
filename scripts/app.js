document.addEventListener("DOMContentLoaded", () => {
  //effet de fade-in au scroll
  const fadeInContents = document.querySelectorAll(".fade-in-content")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      } 
    })
  }, {
    threshold: 0.2, //s'active quand 20% du contenu est visible
  })
  fadeInContents.forEach((content) => observer.observe(content))

//effet d'écriture typewriter sur le nom prénom
function typeWriter() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i)
    i++
    setTimeout(typeWriter, 100)
  }
}
window.addEventListener("load", typeWriter)

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
skills.forEach((skill) => {
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
    siteUrl: "https://jody-tvs.github.io/Manhattan/"
  },
  {
    title: "Le monde à portée",
    description: "Blog de voyage créé avec HTML, CSS et JavaScript.",
    image: "assets/monde.png",
    link: "projets/projet3.html",
    siteUrl: "https://jody-tvs.github.io/Le-Monde-Port-e/"

  },
]

const projectsGrid = document.getElementById("projects-grid")
projects.forEach((project) => {
  const projectDiv = document.createElement("div")
  projectDiv.classList.add("project")

  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <img src="${project.image}" alt="${project.title}" class="photo-style">
    <p>${project.description}</p>
    <a href="${project.link}" class="btn-primary">Détails</a>
    ${project.siteUrl? `<a href="${project.siteUrl}" target="_blank" class="btn-primary">Visiter</a>`: ""}
  `
  projectsGrid.appendChild(projectDiv)
})

 //FAQ
 const faqData = [
  {
  question: "Avez-vous déjà travaillé sur un projet collaboratif ?",
  answer: "Oui, lors de mes études et sur des projets personnels, j'ai collaboré avec d'autres développeurs en utilisant Git pour gérer le code et des outils comme Discord ou Trello pour la communication et la coordination des tâches."
},
{
  question: "Comment gérez-vous un bug ou un problème technique ?",
  answer: "Je commence par décomposer le problème pour en analyser chaque partie et comprendre la cause. Ensuite, je consulte la documentation officielle et des ressources fiables pour trouver une solution, si mon raisonnement ne suffit pas, je n'hésite pas à demander l'aide de mes collègues ou d'une communauté de développeurs (notamment sur Discord)."
},
{
  question: "Comment vous tenez-vous à jour sur les nouvelles technologies ?",
  answer: "Je reste à jour en consultant régulièrement des articles spécialisés, des tutoriels en ligne, ainsi que des réseaux sociaux comme LinkedIn et TikTok, où certains développeurs partagent des contenus intéressants sur les technologies et les bonnes pratiques. Je fais également partie d'une communauté de développeurs sur Discord, où j'échange des idées, découvre des outils innovants et partage des expériences."
},
{
  question: "Pouvez-vous travailler avec des deadlines serrées ?",
  answer: "Absolument. Mon expérience dans des postes exigeants m'a appris à hiérarchiser les tâches, à rester concentrée sous pression et à livrer des résultats de qualité dans les délais. Je m'assure cependant de ne pas me précipiter inutilement et de rester concentrée sur chaque étape du processus pour éviter des erreurs qui pourraient retarder le projet."
},
{
  question: "Le site sera-t-il optimisé pour le référencement (SEO) ?",
  answer: "Oui, le SEO à une grande importance pour que votre site soit bien positionné dans les moteurs de recherche. J'utilise plusieurs pratiques, notamment, l'optimisation des balises, une structure claire du contenu, l'amélioration des performances (vitesse de chargement des pages grâce à l'optimisation des images, des fichiers compressés), la mise en œuvre d'URL propres"
},
{
  question: "Proposez-vous un suivi analytique pour les sites ?",
  answer: "Oui, je peux intégrer des outils comme Google Analytics pour suivre les performances, le trafic et l'identification des pages les plus consultées du site."
},
{
  question: "Proposez-vous une maintenance après le développement ?",
  answer: "Oui, je propose une maintenance qui inclut : La correction des bugs éventuels, La mise à jour des fonctionnalités pour s'adapter à vos besoins, La surveillance des performances pour garantir un site toujours rapide et fonctionnel. Cette maintenance permet d'assurer la longévité et la pertinence de votre site."
}
  ]

  const faqSection = document.getElementById("faq-section")
  faqData.forEach((item, index) => {
    const faqItem = document.createElement("div")
    faqItem.classList.add("faq-item")

    const faqQuestion = document.createElement("button")
    faqQuestion.classList.add("faq-question")
    faqQuestion.textContent = item.question

    const faqAnswer = document.createElement("p")
    faqAnswer.classList.add("faq-answer")
    faqAnswer.textContent = item.answer
    faqAnswer.style.display = "none"

    faqQuestion.addEventListener("click", () => {
      if (faqAnswer.style.display === "block") {
        faqAnswer.style.display = "none"
      } else {
        faqAnswer.style.display = "block"
      }

      document.querySelectorAll(".faq-answer").forEach((answer, idx) => {
        if (idx !== index) {
          answer.style.display = "none"
        }
      })
    })

    faqItem.appendChild(faqQuestion)
    faqItem.appendChild(faqAnswer)
    faqSection.appendChild(faqItem)
  })
  
  //liens sociaux
  const socialIconsContainer = document.createElement("div");
  socialIconsContainer.id = "social-icons";

  // Liste des icônes sociales
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jody-tavares-9762261b8/", icon: "fab fa-linkedin" },
    { name: "GitHub", url: "https://github.com/Jody-tvs", icon: "fab fa-github" }
  ];

  // Génération des liens
  socialLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<i class="${link.icon}"></i>`;
    socialIconsContainer.appendChild(a);
  });

  // Ajout des icônes sous la FAQ
  faqSection.appendChild(socialIconsContainer);
})

//select des éléments
const menuToggle = document.querySelector('.menu-toggle')
const navList = document.querySelector('.nav-list')

//clic sur le bouton menu
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open')
})

//ferme le menu au clique en dehors
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove('open')
  }
})