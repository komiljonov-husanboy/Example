var elInp = document.querySelector('.inp');

function fn() {
    if (elInp.value.length >= 5 && elInp.value !== elInp.value.toLowerCase()) {
        elInp.style.border = 'none';
        elInp.style.borderBottom = '2px solid green';
    } else {
        elInp.style.border = 'none';
        elInp.style.borderBottom = '2px solid red';
    }
}

var elExample = document.querySelector('.Example');
var elText = document.querySelector('.Text');
var amal = false;

function fnn() {
    if (amal === true) {
        elExample.classList.remove('test_2');
        elExample.classList.add('test_1');
        elExample.textContent='style_1'
        elExample.style.fontSize ='30px'
        elExample.style.color ='grey'
        elExample.style.backgroundColor ='rgb(245, 193, 193)'

    } else {
        elExample.classList.remove('test_1');
        elExample.classList.add('test_2');
        elExample.textContent='style_2'
        elExample.style.fontSize ='30px'
        elExample.style.color ='red'
        elExample.style.backgroundColor ='rgb(214, 199, 199)'



    }
    amal = !amal;
}


var elSun = document.querySelector('.Sun');



var quyosh =true


function moon() {
    if (quyosh == true) {
elSun.textContent='kun'
elSun.style.backgroundColor ='white'
elSun.style.border ='1px solid black'
elSun.style.color ='black'

    }
    else{
        elSun.textContent='tun'
elSun.style.backgroundColor ='black'
elSun.style.color ='white'



    }
    quyosh = !quyosh
}