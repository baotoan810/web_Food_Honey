const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle('sticky', window.scrollY > 100)
});

let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.nav-list')

menu.onclick = () => {
    menu.classList.toggle('#close')
    navList.classList.toggle('open')
}


// Sự kiện khi scroll thì hình và text hiện từ trên xuống
window.onscroll = () => {
    menu.classList.remove('#close')
    navList.classList.remove('open')
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', { deplay: 300 });
sr.reveal('.home-image', { deplay: 400 });
sr.reveal('.container', { deplay: 300 });


sr.reveal('.about-img', {});
sr.reveal('.about-text', { deplay: 300 });

sr.reveal('.middle-text', {});
sr.reveal('.row-btn, .shop-content', { deplay: 300 });

sr.reveal('.review-content, .contact', { deplay: 300 });