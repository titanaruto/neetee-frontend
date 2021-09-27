<?php include "header.php"; ?>
<div class="profile-page__container container">
    <nav class="profile-page__nav">
        <?php
        if (empty($_GET["id"])) {
            $active = "account";
        } else {
            $id = htmlspecialchars($_GET["id"]);
            $active = $id;
        } ?>
        <ul class="profile-page__menu">
            <li class="profile-page__item <?php if ($active == "account") {
                echo "profile-page__item--active";
            } ?> "><a href="?id=account" data-id="account"
                      class="profile-page__link <?php if ($active == "account") {
                          echo "profile-page__link--active";
                      } ?>">Аккаунт</a>
            </li>
            <li class="profile-page__item <?php if ($active == "information") {
                echo "profile-page__item--active";
            } ?>"><a href="?id=information"
                     data-id="information"
                     class="profile-page__link <?php if ($active == "information") {
                         echo "profile-page__link--active";
                     } ?>">Информация о вас</a>
            </li>
            <li class="profile-page__item <?php if ($active == "security") {
                echo "profile-page__item--active";
            } ?>"><a href="?id=security" data-id="security"
                     class="profile-page__link <?php if ($active == "security") {
                         echo "profile-page__link--active";
                     } ?>">Безопасность</a>
            </li>
        </ul>
    </nav>
</div>
<section class="profile-page__tabs main container">
    <?php include_once "pages/tabs/$active.php"; ?>
</section>
<?php include "footer.php"; ?>
