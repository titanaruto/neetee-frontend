<section class="information  account research">
    <form method="post" enctype="multipart/form-data">
        <div class="add-advert">
            <div class="add-advert__list-img">
                <div class="information__item-img information__img-desktop">
                    <label class="add-advert__label-img information__label-desktop" for="load-img-1">
                        <svg class="add-advert__icon-load information__icon-load-desktop">
                            <use href="assets/img/icons/sprite.svg#load-img"></use>
                        </svg>
                    </label>
                    <p class="information__description-mobile">Фоновая фотография
                        на пк-версии</p>
                    <input type="file" hidden id="load-img-1">
                </div>
                <div class="information__img-wrapper">
                    <div class="information__item-img information__img-mobile">
                        <label class="add-advert__label-img information__label-mobile" for="load-img-1">
                            <svg class="add-advert__icon-load">
                                <use href="assets/img/icons/sprite.svg#load-img"></use>
                            </svg>
                        </label>
                        <p class="information__description-mobile">Фоновая фотография на мобильной версии</p>
                        <input type="file" hidden id="load-img-1">
                    </div>

                    <div class="information__item-img information__img-logo">
                        <label class="add-advert__label-img information__label-logo" for="load-img-1">
                            <svg class="add-advert__icon-load information__icon-load-logo">
                                <use href="assets/img/icons/sprite.svg#load-img"></use>
                            </svg>
                        </label>
                        <p class="information__description-mobile information__description-logo">Логотип, изображение профиля</p>
                        <input type="file" hidden id="load-img-1">
                    </div>
                </div>

                <label for="description" class="profile-page__params-label">Описание вашей компании</label>
                <textarea required id="description" name="description" placeholder="Описание о вас"
                          class="profile-page__params-input information__textarea"></textarea>

            </div>
            <div class="research__search-name">
                <p class="add-advert__label">Загрузите изображение о вашей компании </p>
                <div class="add-advert__list-img">
                    <div class="add-advert__item-img">
                        <label class="add-advert__label-img" for="load-img-1">
                            <svg class="add-advert__icon-load">
                                <use href="assets/img/icons/sprite.svg#load-img"></use>
                            </svg>
                        </label>
                        <input type="file" hidden id="load-img-1">
                    </div>
                    <div class="add-advert__item-img add-advert__item-not-line">
                        <img src="assets/img/minific/image-default-load.jpg" alt="load-img">
                        <svg class="add-advert__icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                    </div>
                    <div class="add-advert__item-img  add-advert__item-not-line">
                        <img src="assets/img/minific/image-default-load.jpg" alt="load-img">
                        <svg class="add-advert__icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                    </div>
                    <div class="add-advert__item-img  add-advert__item-not-line">
                        <img src="assets/img/minific/image-default-load.jpg" alt="load-img">
                        <svg class="add-advert__icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                    </div>
                    <div class="add-advert__item-img add-advert__item-load">
                        <div class="add-advert__item-wrapper-load">
                            <img src="assets/img/gif/load.gif" alt="gif-load"
                                 class="add-advert__icon-load-animation">
                            <p class="add-advert__item-percent">10%</p>
                        </div>
                    </div>
                    <div class="add-advert__item-img add-advert__item-load">
                        <div class="add-advert__item-wrapper-load">
                            <img src="assets/img/gif/load.gif" alt="gif-load"
                                 class="add-advert__icon-load-animation">
                            <p class="add-advert__item-percent">100%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add-advert__links">
                <p class="add-advert__label">Прикрепите ссылку на видео с YouTube</p>
                <div class="seller__ref-wrapper add-advert__ref-wrapper">
                    <input type="text" class="seller__ref add-advert__input-link" id="youtube1"
                           value="https://www.youtube.com...">
                    <svg class="add-advert__btn  add-advert__icon-block  add-advert__icon-block--red add-advert__icon-block--delete add-advert__icon-delete--red"
                         id="btn-copy">
                        <use href="assets/img/icons/sprite.svg#delete "></use>
                    </svg>
                </div>
                <div class="seller__ref-wrapper add-advert__ref-wrapper">
                    <input type="text" class="seller__ref add-advert__input-link" placeholder="Введите ссылку"
                           id="youtube1">
                    <i class="add-advert__btn  add-advert__icon-block  add-advert__icon-block--green add-advert__icon-delete--green fas fa-plus"></i>

                </div>
            </div>
        </div>
        <section class="information__company-info">
            <div class="information__company-info-wrapper">
                <div class="research__prices">
                    <div class="prices__form">
                        <p class="profile-page__params-label">График работы</p>
                        <div class="information__wrapper-graphics">
                            <div class="prices__wrap">
                                <div class="prices__range">
                                    <input type="text" name="start_work" placeholder="С" class="prices__input"
                                           id="start_work"/>
                                </div>
                                <svg class="prices__replace">
                                    <use href="assets/img/icons/sprite.svg#amb-arrow"></use>
                                </svg>
                                <div class="prices__range">
                                    <input type="text" name="end_work" placeholder="До" class="prices__input"/>
                                </div>
                            </div>
                            <div class="add-advert__submit">
                                <input type="checkbox" hidden class="add-advert__checkbox" name="around_the_clock"
                                       id="around_the_clock">
                                <label class="add-advert__label  add-advert__label--submit add-advert__price-check"
                                       for="around_the_clock"></label>
                                <p class="add-advert__document-text">Круглосуточно</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add-advert__submit-wrapper">

                    <section class="information__work-day">
                        <p class="profile-page__params-label">Рабочие дни</p>
                        <div class="information__work-day-wrapper">
                            <input class="information__work-day-checkbox" type="checkbox" value="Mon" id="Mon"
                                   name="Mon"
                                   hidden>
                            <label for="Mon" class="information__work-day-item">пн</label>

                            <input class="information__work-day-checkbox" type="checkbox" value="Tue" id="Tue"
                                   name="Tue"
                                   hidden>
                            <label for="Tue" class="information__work-day-item">вт</label>

                            <input class="information__work-day-checkbox" type="checkbox" value="Wed" id="Wed"
                                   name="Wed"
                                   hidden>
                            <label for="Wed" class="information__work-day-item">ср</label>

                            <input class="information__work-day-checkbox" type="checkbox" value="Thu" id="Thu"
                                   name="Thu"
                                   hidden>
                            <label for="Thu" class="information__work-day-item">чт</label>

                            <input class="information__work-day-checkbox" type="checkbox" value="Fri" id="Fri"
                                   name="Fri"
                                   hidden>
                            <label for="Fri" class="information__work-day-item">пт</label>

                            <input class="information__work-day-checkbox" type="checkbox" value="Sat" id="Sat"
                                   name="Sat"
                                   hidden>
                            <label for="Sat" class="information__work-day-item">сб</label>

                            <input class="information__work-day-checkbox" type="checkbox" value="Sun" id="Sun"
                                   name="Sun"
                                   hidden>
                            <label for="Sun" class="information__work-day-item">вс</label>
                        </div>
                    </section>
                </div>
            </div>
            <p class="profile-page__params-label">Прикрепите документы</p>
            <div class="information__file">
                <div class="information__file-wrapper">
                    <label for="file-profile" class="information__file-label">Прикрепить файл</label>
                    <input type="file" class="information__file-input" hidden id="file-profile" name="file-profile">
                    <div class="add-advert__item-wrapper-load information__file-percent">
                        <p class="add-advert__item-percent">10%</p>
                        <img src="assets/img/gif/load.gif" alt="gif-load" class="add-advert__icon-load-animation">

                    </div>
                </div>
                <ul class="information__file-list">
                    <li class="information__file-item">
                        <svg class="information__file-icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                        Лицензия на производство.doc
                    </li>
                </ul>
            </div>
        </section>
        <section class="information__reliability add-advert">
            <p class="reliability__title">Надежность</p>
            <p class="reliability__description">Расскажите о надежности вашей компании, загрузите файлы и фотографии,
                показывающие надежность и опыт вашей компании, чтобы приобрести доверие новых клиентов.</p>
            <textarea required id="description" name="description" placeholder="Описание о вас"
                      class="profile-page__params-input information__textarea"></textarea>
            <div class="research__search-name">
                <p class="add-advert__label">Загрузите изображение о вашей компании </p>
                <div class="add-advert__list-img">
                    <div class="add-advert__item-img">
                        <label class="add-advert__label-img" for="load-img-1">
                            <svg class="add-advert__icon-load">
                                <use href="assets/img/icons/sprite.svg#load-img"></use>
                            </svg>
                        </label>
                        <input type="file" hidden id="load-img-1">
                    </div>
                    <div class="add-advert__item-img add-advert__item-not-line">
                        <img src="assets/img/minific/image-default-load.jpg" alt="load-img">
                        <svg class="add-advert__icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                    </div>
                    <div class="add-advert__item-img  add-advert__item-not-line">
                        <img src="assets/img/minific/image-default-load.jpg" alt="load-img">
                        <svg class="add-advert__icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                    </div>
                    <div class="add-advert__item-img  add-advert__item-not-line">
                        <img src="assets/img/minific/image-default-load.jpg" alt="load-img">
                        <svg class="add-advert__icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                    </div>
                    <div class="add-advert__item-img add-advert__item-load">
                        <div class="add-advert__item-wrapper-load">
                            <img src="assets/img/gif/load.gif" alt="gif-load"
                                 class="add-advert__icon-load-animation">
                            <p class="add-advert__item-percent">10%</p>
                        </div>
                    </div>
                    <div class="add-advert__item-img add-advert__item-load">
                        <div class="add-advert__item-wrapper-load">
                            <img src="assets/img/gif/load.gif" alt="gif-load"
                                 class="add-advert__icon-load-animation">
                            <p class="add-advert__item-percent">100%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add-advert__links">
                <p class="add-advert__label">Прикрепите ссылку на видео с YouTube</p>
                <div class="seller__ref-wrapper add-advert__ref-wrapper">
                    <input type="text" class="seller__ref add-advert__input-link" id="youtube1"
                           value="https://www.youtube.com...">
                    <svg class="add-advert__btn  add-advert__icon-block  add-advert__icon-block--red add-advert__icon-block--delete add-advert__icon-delete--red"
                         id="btn-copy">
                        <use href="assets/img/icons/sprite.svg#delete "></use>
                    </svg>
                </div>
                <div class="seller__ref-wrapper add-advert__ref-wrapper">
                    <input type="text" class="seller__ref add-advert__input-link" placeholder="Введите ссылку"
                           id="youtube1">
                    <i class="add-advert__btn  add-advert__icon-block  add-advert__icon-block--green add-advert__icon-delete--green fas fa-plus"></i>

                </div>
            </div>
            <p class="profile-page__params-label">Прикрепите документы</p>
            <div class="information__file reliability__file-wrapper">
                <div class="information__file-wrapper">
                    <label for="file-profile" class="information__file-label">Прикрепить файл</label>
                    <input type="file" class="information__file-input" hidden id="file-profile" name="file-profile">
                    <div class="add-advert__item-wrapper-load information__file-percent">
                        <p class="add-advert__item-percent">10%</p>
                        <img src="assets/img/gif/load.gif" alt="gif-load" class="add-advert__icon-load-animation">

                    </div>
                </div>
                <ul class="information__file-list">
                    <li class="information__file-item">
                        <svg class="information__file-icon-delete">
                            <use href="assets/img/icons/sprite.svg#delete"></use>
                        </svg>
                        Лицензия на производство.doc
                    </li>
                </ul>
            </div>
            <div class="add-advert__submit-wrapper">
                <div class="add-advert__submit">
                    <input type="checkbox" hidden class="add-advert__checkbox" name="documents" id="documents">
                    <label class="add-advert__label  add-advert__label--submit add-advert__price-check"
                           for="documents"></label>
                    <p class="add-advert__document-text">Я соглашаюсь с <a href="#" class="add-advert__link">условиями
                            подачи документов</a></p>
                </div>
                <a href="#" class="seller__btn-message seller__btn-message--advert add-advert__btn-submit">
                    Сохранить
                </a>
            </div>
        </section>

    </form>
</section>