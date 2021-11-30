"use strict";
let urlParams = "http://";
let account__radio_list = document.querySelector(".account__radio-list");
let add_address_additional = document.querySelector(".profile-page__params-label-address");
let copy_btn = document.getElementById("btn-copy");
let file_profile = document.getElementById("file-profile");
let add_advert_list = document.querySelector(".add-advert__list");
let copy_input = document.getElementById("refer");
let document_input = document.getElementById("document_input");
let high_price = document.getElementById("high-price");
let prices__wrap = document.querySelector(".prices__wrap");
let overlay = document.querySelector(".overlay");
let overlay_show;
let view_product = document.querySelector(".sorting__list-view");
let products__button = document.querySelector(".products__button");
let dogovor_check = document.querySelector("#dogovor_check");
let list_address = document.querySelector('.params-created__list-address');

let sorting_form = document.querySelector("#sorting-form");
let sorting_wrapper = document.querySelector(".products__sorting-wrapper");
let products__all_wrapper = document.querySelector(".products__all-wrapper");
let form_header = document.querySelector(".form-header");
let form_header_login = document.querySelector(".form-header-login");
let form_header_register = document.querySelector(".form-header-register");
let login = document.querySelector(".main-header__btn--login");
let login_form = document.querySelector(".form-header__btn-login");
let registration = document.querySelector(".main-header__btn--registration");
let registration_form = document.querySelector(".form-header__btn-registration");
let close_form_login = document.querySelector(".form-header__icon--close-login");
let close_form_register = document.querySelector(".form-header__icon--close-register");
let captcha_test_login = document.querySelector("#form-header__captcha-login");
let captcha_test_register = document.querySelector("#form-header__captcha-register");
let ajaxHedCatWrapper = document.querySelector('.ajax-header-categories__wrapper');
let advertLoadImg = document.querySelector('#load-img-1');
let advertLoadImg2 = document.querySelector('#load-img-2');
let loadImgPc = document.querySelector('#load-img-pc');
let loadImgMb = document.querySelector('#load-img-mb');
let loadImgLogo = document.querySelector('#load-img-logo');
let fileProfileAbout = document.querySelector('#file-profile__about');
let fileProfileReliability = document.querySelector('#file-profile_reliability');
let listLoadImg = document.querySelector('.add-advert__list-img');
let addVideoLink = document.querySelector('.add-advert__links');
let addVideoLink2 = document.querySelector('.add-advert__links2');
let urlCategory = '/advert/category/';
let urlLoadImg = '/advert/load-image';
let urlLoadRemoveImg = '/advert/load-remove-image';
let loadPercent;
let videoCount = 1;
let imgLoadCount = 0;

if (products__all_wrapper != null) {
    let pr_grid2 = document.querySelector('.products__all-wrapper');
    let pr_infScroll = new InfiniteScroll(pr_grid2, {
        // options
        path: function () {
            let query = window.location.search.substring(1);
            let qs = parse_query_string(query);
            if (qs.cat != undefined) {
                return `/?page=${(this.loadCount + 2)}&cat=${qs.cat}`;
            } else {
                return `/?page=${(this.loadCount + 2)}`;
            }
        },
        loadOnScroll: false,
        append: '.product-item',
        history: false,
        checkLastPage: false,
        button: '.products__button',
        scrollThreshold: false,
        status: '.page-load-status'
    });
}
let getTemplateDivVideoLink = function getTemplateDivVideoLink(item) {
    videoCount++;
    addVideoLink = item;
    let divLoad = document.createElement('DIV');
    divLoad.classList.add('seller__ref-wrapper');
    divLoad.classList.add('add-advert__ref-wrapper');
    let input = document.createElement('INPUT');
    input.classList.add('seller__ref', 'add-advert__input-link');
    input.type = 'text';
    input.name = 'link_video_' + videoCount;
    input.placeholder = 'Введите ссылку';
    let i = document.createElement('I');
    i.classList.add(
        'add-advert__btn',
        'add-advert__icon-block',
        'add-advert__icon-block--green',
        'add-advert__icon-delete--green',
        'fas',
        'fa-plus',
    );
    divLoad.appendChild(input);
    divLoad.appendChild(i);
    addVideoLink.append(divLoad);

}
let removeInput = function removeInput(e) {
    let item = e.target;
    item.parentElement.remove();
}
let addInputLinkVideo = function addInputLinkVideo(e) {
    let item = e.target;
    if (item.classList.contains('add-advert__btn') && item.nodeName == "I") {
        let div = item.parentElement;
        let input = item.parentElement.querySelector('.add-advert__input-link');
        if (input.value != '') {

            input.classList.remove('add-advert__icon-block--red');
            input.classList.add('add-advert__icon-block--green');
            let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            svgElem.classList.add('add-advert__btn');
            svgElem.classList.add('add-advert__icon-block');
            svgElem.classList.add('add-advert__icon-block--delete');
            svgElem.classList.add('add-advert__icon-block--red');
            svgElem.classList.add('add-advert__icon-delete--red');
            useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/assets/img/icons/sprite.svg#delete');
            svgElem.addEventListener('click', removeInput);
            svgElem.appendChild(useElem);
            div.append(svgElem);
            let addElement = getTemplateDivVideoLink(item.parentElement.parentElement);
            item.remove();

        } else {
            input.classList.remove('add-advert__icon-block--green');
            input.classList.add('add-advert__icon-block--red');
        }
    }
}

if (addVideoLink != null) {
    addVideoLink.addEventListener('click', addInputLinkVideo)
}
if (addVideoLink2 != null) {
    addVideoLink2.addEventListener('click', addInputLinkVideo)
}
let removeDivImg = function removeDivImg(data, item) {
    item.parentElement.remove();
}
let removeLoadImg = function removeLoadImg(e) {
    let item = e.target;
    if (item.classList.contains('add-advert__icon-delete')) {
        let name = item.dataset.name;
        updateForm(urlLoadRemoveImg, {'name': name}, removeDivImg, item)
    }
}


let handlerLoadImg = function hanlderLoadImg(e) {
    let divLoad = document.createElement('DIV');
    listLoadImg = e.target.parentElement.parentElement;
    divLoad.classList.add('add-advert__item-img');
    divLoad.classList.add('add-advert__item-load');

    let divLoadWrapperImg = document.createElement('DIV');
    divLoadWrapperImg.classList.add('add-advert__item-wrapper-load');

    let loadGif = document.createElement('IMG');
    loadGif.classList.add('add-advert__icon-load-animation');
    loadGif.src = '/assets/img/gif/load.gif';
    loadGif.alt = 'gif-load';

    loadPercent = document.createElement('P');
    loadPercent.classList.add('add-advert__item-percent');
    loadPercent.innerHTML = "0%";

    divLoadWrapperImg.appendChild(loadGif);
    divLoadWrapperImg.appendChild(loadPercent);
    divLoad.appendChild(divLoadWrapperImg);
    listLoadImg.append(divLoad);
    uploadFile(e.target, progressHandlerLoadMany, completeHandlerLoadMany, urlLoadImg)
}

function uploadFile(file, progressFunction, completeFunction, URl) {
    let formData = new FormData();
    formData.append("file", file.files[0]);
    let ajax = new XMLHttpRequest();
    let token = document.querySelector('meta[name="csrf-token"]')['content'];
    ajax.upload.addEventListener("progress", progressFunction);
    ajax.addEventListener("load", completeFunction);
    ajax.open("POST", URl);
    ajax.setRequestHeader('X-CSRF-TOKEN', token);
    ajax.send(formData);
}

function completeHandlerLoadMany(event) {
    let test = JSON.parse(event.target.response);
    loadPercent.value = 100;

    let divImg = document.createElement('DIV');
    divImg.classList.add('add-advert__item-img');
    divImg.classList.add('add-advert__item-not-line');
    imgLoadCount++;
    let loadImg = document.createElement('IMG');
    loadImg.alt = 'load-img';
    loadImg.src = test.pathFile;

    let inputImg = document.createElement('INPUT');
    inputImg.hidden = true;
    inputImg.name = 'img_load_' + imgLoadCount;
    inputImg.type = "text";
    inputImg.value = test.pathFile;

    let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    svgElem.classList.add('add-advert__icon-delete');
    useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/assets/img/icons/sprite.svg#delete');
    svgElem.addEventListener('click', removeDivImgInfo);
    svgElem.dataset.name = test.pathFile;

    svgElem.appendChild(useElem);
    divImg.appendChild(inputImg);
    divImg.appendChild(loadImg);
    divImg.appendChild(svgElem);
    listLoadImg.removeChild(document.querySelector('.add-advert__item-load'));
    listLoadImg.append(divImg);

}

let removeDivImgInfo = function removeDivImgInfo(data, item) {
    item.parentElement.style.background = 'none';
    item.parentElement.classList.remove('add-advert__item-not-line');
    item.parentElement.querySelector('.add-advert__icon-delete').remove();
}

let removeLoadImgInfo = function removeLoadImgInfo(e) {
    let item = e.target;
    if (item.classList.contains('add-advert__icon-delete')) {
        let name = item.dataset.name;
        updateForm(urlLoadRemoveImg, {'name': name}, removeDivImgInfo, item)
    }
}

function progressHandlerLoadMany(event) {
    let percent = 100 * (event.loaded / event.total);
    loadPercent.innerHTML = Math.round(percent) + "%";
}


if (advertLoadImg != null) {
    advertLoadImg.addEventListener('input', handlerLoadImg)
}
if (advertLoadImg2 != null) {
    advertLoadImg2.addEventListener('input', handlerLoadImg)
}

let completeHandlerOneImg = function completeHandlerOneImg(event) {
    let test = JSON.parse(event.target.response);
    let divImg = loadPercent.parentElement;
    divImg.style.background = " center / cover no-repeat url('" + test.pathFile + "')";
    loadPercent.value = 100;
    divImg.classList.add('add-advert__item-img');
    divImg.classList.add('add-advert__item-not-line');
    let label = divImg.querySelector('.add-advert__label-img');
    let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    svgElem.classList.add('add-advert__icon-delete');
    useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/assets/img/icons/sprite.svg#delete');
    svgElem.addEventListener('click', removeLoadImgInfo);
    svgElem.dataset.name = test.pathFile;

    svgElem.appendChild(useElem);
    divImg.append(svgElem);
    loadPercent.style.display = 'none';
    label.removeChild(document.querySelector('.add-advert__icon-load-animation'));
}

let handlerLoaderImgPC = function handlerLoaderImgPC(e) {

    let parent = e.target.parentElement;
    loadPercent = document.createElement('P');
    loadPercent.classList.add('add-advert__item-percent');
    loadPercent.innerHTML = "0%";
    parent.append(loadPercent);

    let loadGif = document.createElement('IMG');
    loadGif.classList.add('add-advert__icon-load-animation');
    loadGif.src = '/assets/img/gif/load.gif';
    loadGif.alt = 'gif-load';
    let label = parent.querySelector('.add-advert__label-img');
    label.append(loadGif);
    uploadFile(e.target, progressHandlerLoadMany, completeHandlerOneImg, urlLoadImg)
}

if (loadImgPc != null) {
    loadImgPc.addEventListener('input', handlerLoaderImgPC)
}

if (loadImgMb != null) {
    loadImgMb.addEventListener('input', handlerLoaderImgPC)
}

if (loadImgLogo != null) {
    loadImgLogo.addEventListener('input', handlerLoaderImgPC)
}
let removeDivFileInfo = function removeDivFileInfo(data, item) {
    debugger;
    item.parentElement.style.background = 'none';
    item.parentElement.classList.remove('add-advert__item-not-line');
    item.parentElement.querySelector('.add-advert__icon-delete').remove();
}

let removeLoadFile = function removeLoadFile(e) {
    debugger;
    let item = e.target;

    if (item.classList.contains('information__file-icon-delete')) {
        let name = item.dataset.name;
        updateForm(urlLoadRemoveImg, {'name': name}, removeDivFileInfo, item)
    }
}

let completeHandlerFile = function completeHandlerFile(event) {
    let test = JSON.parse(event.target.response);
    let item = loadPercent.parentElement.parentElement.parentElement.querySelector('.information__file-item');
    let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    svgElem.classList.add('information__file-icon-delete');
    useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/assets/img/icons/sprite.svg#delete');
    svgElem.addEventListener('click', removeLoadFile);
    svgElem.dataset.name = test.pathFile;
    svgElem.append(useElem);
    // console.log(svgElem.addEventListener);
    // debugger;
    item.append(svgElem);
    item.innerHTML += test.pathFile;
    loadPercent.classList.remove('add-advert__item-percent--show');
    let load = loadPercent.parentElement.querySelector('.add-advert__icon-load-animation');
    load.classList.remove('add-advert__icon-load-animation--show');
}

let handlerLoaderFile = function handlerLoaderFile(e) {
    let parent = e.target.parentElement;
    loadPercent = parent.querySelector('.add-advert__item-percent');
    loadPercent.classList.add('add-advert__item-percent--show');
    let load = parent.querySelector('.add-advert__icon-load-animation');
    load.classList.add('add-advert__icon-load-animation--show');
    uploadFile(e.target, progressHandlerLoadMany, completeHandlerFile, urlLoadImg)
}
if (fileProfileAbout != null) {
    fileProfileAbout.addEventListener('input', handlerLoaderFile)
}
if (fileProfileReliability != null) {
    fileProfileReliability.addEventListener('input', handlerLoaderFile)
}
let showCategory = function showCategory(data) {
    ajaxHedCatWrapper.innerHTML = data.view;
    if (data.advert) {
        products__button.style.display = '';
        products__all_wrapper.innerHTML = data.advert;
    }
}

let handlerClickSubCategories = function handlerClickSubCategories(e) {
    let item = e.target;
    if (item.nodeName == "A" && (item.classList.contains('sub-categories__back') || item.classList.contains('sub-categories__link'))) {
        let id = item.dataset.id;
        if (parseInt(id) || id == 0) {
            let url = urlCategory + id;

            let urlParams = new URLSearchParams(window.location.search);
            let params = {
                'cat': (id != 0) ? id : '',
            };
            updateURL(params);
            if (item.classList.contains('home')) {
                updateForm(url, {'page': 'home'}, showCategory);
            } else {
                updateForm(url, {'page': 'advert'}, showCategory);
            }
        }
    }
}

if (ajaxHedCatWrapper != null) {
    ajaxHedCatWrapper.addEventListener('click', handlerClickSubCategories)
}

const handlerClickMoney = function handlerClickMoney(e) {
    let item = e.target;

    if ((item.nodeName === "I" && item.classList.contains("prices__icon") && item.parentElement.classList.contains("prices__submit")) ||
        (item.nodeName === "BUTTON" && item.classList.contains("prices__submit"))) {
        if (item.nodeName === "BUTTON" && item.classList.contains("prices__submit")) {
            item.classList.add("prices__submit--disable");
            let parent_range = item.parentElement;
            let price_list = parent_range.querySelector(".prices__list");
            price_list.classList.add("prices__list--show");
            overlay.classList.add("overlay--show");
            overlay_show = document.querySelector(".overlay--show");
            if (overlay_show != null) {
                overlay_show.addEventListener("click", handlerClickOverlayClose);
            }
        } else if (item.nodeName === "I" && item.classList.contains("prices__icon")) {
            item.parentElement.classList.add("prices__submit--disable");
            let parent_range = item.parentElement.parentElement;
            let price_list = parent_range.querySelector(".prices__list");
            price_list.classList.add("prices__list--show");
            overlay.classList.add("overlay--show");
            overlay_show = document.querySelector(".overlay--show");
            if (overlay_show != null) {
                overlay_show.addEventListener("click", handlerClickOverlayClose);
            }
        }

    } else if ((item.nodeName === "I" && item.classList.contains("prices__icon") && item.parentElement.classList.contains("prices__item")) ||
        (item.nodeName === "LI" && item.classList.contains("prices__item"))) {
        if ((item.nodeName === "I" && item.classList.contains("prices__icon") && item.parentElement.classList.contains("prices__item"))) {
            let price_list = item.parentElement.parentElement;
            let parent_range = price_list.parentElement;
            let prices__submit = parent_range.querySelector(".prices__submit");
            prices__submit.classList.remove("prices__submit--disable");
            price_list.classList.remove("prices__list--show");
            let list_submit_icon = prices__wrap.querySelectorAll(".prices__submit .prices__icon");
            for (let i = 0; i < list_submit_icon.length; i++) {
                if (list_submit_icon[i].classList.contains("fa-ruble-sign")) {
                    list_submit_icon[i].classList.remove("fa-ruble-sign");
                } else if (list_submit_icon[i].classList.contains("fa-dollar-sign")) {
                    list_submit_icon[i].classList.remove("fa-dollar-sign");
                } else if (list_submit_icon[i].classList.contains("fa-euro-sign")) {
                    list_submit_icon[i].classList.remove("fa-euro-sign");
                } else if (list_submit_icon[i].classList.contains("fa-yen-sign")) {
                    list_submit_icon[i].classList.remove("fa-yen-sign");
                }

                if (item.classList.contains("fa-ruble-sign")) {
                    list_submit_icon[i].classList.add("fa-ruble-sign");
                } else if (item.classList.contains("fa-dollar-sign")) {
                    list_submit_icon[i].classList.add("fa-dollar-sign");
                } else if (item.classList.contains("fa-euro-sign")) {
                    list_submit_icon[i].classList.add("fa-euro-sign");
                } else if (item.classList.contains("fa-yen-sign")) {
                    list_submit_icon[i].classList.add("fa-yen-sign");
                }
            }
            overlay_show.classList.remove("overlay--show");
        } else if (item.nodeName === "LI" && item.classList.contains("prices__item")) {
            let list_submit_icon = prices__wrap.querySelectorAll(".prices__submit .prices__icon");
            for (let i = 0; i < list_submit_icon.length; i++) {
                if (list_submit_icon[i].classList.contains("fa-ruble-sign")) {
                    list_submit_icon[i].classList.remove("fa-ruble-sign");
                } else if (list_submit_icon[i].classList.contains("fa-dollar-sign")) {
                    list_submit_icon[i].classList.remove("fa-dollar-sign");
                } else if (list_submit_icon[i].classList.contains("fa-euro-sign")) {
                    list_submit_icon[i].classList.remove("fa-euro-sign");
                } else if (list_submit_icon[i].classList.contains("fa-yen-sign")) {
                    list_submit_icon[i].classList.remove("fa-yen-sign");
                }

                if (item.firstElementChild.classList.contains("fa-ruble-sign")) {
                    list_submit_icon[i].classList.add("fa-ruble-sign");
                } else if (item.firstElementChild.classList.contains("fa-dollar-sign")) {
                    list_submit_icon[i].classList.add("fa-dollar-sign");
                } else if (item.firstElementChild.classList.contains("fa-euro-sign")) {
                    list_submit_icon[i].classList.add("fa-euro-sign");
                } else if (item.firstElementChild.classList.contains("fa-yen-sign")) {
                    list_submit_icon[i].classList.add("fa-yen-sign");
                }
            }
            let price_list = item.parentElement;
            let parent_range = price_list.parentElement;
            let prices__submit = parent_range.querySelector(".prices__submit");
            prices__submit.classList.remove("prices__submit--disable");
            price_list.classList.remove("prices__list--show");
            overlay_show.classList.remove("overlay--show");
        }
    }
};
if (prices__wrap != null) {
    // prices__wrap.addEventListener("click", handlerClickMoney);
}
let handlerClickSortingForm = function handlerClickSortingForm(e) {
    sorting_wrapper.classList.toggle("products__sorting-wrapper--active");
    overlay.classList.toggle("overlay--show");
    overlay_show = document.querySelector(".overlay--show");
    overlay_show.addEventListener("click", handlerClickOverlayClose);
};
if (sorting_form != null) {
    sorting_form.addEventListener("click", handlerClickSortingForm);
}
let handlerClickSortingWrapper = function handlerClickSortingWrapper(e) {
    let item = e.target;
    if (item.nodeName === "INPUT" || item.nodeName === "svg" || item.nodeName === "use") {
        sorting_wrapper.classList.remove("products__sorting-wrapper--active");
        overlay.classList.remove("overlay--show");
    }
};
if (sorting_wrapper != null) {
    sorting_wrapper.addEventListener("click", handlerClickSortingWrapper);
}

let handlerTabsClickProducts = function handlerTabsClickProducts(e) {
    let item = e.target;
    if (item.nodeName === "I" && item.classList.contains("product-item__icon")) {
        let parentItem = item.parentElement.parentElement.parentElement;
        let id = parentItem.dataset.id;
        parentItem.querySelector(".product-item__title").classList.add("product-item__title--show");
        parentItem.querySelector(".product-item__wrapper").classList.add("product-item__wrapper--disabled");
        parentItem.querySelector(".product-item__description-mb").classList.add("product-item__description-mb--disabled");
        parentItem.querySelector(".product-item__information-line-wrapper").classList.add("product-item__information-line-wrapper--disabled");

        parentItem.querySelector(".product-item__info").classList.remove("product-item__info--show");
        parentItem.querySelector(".product-item__star").classList.remove("product-item__star--show");
        parentItem.querySelector(".product-item__author").classList.remove("product-item__author--show");
        parentItem.querySelector(".product-item__basket").classList.remove("product-item__basket--show");

        // if()


        if (item.classList.contains("product-item__icon--briefcase")) {
            if (item.classList.contains("product-item__icon--briefcase-active")) {
                parentItem.querySelector(".product-item__wrapper").classList.remove("product-item__wrapper--disabled");
                parentItem.querySelector(".product-item__description-mb").classList.remove("product-item__description-mb--disabled");
                parentItem.querySelector(".product-item__information-line-wrapper").classList.remove("product-item__information-line-wrapper--disabled");
                parentItem.querySelector(".product-item__icon--briefcase").classList.remove("product-item__icon--briefcase-active");
            } else {
                parentItem.querySelector(".product-item__info").classList.add("product-item__info--show");
                parentItem.querySelector(".product-item__icon--star").classList.remove("product-item__icon--star-active");
                parentItem.querySelector(".product-item__icon--profile").classList.remove("product-item__icon--profile-active");
                parentItem.querySelector(".product-item__icon--buy").classList.remove("product-item__icon--buy-active");
                item.classList.add("product-item__icon--briefcase-active");
            }

        } else if (item.classList.contains("product-item__icon--star")) {
            if (item.classList.contains("product-item__icon--star-active")) {
                parentItem.querySelector(".product-item__wrapper").classList.remove("product-item__wrapper--disabled");
                parentItem.querySelector(".product-item__description-mb").classList.remove("product-item__description-mb--disabled");
                parentItem.querySelector(".product-item__information-line-wrapper").classList.remove("product-item__information-line-wrapper--disabled");
                parentItem.querySelector(".product-item__icon--star").classList.remove("product-item__icon--star-active");
            } else {
                parentItem.querySelector(".product-item__star").classList.add("product-item__star--show");
                parentItem.querySelector(".product-item__icon--briefcase").classList.remove("product-item__icon--briefcase-active");
                parentItem.querySelector(".product-item__icon--profile").classList.remove("product-item__icon--profile-active");
                parentItem.querySelector(".product-item__icon--buy").classList.remove("product-item__icon--buy-active");
                item.classList.add("product-item__icon--star-active");
            }

        } else if (item.classList.contains("product-item__icon--profile")) {
            if (item.classList.contains("product-item__icon--profile-active")) {
                parentItem.querySelector(".product-item__wrapper").classList.remove("product-item__wrapper--disabled");
                parentItem.querySelector(".product-item__description-mb").classList.remove("product-item__description-mb--disabled");
                parentItem.querySelector(".product-item__information-line-wrapper").classList.remove("product-item__information-line-wrapper--disabled");
                parentItem.querySelector(".product-item__icon--profile").classList.remove("product-item__icon--profile-active");
            } else {
                parentItem.querySelector(".product-item__author").classList.add("product-item__author--show");
                parentItem.querySelector(".product-item__icon--briefcase").classList.remove("product-item__icon--briefcase-active");
                parentItem.querySelector(".product-item__icon--star").classList.remove("product-item__icon--star-active");
                parentItem.querySelector(".product-item__icon--buy").classList.remove("product-item__icon--buy-active");
                item.classList.add("product-item__icon--profile-active");
            }

        } else if (item.classList.contains("product-item__icon--buy")) {
            if (item.classList.contains("product-item__icon--buy-active")) {
                parentItem.querySelector(".product-item__wrapper").classList.remove("product-item__wrapper--disabled");
                parentItem.querySelector(".product-item__description-mb").classList.remove("product-item__description-mb--disabled");
                parentItem.querySelector(".product-item__information-line-wrapper").classList.remove("product-item__information-line-wrapper--disabled");
                parentItem.querySelector(".product-item__icon--buy").classList.remove("product-item__icon--buy-active");
            } else {
                parentItem.querySelector(".product-item__basket").classList.add("product-item__basket--show");
                item.classList.add("product-item__icon--buy-active");
                parentItem.querySelector(".product-item__icon--briefcase").classList.remove("product-item__icon--briefcase-active");
                parentItem.querySelector(".product-item__icon--star").classList.remove("product-item__icon--star-active");
                parentItem.querySelector(".product-item__icon--profile").classList.remove("product-item__icon--profile-active");
            }

        }

    }
};
if (products__all_wrapper != null) {
    products__all_wrapper.addEventListener("click", handlerTabsClickProducts);
}

let handlerFormHeaderClickLogin = function handlerFormHeaderClickLogin(e) {
    e.preventDefault();
    let item = e.target;
    form_header_register.classList.remove("form-header--show");
    form_header_login.classList.add("form-header--show");

    let width_document = document.documentElement.clientWidth;
    let minus_width;
    if (width_document < 1170) {
        minus_width = 30;
        let width_form = form_header_login.clientWidth - minus_width;
        let scale = (width_form / 304).toFixed(2);
        captcha_test_login.style.transform = "scale(" + scale + ")";
        captcha_test_login.style.transformOrigin = "left top";
    }
    overlay.classList.add("overlay--show");
    overlay_show = document.querySelector(".overlay--show");
    if (overlay_show != null) {
        overlay_show.addEventListener("click", handlerClickOverlayClose);
    }


};
let handlerFormHeaderClickRegistration = function handlerFormHeaderClickRegistration(e) {
    e.preventDefault();
    let item = e.target;
    form_header_login.classList.remove("form-header--show");
    form_header_register.classList.add("form-header--show");
    let width_document = document.documentElement.clientWidth;

    let minus_width;
    if (width_document < 1170) {
        minus_width = 30;
        let width_form = form_header_register.clientWidth - minus_width;
        let scale = (width_form / 304).toFixed(2);
        captcha_test_register.style.transform = "scale(" + scale + ")";
        captcha_test_register.style.transformOrigin = "left top";
    }
    overlay.classList.add("overlay--show");
    overlay_show = document.querySelector(".overlay--show");
    if (overlay_show != null) {
        overlay_show.addEventListener("click", handlerClickOverlayClose);
    }
};
if (login != null) {
    login.addEventListener("click", handlerFormHeaderClickLogin);
    login_form.addEventListener("click", handlerFormHeaderClickLogin);
    registration.addEventListener("click", handlerFormHeaderClickRegistration);
    registration_form.addEventListener("click", handlerFormHeaderClickRegistration);
}


let handlerFormHeaderClickClose = function handlerFormHeaderClickClose(e) {
    form_header_login.classList.remove("form-header--show");
    form_header_register.classList.remove("form-header--show");
    overlay_show.classList.remove("overlay--show");
};
if (close_form_login != null) {
    close_form_login.addEventListener("click", handlerFormHeaderClickClose);
}
if (close_form_register != null) {
    close_form_register.addEventListener("click", handlerFormHeaderClickClose);
}
let handlerClickOverlayClose = function handlerClickOverlayClose(e) {
    overlay_show.classList.remove("overlay--show");
    sorting_wrapper.classList.remove("products__sorting-wrapper--active");
    form_header_register.classList.remove("form-header--show");
    form_header_login.classList.remove("form-header--show");
    let prices__submit = document.querySelector(".prices__submit--disable");
    let price_list = document.querySelector(".prices__list--show");
    if (price_list != null) {
        price_list.classList.remove("prices__list--show");
    }
    if (prices__submit != null) {
        prices__submit.classList.remove("prices__submit--disable");
    }
};

let handlerChangeVievOnLine = function handlerChangeVievOnLine(e) {
    let item = e.target;
    if (item.checked && item.id == "line") {
        products__all_wrapper.classList.add("products__all-wrapper--line");
    }
    if (item.checked && item.id == "squera") {
        products__all_wrapper.classList.remove("products__all-wrapper--line");
    }
};
if (view_product != null) {
    view_product.addEventListener("input", handlerChangeVievOnLine);
}

let handlerClickCopy = function handlerClickCopy() {
    copy_input.select();
    document.execCommand("copy");
};
if (copy_btn != null) {
    copy_btn.addEventListener('click', handlerClickCopy);
}

let handlerCheck = function handlerCheck(e) {
    if (e.target.checked === true) {
        document_input.disabled = false;
        high_price.disabled = false;
    } else {
        document_input.disabled = true;
        high_price.disabled = true;
    }
};
if (dogovor_check != null) {
    dogovor_check.addEventListener('change', handlerCheck);
}
let handlerCheckDescription = function handlerCheckDescription(e) {
    let item = e.target;
    if (item.classList.contains('add-advert__icon')) {
        item.classList.toggle("fa-minus");
        item.classList.toggle("fa-plus");
    }
};
if (add_advert_list != null) {
    add_advert_list.addEventListener('click', handlerCheckDescription);
}
let handlerRadioChange = function handlerRadioChange(e) {
    let item = e.target;
    if (item.nodeName === "INPUT" && item.classList.contains('account__radio-input')) {
        let id = item.id;
        document.querySelector('.account__params-show').classList.remove("account__params-show");
        document.querySelector('.account__' + id).classList.add("account__params-show");
    }
};
if (account__radio_list != null) {
    account__radio_list.addEventListener('input', handlerRadioChange);
}
let countAddress;
if (list_address != null) {
    countAddress = (list_address.children.length / 2) + 1;
} else {
    countAddress = 1;
}

let handlerClickAddAddress = function handlerClickAddAddress(e) {
    let item = e.target;
    if ((item.nodeName === "LABEL" || item.nodeName === "I") || item.classList.contains('profile-page__params-icons')) {
        let list_address = document.querySelector('.params-created__list-address');
        let label = document.createElement('label');
        label.classList.add('profile-page__params-label');
        label.for = 'address' + countAddress;
        label.innerText = 'Дополнительный адресс № ' + countAddress;
        let input = document.createElement('input');
        input.classList.add('profile-page__params-input');
        input.id = 'address' + countAddress;
        input.type = 'text';
        input.placeholder = 'Укажите ваш дополнительный адрес нахождения';
        input.name = 'address' + countAddress;
        list_address.append(label, input);
        countAddress++;
    }
};
if (add_address_additional != null) {
    add_address_additional.addEventListener('click', handlerClickAddAddress);
}

function show_hide_password(target) {
    let input = target.parentElement.querySelector('.profile-page__params-input');
    let fas = target.querySelector('.fas');
    if (input.getAttribute('type') == 'password') {
        fas.classList.remove('fa-eye-slash');
        fas.classList.add('fa-eye');
        input.setAttribute('type', 'text');
    } else {
        fas.classList.add('fa-eye-slash');
        fas.classList.remove('fa-eye');
        input.setAttribute('type', 'password');
    }
    return false;
}

let handlerFileLoad = function handlerFileLoad(e) {

};
if (file_profile != null) {
    file_profile.addEventListener('input', handlerFileLoad);
}


let extractHostname = function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function parse_query_string(query) {
    let vars = query.split("&");
    let query_string = {};
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        let key = decodeURIComponent(pair[0]);
        let value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            let arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

let updateURL = function updateURL(obj) {
    if (history.pushState) {
        let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        let search = window.location.search;
        let newUrl = baseUrl + "?" + objectToQueryString(obj);
        history.pushState(null, null, newUrl);
    } else {
        console.warn('History API не поддерживается');
    }
}
let objectToQueryString = function objectToQueryString(obj) {
    let str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }
    return str.join("&");
}