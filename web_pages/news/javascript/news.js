const boxes = document.querySelectorAll('.news-box')[0];

boxes.addEventListener('click', function (e) {
    if (e.target.className = 'new') {
        window.location.href = '../../article/html/article.html';
    }
})