"use strict";

let btnAddFormCategory = document.querySelector('.admin-content__btn--add');
let overlay = document.querySelector('.overlay');
let closeForm = document.querySelector('.form-admin__icon--close');
let formCategoryAdd = document.querySelector('.category-add');

let handlerFormCategoryAdd = function handlerFormCategoryAdd(){
    overlay.classList.add('overlay--show');
    formCategoryAdd.classList.add('form-admin--show');
}

if(btnAddFormCategory != null){
    btnAddFormCategory.addEventListener('click', handlerFormCategoryAdd)
}

let handlerFormClickClose = function handlerFormClickClose(e) {
    formCategoryAdd.classList.remove("form-admin--show");
    overlay.classList.remove("overlay--show");
};
if (closeForm != null) {
    closeForm.addEventListener("click", handlerFormClickClose);
}
