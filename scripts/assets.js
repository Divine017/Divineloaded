function displayCurrentPage() {
  const header = document.querySelector('header');
  let currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  if (currentPage === '') currentPage = 'index';
  const formattedPageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  // Add the current page name for mobile-only display
  const pageNewElement = document.createElement('div');
  pageNewElement.className = 'current-page-name mobile-only';
  pageNewElement.textContent = formattedPageName === 'Index' ? 'Home' : formattedPageName;

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