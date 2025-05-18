const plusText = document.querySelectorAll('main .box');

Array.from(plusText).forEach(article => {
    article.children[2].children[1].addEventListener('click', e => {
        e.preventDefault();
        article.children[2].children[0].classList.toggle('show-box');
        article.children[2].children[0].children[0].classList.toggle('show-text');
        if(article.children[2].children[0].classList.contains('show-box') == true){
            article.children[2].children[1].innerHTML = 'کمتر';
        }
        else{
            article.children[2].children[1].innerHTML = 'بیشتر';
        }
    })
})