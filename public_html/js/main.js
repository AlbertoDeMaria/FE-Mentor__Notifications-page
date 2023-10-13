const counter = document.getElementById('counter');
let data = document.querySelectorAll('[data-read="false"]')

function updateCounter(){
    data = document.querySelectorAll('[data-read="false"]')
    counter.innerHTML = data.length;
}

function markAllAsRead(){
    data.forEach((element)=>{
        element.setAttribute('data-read', true);
    })

    updateCounter();
}