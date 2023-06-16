//1. Сделать так, чтобы при нажатии на кнопку менялся цвет и текст элемента <p>

//let btn = document.getElementById("btn");

//function changeColor()
//{
//let element = document.getElementById("tagP");
//element.classList.add('active');
//}

//btn.addEventListener("click",changeColor)

//2. Сделать так, чтобы при нажатии на кнопку все элементы списка (тэги ul, li) меняли цвет на активный
// function changeColor1()
// {
//     let element = document.getElementById("idt");
//     element.classList.add('active');
// }
// btn.addEventListener("click",changeColor1)

// 3. Сделать так, чтобы при наведении на элемент его цвет менялся на другой (не обязательно делать при помощи js)
let htag = document.getElementById("htag");

function changeColor2()
{
    let element = document.getElementById("htag");
    element.classList.add("active");
}
htag.addEventListener("mouseover",changeColor2)