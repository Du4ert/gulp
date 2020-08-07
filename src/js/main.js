const more = document.querySelectorAll('.content-more');
const resources = document.querySelectorAll('.resource');


resources.forEach((item) => {
    const imgUrl = item.querySelector('.resource-img').src;
    const cover = item.querySelector('.resource-cover');
    
    //cover.style.backgroundImage = `url(${imgUrl})`;
    cover.addEventListener('click', function() {
        item.classList.add('hide');
        item.classList.add('show');

        document.body.addEventListener('click', function(e) {
            const target = e.target;

            if (target.closest('.resource') !== item) {
                cover.classList.remove('hide');
                item.classList.remove('show');
            }
        });
    });
})

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