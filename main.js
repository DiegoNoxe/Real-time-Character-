let contT = document.getElementById('total');
let contR = document.getElementById('remaining');
let wrote = document.getElementById('write');

wrote.addEventListener("keyup", working)


function working() 
{
    let currentLength = wrote.value.length; 
    let maxLength     = wrote.getAttribute('maxlength');

    contT.innerText   = currentLength;
    contR.innerText   = maxLength - currentLength;
}

