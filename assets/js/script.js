 // Back to Top Button Functionality
 window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Animation for elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    // AOS-like functionality for data-aos elements
    const animateElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.getAttribute('data-aos');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });

    // Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formResponse = document.getElementById('formResponse');
        formResponse.style.display = 'block';
        formResponse.style.backgroundColor = '#d4edda';
        formResponse.style.color = '#155724';
        formResponse.innerHTML = 'Votre message a été envoyé avec succès!';
        
        // Reset form
        this.reset();
        
        // Hide the message after 3 seconds
        setTimeout(() => {
            formResponse.style.display = 'none';
        }, 3000);
    });
    
    // Newsletter Subscription
    document.getElementById('newsletterForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add animation to button
        const button = this.querySelector('button');
        button.innerHTML = 'Abonné!';
        button.style.backgroundColor = '#4CAF50';
        
        // Reset form
        setTimeout(() => {
            this.reset();
            button.innerHTML = "S'abonner";
            button.style.backgroundColor = '';
        }, 2000);
    });
});



const slides = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.dot');
  const track = document.getElementById('testimonialTrack');
  const progressBar = document.getElementById('progressBar');
  let currentIndex = 0;
  const intervalTime = 6000; // 6 secondes

  function updateSlide(index) {
    // Changer la position du track
    track.style.transform = `translateX(-${index * 100}%)`;

    // Mettre à jour les classes actives
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    // Reset & redémarrer la barre de progression
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    setTimeout(() => {
      progressBar.style.transition = `width ${intervalTime}ms linear`;
      progressBar.style.width = '100%';
    }, 50);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  }

  // Slider automatique
  let slideInterval = setInterval(nextSlide, intervalTime);
  updateSlide(currentIndex); // Init au premier chargement

  // Contrôles manuels
  document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, intervalTime);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
    slideInterval = setInterval(nextSlide, intervalTime);
  });

  // Navigation par points
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      currentIndex = parseInt(dot.dataset.index);
      updateSlide(currentIndex);
      slideInterval = setInterval(nextSlide, intervalTime);
    });
  });


document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton et le message
    const downloadButton = document.getElementById('downloadCV');
    const downloadMessage = document.getElementById('downloadMessage');
    
    // Ajouter un écouteur d'événement au clic sur le bouton
    downloadButton.addEventListener('click', function() {
        // Afficher le message de téléchargement
        downloadMessage.style.display = 'block';
        
        // Créer un lien temporaire pour le téléchargement
        const link = document.createElement('a');
        
        // Spécifier le chemin vers votre fichier CV
        // Remplacez 'chemin/vers/votre-cv.pdf' par le chemin réel vers votre CV
        link.href = './assets/images/CV_Justin_MONDJI.pdf';
        
        // Attribuer l'attribut download pour forcer le téléchargement
        // au lieu d'ouvrir le PDF dans le navigateur
        link.setAttribute('download', 'Mon_CV.pdf');
        
        // Définir le comportement du lien pour s'assurer qu'il ne s'ouvre pas dans une nouvelle page
        link.target = '_self';
        
        // Ajouter le style pour cacher le lien
        link.style.display = 'none';
        
        // Ajouter le lien au document
        document.body.appendChild(link);
        
        // Cliquer sur le lien pour déclencher le téléchargement
        link.click();
        
        // Nettoyer: supprimer le lien après le téléchargement
        setTimeout(function() {
            document.body.removeChild(link);
            
            // Masquer le message après un délai
            setTimeout(function() {
                downloadMessage.style.display = 'none';
            }, 2000);
        }, 100);
    });
});




document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    { id: "intro", text: "Hello, je suis Justin MONDJI" },
    { id: "title", text: "Développeur Web & Mobile" },
    { id: "subtitle", text: "Designer Graphique" },
    { id: "description", text: "Je transforme vos idées en expériences numériques captivantes et fonctionnelles sur mesure." }
  ];

  let delay = 0;

  function typeText(id, text, speed = 30) {
    return new Promise(resolve => {
      const el = document.getElementById(id);
      el.innerHTML = "";
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          el.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
          resolve();
        }
      }, speed);
    });
  }

  async function runTypingAnimation() {
    for (let t of texts) {
      await typeText(t.id, t.text);
    }
    document.querySelector(".cta-buttons").style.opacity = 1;
  }

  runTypingAnimation();
});


//Menu Hamburger

const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navToggle.classList.toggle('open');
  });



  