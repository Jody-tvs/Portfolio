document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container")
  
    container.innerHTML = `
      <!-- Detail du projet -->
      <section id="details" class="project-section">
        <h1>Présentation du projet</h1><br>
        <p>"Le Monde à Portée" est un blog de voyage qui vous invite à explorer mes aventures à travers le globe. Vous y découvrirez des récits captivants, des conseils sur les meilleures saisons pour visiter chaque destination, ainsi qu'un espace pour échanger et discuter de futurs projets.</p> <br>
        <p>Ce projet a été réalisé dans le cadre de ma formation</p>
      </section>
  
      <!-- Technologies -->
      <section id="technologies">
        <h2>Technologies utilisées</h2><br>
        <div class="skills-container">
          <div class="skill"><i class="fab fa-html5"></i><p>HTML</p></div>
          <div class="skill"><i class="fab fa-css3-alt"></i><p>CSS</p></div>
          <div class="skill"><i class="fab fa-js"></i><p>JavaScript</p></div>
        </div>
      </section>
  
      <!-- fonctionnalités -->
      <section id="features">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Design mobile-first et responsive.</li>
          <li>Formulaire de contact.</li>
          <li>Présentation interactive des menus.</li>
        </ul>
      </section>
  
      <!-- Lien du site et Github -->
      <div class="links">
        <a href="https://jody-tvs.github.io/Le-Monde-Port-e/" class="btn-primary" target="_blank" rel="noopener noreferrer">Visiter</a>
      </div>
      <div class="links">
        <a href="https://github.com/Jody-tvs/Le-Monde-Port-e" class="btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    `
  })