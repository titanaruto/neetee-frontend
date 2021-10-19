"use strict";

let btnAddFormCategory = document.querySelector('.admin-content__btn--add');
let overlay = document.querySelector('.overlay');
let closeForm = document.querySelector('.form-admin__icon--close');
let btnDelete = document.querySelector('.admin-content__btn--delete');
let formCategoryAdd = document.querySelector('.category-add');
let colAllCheckbox = document.querySelector('#col-all');
let tableCategory = document.querySelector('.admin-content__table');
let close = document.querySelector('.close');
let form = document.querySelector('.form');
let URL_UPDATE_CATEGORY = 'category/get-date/'
let URL_DELETE_CATEGORY = 'category/delete'

let handlerDeleteCategoryCallback = function handlerDeleteCategoryCallback(data){
    window.location.reload();
}

let handlerDeleteItem = function handlerDeleteItem(e) {
    let allCheckboxChecked = document.querySelectorAll('.admin-content__checkbox--js:checked');
    let arId = [];
    allCheckboxChecked.forEach(el=>{
       arId.push(el.dataset.id);
    });

    updateForm(URL_DELETE_CATEGORY, { 'arId': arId.join(',')}, handlerDeleteCategoryCallback);

}

if (btnDelete != null) {
    btnDelete.addEventListener('click', handlerDeleteItem)
}

let handlerAlertClose = function handlerAlertClose(e) {
    let alert = document.querySelector('.alert');
    alert.remove();
}

if (close != null) {
    close.addEventListener('click', handlerAlertClose);
}
let editCallback = function editCallback(data) {
    form.innerHTML = data.view;
    overlay.classList.add('overlay--show');
    formCategoryAdd = document.querySelector('.category-add');
    formCategoryAdd.classList.add('form-admin--show');
    closeForm = document.querySelector('.form-admin__icon--close');
    closeForm.addEventListener("click", handlerFormClickClose);
}
let handlerClickBtn = function handlerClickBtn(e) {
    let item = e.target;
    if (item.classList.contains('admin-content__table-icon--edit')) {
        let id = item.dataset.id;
        updateForm(URL_UPDATE_CATEGORY + id, {}, editCallback);
    }
}

if (tableCategory != null) {
    tableCategory.addEventListener('click', handlerClickBtn)
}

let handlerCheckedAll = function handlerCheckedAll(e) {
    let allCheckbox = document.querySelectorAll('.admin-content__checkbox--js');
    allCheckbox.forEach(el => {
        if (el.checked === true) el.checked = false;
        else if (el.checked === false) el.checked = true;
    });
}

if (colAllCheckbox != null) {
    colAllCheckbox.addEventListener('input', handlerCheckedAll)
}

let handlerFormCategoryAdd = function handlerFormCategoryAdd() {
    formCategoryAdd = document.querySelector('.category-add');
    formCategoryAdd.querySelectorAll('input').forEach(el => {
        if(el.id != 'parent_id'){
            el.value = '';
        }

    });
    overlay.classList.add('overlay--show');
    formCategoryAdd.classList.add('form-admin--show');

}

if (btnAddFormCategory != null) {
    btnAddFormCategory.addEventListener('click', handlerFormCategoryAdd)
}

let handlerFormClickClose = function handlerFormClickClose(e) {
    formCategoryAdd.classList.remove("form-admin--show");
    overlay.classList.remove("overlay--show");
};
if (closeForm != null) {
    closeForm.addEventListener("click", handlerFormClickClose);
}
