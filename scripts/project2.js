document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container")
  
    container.innerHTML = `
      <!-- Detail du projet -->
      <section id="details" class="project-section">
        <h1>Présentation du projet</h1><br>
         <p>"Manhattan restaurant" est un site vitrine fictif de présentation pour un restaurant typique New yorkais à Paris, mettant en valeur l'ambiance unique et ses plats emblématiques</p>
        <p>Ce projet a été réalisé dans le cadre de ma formation.</p>
      </section>
  
      <!-- Technologie -->
      <section id="technologies">
        <h2>Technologies utilisées</h2><br>
        <div class="skills-container">
          <div class="skill"><i class="fab fa-html5"></i><p>HTML</p></div>
          <div class="skill"><i class="fab fa-css3-alt"></i><p>CSS</p></div>
        </div>
      </section>
  
      <!-- Fonctionnalités -->
      <section id="features">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Design mobile-first et responsive.</li>
          <li>Formulaire de réservation.</li>
          <li>Présentation interactive des menus.</li>
          <li>Carte interactive avec localisation.</li>
        </ul>
      </section>
  
      <!-- LLien du site et Github -->
      <div class="links">
        <a href="https://jody-tvs.github.io/Manhattan/" class="btn-primary" target="_blank" rel="noopener noreferrer">Visiter</a>
      </div>
      <div class="links">
        <a href="https://github.com/Jody-tvs/Manhattan" class="btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    `
  }) 