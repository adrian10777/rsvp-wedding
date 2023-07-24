'use strict';

/*
Manipulating classes is the main way in which we manipulate web pgs
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); //all 3 btns

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    //these appear
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    //these dissapear
};


for(let i = 0; i < btnsOpenModal.length; i++)  //looping through 3 buttons
    btnsOpenModal[i].addEventListener('click', openModal);
    


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {

    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    } 
})

// let document.querySelector()
// let document.querySelector()