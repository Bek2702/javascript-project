let index = 1;
sliderShow(index)

function sliderShow(n) {
    let slider = document.getElementsByClassName('slide');
    let line = document.getElementsByClassName('line')

    if (n > slider.length) {
        index = 1
    }

    if (n < 1) {
        index = slider.length
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none"
    }
    for (let i = 0; i < line.length; i++) {
        line[i].className = line[i].className.replace('active', '')
    }
    slider[index - 1].style.display = 'block'
    line[index - 1].className += ' active'
}
function plusSlider(a) {
    sliderShow(index += a)
}
function plusSlider1(b) {
    sliderShow(index = b)
}
setInterval(function () {
    document.getElementById("next").click()
}, 3000);



let valueDisplay = document.querySelectorAll('.number');
let interval = 10;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'))

    let duration = Math.floor(interval / endValue);
    let result = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue
        if (startValue == endValue) {
            clearInterval(result)
        }
    }, duration)
});






let acc = document.getElementsByClassName('accar')
let text = document.getElementsByClassName('text-q')
for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        console.log("sadsfsdf");
        for (let a = 0; a < acc.length; a++) {
            if (i == a) {

            } else {
                text[a].classList.remove('show')
            }
        }
        text[i].classList.toggle('show')
    }
}


let btn = document.querySelector('.top')
window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {
        btn.classList.add("visable")
    } else {
        btn.classList.remove("visable")
    }
});



