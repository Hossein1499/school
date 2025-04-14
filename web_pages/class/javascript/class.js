const days = document.getElementsByClassName('days')[0];
const titels = document.querySelector('.description > h6');
const lesson = document.getElementById('lesson-class');
const text = document.getElementById('text-class');
const time = document.getElementsByClassName('time-class')[0];
const week1 = document.querySelector('.days .day:nth-of-type(1) .class-day');
const week2 = document.querySelector('.days .day:nth-of-type(2) .class-day');
const week3 = document.querySelector('.days .day:nth-of-type(3) .class-day');
const week4 = document.querySelector('.days .day:nth-of-type(4) .class-day');
const week5 = document.querySelector('.days .day:nth-of-type(5) .class-day');
const week6 = document.querySelector('.days .day:nth-of-type(6) .class-day');
const week7 = document.querySelector('.days .day:nth-of-type(7) .class-day');



let url = 'https://jsonplaceholder.typicode.com/todos/';
const request = async (gUrl) => {
    const response = await fetch(gUrl);
    if (response.status === 200) {
        return await response.json();
    }
    else {
        throw new Error('not found...');
    }
}

document.addEventListener('DOMContentLoaded', async () => {

    const data = await request(url);
    for (let d of data) {
        if (d.id == 1) {
            let article = document.createElement('article');
            article.className = 'p-2 position-relative rounded-3 overflow-hidden bg-bg1 shadow-sm';
            article.innerHTML = `
        <h6 class="text-center mb-1">کلاس${d.id}</h6>
        <p class="text-center mx-auto m-0 fw-bold">شعبه ${d.userId}</p>
        <a class="eye-j position-absolute bottom-0 start-0 p-1 bg-primary" href="#">
            <i class="bi bi-eye-fill d-flex fs-6"></i>
        </a>
        <div class="d-none">
            <p>${d.id}</p>
            <p>${d.title}</p>
            <p>${d.userId}</p>
        </div>`
            week1.appendChild(article);
        }
        if (d.id == 2) {
            let article = document.createElement('article');
            article.className = 'p-2 position-relative rounded-3 overflow-hidden bg-bg1 shadow-sm';
            article.innerHTML = `
        <h6 class="text-center mb-1">کلاس${d.id}</h6>
        <p class="text-center mx-auto m-0 fw-bold">شعبه ${d.userId}</p>
        <a class="eye-j position-absolute bottom-0 start-0 p-1 bg-primary" href="#">
            <i class="bi bi-eye-fill d-flex fs-6"></i>
        </a>
        <div class="d-none">
            <p>${d.id}</p>
            <p>${d.title}</p>
            <p>${d.userId}</p>
        </div>`
            week2.appendChild(article);
        }
        if (d.id == 3) {
            let article = document.createElement('article');
            article.className = 'p-2 position-relative rounded-3 overflow-hidden bg-bg1 shadow-sm';
            article.innerHTML = `
        <h6 class="text-center mb-1">کلاس${d.id}</h6>
        <p class="text-center mx-auto m-0 fw-bold">شعبه ${d.userId}</p>
        <a class="eye-j position-absolute bottom-0 start-0 p-1 bg-primary" href="#">
            <i class="bi bi-eye-fill d-flex fs-6"></i>
        </a>
        <div class="d-none">
            <p>${d.id}</p>
            <p>${d.title}</p>
            <p>${d.userId}</p>
        </div>`
            week3.appendChild(article);
        }
        if (d.id == 4) {
            let article = document.createElement('article');
            article.className = 'p-2 position-relative rounded-3 overflow-hidden bg-bg1 shadow-sm';
            article.innerHTML = `
        <h6 class="text-center mb-1">کلاس${d.id}</h6>
        <p class="text-center mx-auto m-0 fw-bold">شعبه ${d.userId}</p>
        <a class="eye-j position-absolute bottom-0 start-0 p-1 bg-primary" href="#">
            <i class="bi bi-eye-fill d-flex fs-6"></i>
        </a>
        <div class="d-none">
            <p>${d.id}</p>
            <p>${d.title}</p>
            <p>${d.userId}</p>
        </div>`
            week4.appendChild(article);
        }
        if (d.id == 5) {
            let article = document.createElement('article');
            article.className = 'p-2 position-relative rounded-3 overflow-hidden bg-bg1 shadow-sm';
            article.innerHTML = `
        <h6 class="text-center mb-1">کلاس${d.id}</h6>
        <p class="text-center mx-auto m-0 fw-bold">شعبه ${d.userId}</p>
        <a class="eye-j position-absolute bottom-0 start-0 p-1 bg-primary" href="#">
            <i class="bi bi-eye-fill d-flex fs-6"></i>
        </a>
        <div class="d-none">
            <p>${d.id}</p>
            <p>${d.title}</p>
            <p>${d.userId}</p>
        </div>`
            week5.appendChild(article);
        }
        if (d.id == 6) {
            let article = document.createElement('article');
            article.className = 'p-2 position-relative rounded-3 overflow-hidden bg-bg1 shadow-sm';
            article.innerHTML = `
        <h6 class="text-center mb-1">کلاس${d.id}</h6>
        <p class="text-center mx-auto m-0 fw-bold">شعبه ${d.userId}</p>
        <a class="eye-j position-absolute bottom-0 start-0 p-1 bg-primary" href="#">
            <i class="bi bi-eye-fill d-flex fs-6"></i>
        </a>
        <div class="d-none">
            <p>${d.id}</p>
            <p>${d.title}</p>
            <p>${d.userId}</p>
        </div>`
            week6.appendChild(article);
        }
        if (d.id == 7) {
            let article = document.createElement('article');
            article.className = 'p-2 position-relative rounded-3 overflow-hidden bg-bg1 shadow-sm';
            article.innerHTML = `
        <h6 class="text-center mb-1">کلاس${d.id}</h6>
        <p class="text-center mx-auto m-0 fw-bold">شعبه ${d.userId}</p>
        <a class="eye-j position-absolute bottom-0 start-0 p-1 bg-primary" href="#">
            <i class="bi bi-eye-fill d-flex fs-6"></i>
        </a>
        <div class="d-none">
            <p>${d.id}</p>
            <p>${d.title}</p>
            <p>${d.userId}</p>
        </div>`
            week7.appendChild(article);
        }
    }

})

days.addEventListener('click', async e => {
    e.preventDefault();
    if (e.target.classList.contains('eye-j') == true) {

        description(e.target.parentElement.children[0].textContent,
            e.target.parentElement.children[1].textContent,
            e.target.parentElement.children[3].children[0].textContent,
            e.target.parentElement.children[3].children[1].textContent,
            e.target.parentElement.children[3].children[2].textContent,
            );
    }
})

async function description(title1, title2, lessonData, textData, timeData) {
    titels.children[0].innerHTML = title1;
    titels.children[1].innerHTML = title2;
    lesson.innerHTML = lessonData;
    text.innerHTML = textData;
    time.innerHTML = timeData;
}
