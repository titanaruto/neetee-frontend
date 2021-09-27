<?php
include_once "config/version.php"
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.min.css?ver=<?=$version?>">
    <title>Document</title>
</head>
<body>

<header class="main-header  ">
    <nav class="main-header__nav main-header__nav--login container">
        <img class="main-header__logo" src="img/logo.svg" alt="test">
        <form class="main-header__menu  main-header__menu--show">
            <button class="main-header__btn main-header__btn--login">вход в систему</button>
            <button class="main-header__btn main-header__btn--registration">регистрация</button>
        </form>
        <div class="main-header__authorization ">
            <svg class="main-header__icon main-header__icon--store">
                <use href="assets/img/icons/sprite.svg#home"></use>
            </svg>
            <svg class="main-header__icon main-header__icon--store">
                <use href="assets/img/icons/sprite.svg#store"></use>
            </svg>
            <svg class="main-header__icon main-header__icon--store">
                <use href="assets/img/icons/sprite.svg#cog"></use>
            </svg>
            <div class="main-header__ava">
                <img src="assets/img/minific/ava.png" alt="test">
            </div>
        </div>
    </nav>
    <?php include "pages/forms/form-header.php"; ?>
    <?php include "pages/forms/form-register-return.php"; ?>
</header>
