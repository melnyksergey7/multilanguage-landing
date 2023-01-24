const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const alllang = ['en', 'ru', 'ua'];

document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#'+ lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!alllang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }
}

changeLanguage();