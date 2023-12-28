var path = window.location.pathname;
function setActiveLink() {
    var links = document.querySelectorAll('.navigation-panel a');
    
    links.forEach(function (link) {
        if (path.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.onload = setActiveLink;
