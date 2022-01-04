let nav_chkbox = document.querySelector('.navigation__checkbox');

const nav_chk_test = () => {
    if(nav_chkbox.checked){
        console.log(nav_chkbox.value);
    }
    else {
        console.log('not working');
    }
}

//nav_chkbox.addEventListener('click', nav_chk_test);

nav_chkbox.onclick = function(){
    console.log(this);
}

