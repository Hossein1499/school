let iconsSurvey = document.getElementsByClassName('iconsSurvey')[0];

let iconSurvey1 = document.getElementsByClassName('iconSurvey1')[0];
let iconSurveyNew1 = document.createElement('i');
iconSurveyNew1.className = 'bi bi-emoji-heart-eyes-fill fs-1 d-flex rounded-circle iconSurvey1';
let iconSurveyChecked1 = false;

let iconSurvey2 = document.getElementsByClassName('iconSurvey2')[0];
let iconSurveyNew2 = document.createElement('i');
iconSurveyNew2.className = 'bi bi-emoji-smile-fill fs-1 d-flex rounded-circle iconSurvey2';
let iconSurveyChecked2 = false;

let iconSurvey3 = document.getElementsByClassName('iconSurvey3')[0];
let iconSurveyNew3 = document.createElement('i');
iconSurveyNew3.className = 'bi bi-emoji-neutral-fill fs-1 d-flex rounded-circle iconSurvey3';
let iconSurveyChecked3 = false;

let iconSurvey4 = document.getElementsByClassName('iconSurvey4')[0];
let iconSurveyNew4 = document.createElement('i');
iconSurveyNew4.className = 'bi bi-emoji-frown-fill fs-1 d-flex rounded-circle iconSurvey4';
let iconSurveyChecked4 = false;

let iconSurvey5 = document.getElementsByClassName('iconSurvey5')[0];
let iconSurveyNew5 = document.createElement('i');
iconSurveyNew5.className = 'bi bi-emoji-dizzy-fill fs-1 d-flex rounded-circle iconSurvey5';
let iconSurveyChecked5 = false;

iconSurvey1.addEventListener('click', function (e) {
    iconsSurvey.replaceChild(iconSurveyNew1, iconSurvey1);
    iconSurveyChecked1 = true;

    if (iconSurveyChecked2 == true) {
        iconsSurvey.replaceChild(iconSurvey2, iconSurveyNew2);
        iconSurveyChecked2 = false;
    }
    if (iconSurveyChecked3 == true) {
        iconsSurvey.replaceChild(iconSurvey3, iconSurveyNew3);
        iconSurveyChecked3 = false;
    }
    if (iconSurveyChecked4 == true) {
        iconsSurvey.replaceChild(iconSurvey4, iconSurveyNew4);
        iconSurveyChecked4 = false;
    }
    if (iconSurveyChecked5 == true) {
        iconsSurvey.replaceChild(iconSurvey5, iconSurveyNew5);
        iconSurveyChecked5 = false;
    };
    e.preventDefault();
})

iconSurvey2.addEventListener('click', function (e) {
    iconsSurvey.replaceChild(iconSurveyNew2, iconSurvey2);
    iconSurveyChecked2 = true;

    if (iconSurveyChecked1 == true) {
        iconsSurvey.replaceChild(iconSurvey1, iconSurveyNew1);
        iconSurveyChecked1 = false;
    }
    if (iconSurveyChecked3 == true) {
        iconsSurvey.replaceChild(iconSurvey3, iconSurveyNew3);
        iconSurveyChecked3 = false;
    }
    if (iconSurveyChecked4 == true) {
        iconsSurvey.replaceChild(iconSurvey4, iconSurveyNew4);
        iconSurveyChecked4 = false;
    }
    if (iconSurveyChecked5 == true) {
        iconsSurvey.replaceChild(iconSurvey5, iconSurveyNew5);
        iconSurveyChecked5 = false;
    };
    e.preventDefault();
})

iconSurvey3.addEventListener('click', function (e) {
    iconsSurvey.replaceChild(iconSurveyNew3, iconSurvey3);
    iconSurveyChecked3 = true;

    if (iconSurveyChecked1 == true) {
        iconsSurvey.replaceChild(iconSurvey1, iconSurveyNew1);
        iconSurveyChecked1 = false;
    }
    if (iconSurveyChecked2 == true) {
        iconsSurvey.replaceChild(iconSurvey2, iconSurveyNew2);
        iconSurveyChecked2 = false;
    }
    if (iconSurveyChecked4 == true) {
        iconsSurvey.replaceChild(iconSurvey4, iconSurveyNew4);
        iconSurveyChecked4 = false;
    }
    if (iconSurveyChecked5 == true) {
        iconsSurvey.replaceChild(iconSurvey5, iconSurveyNew5);
        iconSurveyChecked5 = false;
    };
    e.preventDefault();
})

iconSurvey4.addEventListener('click', function (e) {
    iconsSurvey.replaceChild(iconSurveyNew4, iconSurvey4);
    iconSurveyChecked4 = true;

    if (iconSurveyChecked1 == true) {
        iconsSurvey.replaceChild(iconSurvey1, iconSurveyNew1);
        iconSurveyChecked1 = false;
    }
    if (iconSurveyChecked2 == true) {
        iconsSurvey.replaceChild(iconSurvey2, iconSurveyNew2);
        iconSurveyChecked2 = false;
    }
    if (iconSurveyChecked3 == true) {
        iconsSurvey.replaceChild(iconSurvey3, iconSurveyNew3);
        iconSurveyChecked3 = false;
    }
    if (iconSurveyChecked5 == true) {
        iconsSurvey.replaceChild(iconSurvey5, iconSurveyNew5);
        iconSurveyChecked5 = false;
    };
    e.preventDefault();
})

iconSurvey5.addEventListener('click', function (e) {
    iconsSurvey.replaceChild(iconSurveyNew5, iconSurvey5);
    iconSurveyChecked5 = true;

    if (iconSurveyChecked1 == true) {
        iconsSurvey.replaceChild(iconSurvey1, iconSurveyNew1);
        iconSurveyChecked1 = false;
    }
    if (iconSurveyChecked2 == true) {
        iconsSurvey.replaceChild(iconSurvey2, iconSurveyNew2);
        iconSurveyChecked2 = false;
    }
    if (iconSurveyChecked3 == true) {
        iconsSurvey.replaceChild(iconSurvey3, iconSurveyNew3);
        iconSurveyChecked3 = false;
    }
    if (iconSurveyChecked4 == true) {
        iconsSurvey.replaceChild(iconSurvey4, iconSurveyNew4);
        iconSurveyChecked4 = false;
    };
    e.preventDefault();
});

////////////////////////////////////////////link/////////////////////////////////////////////////

let article1 = document.querySelector('.quick article:nth-of-type(1)');
let article2 = document.querySelector('.quick article:nth-of-type(2)');
let article3 = document.querySelector('.quick article:nth-of-type(3)');
let article4 = document.querySelector('.quick article:nth-of-type(4)');
let article5 = document.querySelector('.quick article:nth-of-type(5)');
let article6 = document.querySelector('.quick article:nth-of-type(6)');

article1.addEventListener('click', function (e) {
    window.location.href = 'web_pages/news/html/news.html';
})
article2.addEventListener('click', function (e) {
    window.location.href = 'web_pages/best/html/best.html';
})
article4.addEventListener('click', function (e) {
    window.location.href = 'web_pages/weekdays/html/weekdays.html';
})
article6.addEventListener('click', function (e) {
    window.location.href = 'web_pages/calendar/html/calendar.html';
})
article5.addEventListener('click', function (e) {
    window.location.href = 'web_pages/class/html/class.html';
})

/////////////////////////////////////////scroll//////////////////////////////////////////////

const heightWeb = window.innerHeight;
const quicks = document.querySelectorAll('.quick article');
const persons = document.querySelectorAll('.person>article');
const prides = document.querySelectorAll('.pride>article');
const notifications = document.querySelectorAll('.notification>article');

window.addEventListener('scroll', () => {
    Array.from(quicks).forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < heightWeb / 1.2) {
            element.classList.add('quick-show');
        }
    })
    Array.from(persons).forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < heightWeb / 1.2) {
            element.children[0].children[0].classList.add('person-show');
        }
    })
    Array.from(prides).forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < heightWeb / 1.2) {
            element.classList.add('pride-show');
        }
    })
    Array.from(notifications).forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < heightWeb / 1.2) {
            element.classList.add('notification-show');
        }
    })
})