let gird = document.querySelector('.gird');
let list = document.querySelector('.list');
let ul = document.querySelector('ul');
let mic = document.getElementById('voice-search');
let search = document.querySelector('input');
let li = document.getElementsByTagName('li');

var counter= 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }

},3500);


list.onclick = e=>{
    ul.classList.add('list-display');
    list.classList.add('active');
    gird.classList.remove('active');
}


gird.onclick = ()=>{
    ul.classList.remove('list-display');
    list.classList.remove('active');
    gird.classList.add('active');
}
//search filter
search.onkeyup=()=>{
    const x=search.value.toLowerCase();
    showItem(x);
}
function showItem(x){
    for(let list of li){
        let product=list.children[1].children[0].innerHTML;
        let name=product.toLowerCase();
        if (name.indexOf(x)> -1) {
            list.style.display='';
        }
        else{
            list.style.display='none';
        }
    }
}
//voice search
mic.onclick=()=>{
    mic.classList.add('record');
    let recognization=new webkitSpeechRecognition;
    recognization.lang='en-US';
    recognization.start();
    recognization.onresult=e=>{
        const m=search.value=e.results[0][0].transcript;
        showItem(m);
        mic.classList.remove('record');
    }
    
}