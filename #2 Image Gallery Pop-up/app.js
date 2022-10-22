const fullImg = document.querySelector('.full-img');
const smallImg = document.querySelectorAll('.gallery img');

const modal = document.querySelector('.modal');

smallImg.forEach(element => {
    element.onclick = () => {
        modal.classList.add('open');
        fullImg.classList.add('open');

        const originalQuality = element.getAttribute('alt');
        fullImg.src = `img/full/${originalQuality}.jpg`;
    }

});

modal.onclick = (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        fullImg.classList.remove('open');
    }
};