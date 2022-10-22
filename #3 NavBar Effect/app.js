const sections = document.querySelectorAll('section');
const trans = document.querySelector('.trans');
const gradients = ['coral', 'chartreuse', 'chocolate', 'cadetblue'];

const options = {
    threshold: 0.7,
};

let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries) {
    entries.forEach(element => {
        const className = element.target.className;
        const activeLink = document.querySelector(`[data-page="${className}"]`);
        const elementIndex = element.target.getAttribute('data-index');
        

        const coords = activeLink.getBoundingClientRect();

        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        };
    
        if(element.isIntersecting){
            trans.style.setProperty('height', `${directions.height}px`);
            trans.style.setProperty('width', `${directions.width}px`);
            trans.style.setProperty('top', `${directions.top}px`);
            trans.style.setProperty('left', `${directions.left}px`);
            trans.style.backgroundColor = gradients[elementIndex];
        }
    });
};

sections.forEach(section => {
    observer.observe(section);
});