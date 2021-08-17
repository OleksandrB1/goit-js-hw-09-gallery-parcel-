const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const createList = document.querySelector('ul');
const closeMdl = document.querySelector('button[data-action="close-lightbox"]');
const openMdl = document.querySelector('.lightbox');
const imageUrl = document.querySelector('.lightbox__image');
const modal = document.querySelector('.lightbox__overlay');
const listImg = galleryItems.map(images => {
    const { preview, original, description } = images;
    return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
});

function imageItem(event) {
    const url = event.target;
    if (event.currentTarget === event.target) {
        return;
    }
    event.preventDefault();
    window.addEventListener('keyup', keyPressed);
    openMdl.classList.add('is-open');
    imageUrl.src = url.dataset.source;
    imageUrl.alt = url.alt;
};
function closeModal() {
    openMdl.classList.remove('is-open');
    imageUrl.src = "";
    imageUrl.alt = "";
    window.removeEventListener('keyup', keyPressed);
};
function keyPressed(key) {
    if (key.code === "Escape") closeModal();
    // if (key.code === "ArrowLeft") keyLeft();
    // if (key.code === "ArrowRight") keyRight();
};
// function keyLeft() { };
// function keyRight() { };

createList.insertAdjacentHTML('afterbegin', listImg.join(""));
createList.addEventListener('click', imageItem);
closeMdl.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);