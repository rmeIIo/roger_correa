const header = document.querySelector('nav');
const nav = document.querySelector('.navegacao');
const btnBurger = document.querySelector('#burgerMenu');
const linkNav = document.querySelectorAll('.navegacao a');
const pesquisaContent = document.querySelector('.searchContent');
const btnPesquisa = document.querySelector('#btnSearch');
const secoes = document.querySelectorAll('section');

btnBurger.addEventListener('click', () => {
    nav.classList.toggle('active');
    btnBurger.classList.toggle('bx-x');
    pesquisaContent.classList.remove('active');

        if(window.scrollY == 0) {
            header.classList.toggle('active');
        }
});

linkNav.forEach(link => {
    link.addEventListener('click', ()=> {
        nav.classList.remove('active');
        btnBurger.classList.remove('bx-x');
    });
});

btnPesquisa.addEventListener('click', () => {
    pesquisaContent.classList.toggle('active');
    nav.classList.remove('active');
    btnBurger.classList.remove('bx-x');
});

window.addEventListener('scroll', ()=> {
    nav.classList.remove('active');
    btnBurger.classList.remove('bx-x');
    pesquisaContent.classList.remove('active');
});

window.addEventListener('scroll', ()=> {
    header.classList.toggle('active', window.scrollY > 0);
});

const scrollActive = ()=> {
    secoes.forEach(secao => {
        let top = window.scrollY;
        let offset = secao.offsetTop - 250;
        let height = secao.offsetHeight;
        let id = secao.getAttribute('id');

        if(top >= offset && top < offset + height) {
            linkNav.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`.navegacao a[href*=${id}]`).classList.add('active');
            })
        }
    })
}

window.addEventListener('scroll', scrollActive);