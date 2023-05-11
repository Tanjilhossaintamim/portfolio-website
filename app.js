// nav link javascript code start 
let link,link2,link3,link4 ,link5;
link= document.getElementById('nav1');
link2 = document.getElementById('nav2');
link3 = document.getElementById('nav3');
link4 = document.getElementById('nav4');
link5 = document.getElementById('nav5');


let fn = () => {
    link.style.color = 'orangered';
    link2.style.color = '#fff';
    link3.style.color = '#fff';
    link4.style.color = '#fff';
    link5.style.color = '#fff';

}
let fn1 = () => {
    link2.style.color='orangered';
    link.style.color = '#fff';
    link3.style.color = '#fff';
    link4.style.color = '#fff';
    link5.style.color = '#fff';
}
let fn2 = () => {
    link3.style.color='orangered';
    link.style.color = '#fff';
    link2.style.color = '#fff';
    link4.style.color = '#fff';
    link5.style.color = '#fff';
}
let fn3 = () => {
    link4.style.color='orangered';
    link.style.color = '#fff';
    link3.style.color = '#fff';
    link2.style.color = '#fff';
    link5.style.color = '#fff';
}
let fn4 = () => {
    link5.style.color='orangered';
    link.style.color = '#fff';
    link3.style.color = '#fff';
    link4.style.color = '#fff';
    link2.style.color = '#fff';
}

document.addEventListener('scroll',navbar)
function navbar(){
    const mynavbar=document.querySelector('nav');
    if (window.scrollY>0){
        mynavbar.classList.add('nvbar');
    
    }
    else{
        mynavbar.classList.remove('nvbar');
    }
}
// nav link javascript code end 



