const resources = document.querySelectorAll('.resource');

resources.forEach(item => {
    const cover = item.querySelector('.resource-cover');
    const title = item.querySelector('.resource-title').textContent;

    cover.textContent = title;
    item.addEventListener('click', (event) => {
        const target = event.target;
        item.classList.toggle('active');

        document.body.addEventListener('click', (event) => {
            if (event.target.closest('.resource') !== item) {
                item.classList.remove('active');
            }
        })
    })
});