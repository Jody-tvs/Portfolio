document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container")
  
    container.innerHTML = `
      <!-- Detail du projet -->
      <section id="details" class="project-section">
        <h1>Présentation du projet</h1><br>
        <p>"Folie d'Armes" 🔫 est un site e-commerce fictif et absurde proposant des armes, des accessoires et des munitions. Je l'ai réalisé dans le cadre de ma formation de développeuse web full stack.</p> <br>
            <p>Le thème étant libre, j'ai choisi de créer un site fictif pour ne pas avoir de restriction créative. Cette liberté m'a permis de laisser parler mon imagination, notamment en utilisant une IA pour générer les images des armes et des accessoires du site.</p> <br>

            <p>Évidemment, le développement de ce site n'a pas été un long fleuve tranquille. Entre les bugs et les lignes de code capricieuses, j'ai eu des moments de doute. Mais à force de patience, de chocolat chaud (je ne bois pas de café ! ☕🚫) et de recherches dans ma tête 🤯 et sur internet, j'ai fini par surmonter chaque obstacle et venir à bout de chaque ligne 💻💪.</p><br>
        <a href="../assets/Cahier des charges Jody TAVARES.pdf" class="btn-primary" target="_blank">Cahier des charges</a>
      </section>
  
      <!-- Technologies -->
      <section id="technologies">
        <h2>Technologies utilisées</h2><br>
        <div class="skills-container">
          <div class="skill"><i class="fab fa-html5"></i><p>HTML</p></div>
          <div class="skill"><i class="fab fa-sass"></i><p>SASS</p></div>
          <div class="skill"><i class="fab fa-js"></i><p>JavaScript</p></div>
          <div class="skill"><i class="fab fa-react"></i><p>React.js</p></div>
          <div class="skill"><i class="fab fa-node-js"></i><p>Node.js</p></div>
          <div class="skill"><i class="fas fa-database"></i><p>SQL</p></div>
        </div>
      </section>
  
      <!-- fonctionnalités -->
      <section id="features">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Design mobile-first et responsive.</li>
          <li>Système de panier et paiement sécurisé.</li>
          <li>Dashboard d’administration complet.</li>
          <li>Formulaire de contact fonctionnel.</li>
        </ul>
      </section>
  
      <!-- lien du site et Github -->
      <div class="links">
        <a href="https://foliedarmes.site/" class="btn-primary" target="_blank" rel="noopener noreferrer">Visiter</a>
      </div>
      <div class="links">
        <a href="https://github.com/Jody-tvs/Folie-d-armes" class="btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    `
  })