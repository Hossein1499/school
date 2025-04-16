const months = document.getElementsByClassName('month');

const request = async gUrl => {
    const response = await fetch(gUrl, { cache: "no-cache" });
    if (response.status === 200) {
        return await response.json();
    }
    else {
        throw new Error('not found...');
    }
}

const backUrl = 'https://hossein1499.github.io/back/json/back-calendar.json';

document.addEventListener('DOMContentLoaded', async () => {
    const data = await request(backUrl);

    Array.from(data).forEach(blockData => {

        function createTag(tagParent) {
            if (blockData.type == 1) {
                let article = document.createElement('article');
                article.className = 'box-color-brown d-flex align-items-center me-0';
                article.innerHTML = `
                <i class="bi bi-mortarboard fs-4 m-0 ms-2 color-brown align-self-start"></i>
                <div class="m-0">
                    <h6 class="m-0 color-brown">${blockData.title}</h6>
                    <p class="m-0 color-brown">${blockData.text}</p>
                </div>`
                tagParent.children[1].appendChild(article);
            }
            else if (blockData.type == 2) {
                let article = document.createElement('article');
                article.className = 'box-color-red d-flex align-items-center me-0';
                article.innerHTML = `
                <i class="bi bi-tree fs-4 m-0 ms-2 color-red align-self-start"></i>
                <div class="m-0">
                    <h6 class="m-0 color-red">${blockData.title}</h6>
                    <p class="m-0 color-red">${blockData.text}</p>
                </div>`
                tagParent.children[1].appendChild(article);
            }
            else if (blockData.type == 3) {
                let article = document.createElement('article');
                article.className = 'box-color-blue d-flex align-items-center me-0';
                article.innerHTML = `
                <i class="bi bi-file-text fs-4 m-0 ms-2 color-blue align-self-start"></i>
                <div class="m-0">
                    <h6 class="m-0 color-blue">${blockData.title}</h6>
                    <p class="m-0 color-blue">${blockData.text}</p>
                </div>`
                tagParent.children[1].appendChild(article);
            }
            else if (blockData.type == 4) {
                let article = document.createElement('article');
                article.className = 'box-color-yellow d-flex align-items-center me-0';
                article.innerHTML = `
                <i class="bi bi-people fs-4 m-0 ms-2 color-yellow align-self-start"></i>
                <div class="m-0">
                    <h6 class="m-0 color-yellow">${blockData.title}</h6>
                    <p class="m-0 color-yellow">${blockData.text}</p>
                </div>`
                tagParent.children[1].appendChild(article);
            }
            else if (blockData.type == 5) {
                let article = document.createElement('article');
                article.className = 'box-color-purple d-flex align-items-center me-0';
                article.innerHTML = `
                <i class="bi bi-easel fs-4 m-0 ms-2 color-purple align-self-start"></i>
                <div class="m-0">
                    <h6 class="m-0 color-purple">${blockData.title}</h6>
                    <p class="m-0 color-purple">${blockData.text}</p>
                </div>`
                tagParent.children[1].appendChild(article);
            }
            else if (blockData.type == 6) {
                let article = document.createElement('article');
                article.className = 'box-color-green d-flex align-items-center me-0';
                article.innerHTML = `
                <i class="bi bi-calendar2-week fs-4 m-0 ms-2 color-green align-self-start"></i>
                <div class="m-0">
                    <h6 class="m-0 color-green">${blockData.title}</h6>
                    <p class="m-0 color-green">${blockData.text}</p>
                </div>`
                tagParent.children[1].appendChild(article);
            }
            else if (blockData.type == 7) {
                let article = document.createElement('article');
                article.className = 'box-color-dark d-flex align-items-center me-0';
                article.innerHTML = `
                <i class="bi bi-bug fs-4 m-0 ms-2 color-dark align-self-start"></i>
                <div class="m-0">
                    <h6 class="m-0 color-dark">${blockData.title}</h6>
                    <p class="m-0 color-dark">${blockData.text}</p>
                </div>`
                tagParent.children[1].appendChild(article);
            }
        }

        if (blockData.month == 1) {
            months[0].classList.remove('d-none');
            let tagParent = months[0];
            createTag(tagParent);
        }
        else if (blockData.month == 2) {
            months[1].classList.remove('d-none');
            let tagParent = months[1];
            createTag(tagParent);
        }
        else if (blockData.month == 3) {
            months[2].classList.remove('d-none');
            let tagParent = months[2];
            createTag(tagParent);
        }
        else if (blockData.month == 4) {
            months[3].classList.remove('d-none');
            let tagParent = months[3];
            createTag(tagParent);
        }
        else if (blockData.month == 5) {
            months[4].classList.remove('d-none');
            let tagParent = months[4];
            createTag(tagParent);
        }
        else if (blockData.month == 6) {
            months[5].classList.remove('d-none');
            let tagParent = months[5];
            createTag(tagParent);
        }
        else if (blockData.month == 7) {
            months[6].classList.remove('d-none');
            let tagParent = months[6];
            createTag(tagParent);
        }
        else if (blockData.month == 8) {
            months[7].classList.remove('d-none');
            let tagParent = months[7];
            createTag(tagParent);
        }
        else if (blockData.month == 9) {
            months[8].classList.remove('d-none');
            let tagParent = months[8];
            createTag(tagParent);
        }
    })
})


setTimeout(() => {

    const boxBrwn = document.querySelector('.headline .box-color-brown');
    const boxRed = document.querySelector('.headline .box-color-red');
    const boxBlue = document.querySelector('.headline .box-color-blue');
    const boxYellow = document.querySelector('.headline .box-color-yellow');
    const boxPurple = document.querySelector('.headline .box-color-purple');
    const boxGreen = document.querySelector('.headline .box-color-green');
    const boxDark = document.querySelector('.headline .box-color-dark');

    const textBrwn = document.querySelectorAll('.month .box-color-brown');
    const textRed = document.querySelectorAll('.month .box-color-red');
    const textBlue = document.querySelectorAll('.month .box-color-blue');
    const textYellow = document.querySelectorAll('.month .box-color-yellow');
    const textPurple = document.querySelectorAll('.month .box-color-purple');
    const textGreen = document.querySelectorAll('.month .box-color-green');
    const textDark = document.querySelectorAll('.month .box-color-dark');

    const textsMonth = document.querySelectorAll('.month article');
    const boxsHeadline = document.querySelectorAll('.headline section:first-of-type div');
    const textFull = document.getElementsByClassName('full-color')[0];


    textsMonth.forEach(element => {
        element.addEventListener('click', () => {
            activePak();
            element.classList.add('active');
        })
    })
    function activePak() {
        textsMonth.forEach(element => {
            element.classList.remove('active');
        })
    }

    function replaceItems() {
        textsMonth.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-mortarboard-fill', 'bi-mortarboard');
            element.children[0].classList.replace('bi-tree-fill', 'bi-tree');
            element.children[0].classList.replace('bi-file-text-fill', 'bi-file-text');
            element.children[0].classList.replace('bi-people-fill', 'bi-people');
            element.children[0].classList.replace('bi-easel-fill', 'bi-easel');
            element.children[0].classList.replace('bi-calendar2-week-fill', 'bi-calendar2-week');
            element.children[0].classList.replace('bi-bug-fill', 'bi-bug');
        })
        boxsHeadline.forEach(element => {
            element.children[0].classList.replace('bi-mortarboard-fill', 'bi-mortarboard');
            element.children[0].classList.replace('bi-tree-fill', 'bi-tree');
            element.children[0].classList.replace('bi-file-text-fill', 'bi-file-text');
            element.children[0].classList.replace('bi-people-fill', 'bi-people');
            element.children[0].classList.replace('bi-easel-fill', 'bi-easel');
            element.children[0].classList.replace('bi-calendar2-week-fill', 'bi-calendar2-week');
            element.children[0].classList.replace('bi-bug-fill', 'bi-bug');
        })
    }

    textFull.addEventListener('click', () => {
        replaceItems();
    })

    boxBrwn.addEventListener('click', () => {
        replaceItems();
        textsMonth.forEach(element => {
            element.classList.add('opacity-25');
        })
        textBrwn.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-mortarboard', 'bi-mortarboard-fill');
        })
        boxBrwn.children[0].classList.replace('bi-mortarboard', 'bi-mortarboard-fill');
    })
    boxRed.addEventListener('click', () => {
        replaceItems();
        textsMonth.forEach(element => {
            element.classList.add('opacity-25');
        })
        textRed.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-tree', 'bi-tree-fill');
        })
        boxRed.children[0].classList.replace('bi-tree', 'bi-tree-fill');
    })
    boxBlue.addEventListener('click', () => {
        replaceItems();
        textsMonth.forEach(element => {
            element.classList.add('opacity-25');
        })
        textBlue.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-file-text', 'bi-file-text-fill');
        })
        boxBlue.children[0].classList.replace('bi-file-text', 'bi-file-text-fill');
    })
    boxYellow.addEventListener('click', () => {
        replaceItems();
        textsMonth.forEach(element => {
            element.classList.add('opacity-25');
        })
        textYellow.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-people', 'bi-people-fill');
        })
        boxYellow.children[0].classList.replace('bi-people', 'bi-people-fill');
    })
    boxPurple.addEventListener('click', () => {
        replaceItems();
        textsMonth.forEach(element => {
            element.classList.add('opacity-25');
        })
        textPurple.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-easel', 'bi-easel-fill');
        })
        boxPurple.children[0].classList.replace('bi-easel', 'bi-easel-fill');
    })
    boxGreen.addEventListener('click', () => {
        replaceItems();
        textsMonth.forEach(element => {
            element.classList.add('opacity-25');
        })
        textGreen.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-calendar2-week', 'bi-calendar2-week-fill');
        })
        boxGreen.children[0].classList.replace('bi-calendar2-week', 'bi-calendar2-week-fill');
    })
    boxDark.addEventListener('click', () => {
        replaceItems();
        textsMonth.forEach(element => {
            element.classList.add('opacity-25');
        })
        textDark.forEach(element => {
            element.classList.remove('opacity-25');
            element.children[0].classList.replace('bi-bug', 'bi-bug-fill');
        })
        boxDark.children[0].classList.replace('bi-bug', 'bi-bug-fill');
    })
}, 1000);
