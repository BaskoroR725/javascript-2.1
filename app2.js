const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function (){
    const rgbArray = makeRandomColor();
    const newColor = `RGB(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

});

const makeRandomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = [];
    rgb.push(r,g,b);
    return rgb;
}
