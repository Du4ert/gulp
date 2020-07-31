const more = document.querySelectorAll('.content-more');

function toggleShow(elem) {
    elem.classList.toggle('show');
}

function toggleArrow(elem) {
    elem.classList.toggle('fa-arrow-up');
    elem.classList.toggle('fa-arrow-down');
}


more.forEach(item => {
    item.addEventListener('click', function(event) {
        const parent = this;
        const target = event.target;
        const content = parent.querySelector('.more-body')
        const arrow = parent.querySelector('.more-trigger .fa')
        if (target.closest('.more-trigger')) {
            toggleShow(content);
            toggleArrow(arrow);
        }
    })
})