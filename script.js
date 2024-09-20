// Typing Effect in Hero Section
document.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.getElementById('name');
    const typingEl = document.getElementById('typing');
    const phrases = ['Java Backend Developer', 'REST API Enthusiast', 'Spring Boot Specialist'];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;
  
    function loop() {
      isEnd = false;
      typingEl.innerHTML = currentPhrase.join('');
      
      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
          typingEl.innerHTML = currentPhrase.join('');
        }
  
        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j]);
          j--;
          typingEl.innerHTML = currentPhrase.join('');
        }
  
        if (j === phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }
  
        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i++;
          if (i === phrases.length) {
            i = 0;
          }
        }
      }
      const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
      setTimeout(loop, speed);
    }
  
    loop();
  });
  
  // Dynamically Load Projects
  const projects = [
    {
      title: 'Online Course Platform',
      description: 'Developed a backend system for an online course platform using Spring Boot and MySQL.'
    },
    {
      title: 'Employee Management System',
      description: 'Built a REST API for managing employee data with CRUD operations using Spring Boot and Hibernate.'
    },
    {
      title: 'E-commerce API',
      description: 'Created a RESTful API for an e-commerce platform with product and order management.'
    }
  ];
  
  const projectList = document.getElementById('project-list');
  
  projects.forEach(project => {
    const projectEl = document.createElement('div');
    projectEl.classList.add('project');
  //  projectEl.innerHTML = <h3>${project.title}</h3><p>${project.description}</p>;
    projectList.appendChild(projectEl);
  });