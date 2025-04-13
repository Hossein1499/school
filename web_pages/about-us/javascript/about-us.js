const boxes = document.getElementsByClassName('facilities')[0];
const box = document.querySelectorAll('.facilities article');
box.forEach(element => {
    element.addEventListener('click', () => {
        activepak();
        element.classList.add('active');
    })
})
function activepak(){
    box.forEach(element => {
        element.classList.remove('active');
    })
}