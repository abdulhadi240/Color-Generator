const getColor = ()=>{
    // hex code
    const rand=Math.floor(Math.random() * 16777215) ; // Multiply this number so that we can get exact hexadecimal code
    const randCode = "#" + rand.toString(16);
    console.log(rand);
    document.body.style.backgroundColor =randCode;
    document.getElementById('color-code').textContent=randCode;
}

let btn=document.getElementById('btn');

btn.onclick = function (){
    getColor();
}

getColor();