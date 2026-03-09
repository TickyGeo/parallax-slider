const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider .item');
const btn = document.querySelectorAll('.slider .btn');

const image = ['images/first.jpg', 'images/second.jpg', 'images/third.jpg', 'images/fourth.jpg', 'images/fifth.jpg'];

const image2 = ['images/second.jpg', 'images/first.jpg', 'images/fourth.jpg', 'images/third.jpg', 'images/fifth.jpg'];

let cur = 0;

btn[1].onmouseover = () => {
    cur++;
    cur == image.length ? cur = 0 : '';
    slider.style.backgroundImage = `url(${image[cur]})`;
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundImage = `url(${image2[cur]})`;
    };
};

btn[0].onmouseover = () => {
    cur--;
    cur < 0 ? cur = image.length - 1 : '';
    slider.style.backgroundImage = `url(${image[cur]})`;
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundImage = `url(${image2[cur]})`;
    };
};

