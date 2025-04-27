function displayCurrentPage() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('.desktop-nav a'); // <-- Add this line
  let currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  if (currentPage === '') currentPage = 'index';
  const formattedPageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  // Add the current page name for mobile-only display
  const pageNewElement = document.createElement('div');
  pageNewElement.className = 'current-page-name mobile-only';
  // Map page names to Font Awesome icon classes
  const pageIcons = {
    index: 'fas fa-home',
    blogs: 'fas fa-blog',
    about: 'fas fa-info-circle',
    musics: 'fas fa-music',
    videos: 'fas fa-video',
    pictures: 'fas fa-image'
  };
  const iconClass = pageIcons[currentPage.toLowerCase()] || 'fas fa-file';
  pageNewElement.innerHTML = `<i class="${iconClass}"></i> ${formattedPageName === 'Index' ? 'Home' : formattedPageName}`;

  header.insertBefore(pageNewElement, header.querySelector('nav'));

  // Add the active class to the corresponding navigation link
  navLinks.forEach(link => {
    let linkHref = link.getAttribute('href').replace('.html', '');
    if (linkHref === '') linkHref = 'index';
    if (linkHref.toLowerCase() === currentPage.toLowerCase()) {
      link.classList.add('active');
    }
  });
}

const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            navMenu.setAttribute("aria-expanded", navMenu.classList.contains("active").toString());
            
            if (navMenu.classList.contains("active")) {
                navMenu.style.zIndex = "10";
            } else {
                navMenu.style.zIndex = "";
            }
        });
    }

function addNumbers() {  
            const num1 = parseFloat(document.getElementById('num1').value);  
            const num2 = parseFloat(document.getElementById('num2').value);  
            const sum = num1 + num2;  
            document.getElementById('result').innerText = 'The sum is: ' + sum;  
        }

displayCurrentPage();