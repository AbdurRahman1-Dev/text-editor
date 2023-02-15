
const text = document.getElementById('text');
const textValue = text.innerText;

document.getElementById('bold').addEventListener('click',function(){
  text.style.fontWeight = '600'
})

document.getElementById('italic').addEventListener('click',function(){
  text.style.fontStyle = "italic"
})


document.getElementById('underline').addEventListener('click',function(){
  text.style.textDecoration = "underline"
})


document.getElementById('left').addEventListener('click',function(){
  text.style.textAlign = "left"
})

document.getElementById('right').addEventListener('click',function(){
  text.style.textAlign = "right"
})

document.getElementById('center').addEventListener('click',function(){
  text.style.textAlign = "center"
})


document.getElementById('fontInput').addEventListener('keydown', function(){
    const input = document.getElementById('fontInput');
    const inputVAlue = input.value;
    const inputNumberValue = parseFloat(inputVAlue)
    console.log(inputNumberValue);
    text.style.fontSize = `${inputNumberValue}px`
})


const color = document.getElementById('color');

color.addEventListener('click', function(e) {
  const colorVAlue = e.target.value;

  text.style.color = colorVAlue
})