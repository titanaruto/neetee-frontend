<?php include "header.php"; ?>
    <section class="seller">
        <div class="seller__banner">
            <picture>
                <source media="(max-width: 586px)" type="image/jpg"
                        data-srcset="assets/img/minific/mob-seller.jpg"
                        srcset="assets/img/minific/mob-seller.jpg">
                <source media="(min-width: 1170px)" type="image/jpg"
                        data-srcset="assets/img/minific/pc-seller.jpg"
                        srcset="assets/img/minific/pc-seller.jpg">
                <img src="assets/img/minific/pc-seller.jpg" alt="project-8"
                     class="seller__img">
            </picture>
        </div>
        <div class="seller__container">
            <nav class="seller__nav">
                <?php
                if (empty($_GET["id"])) {
                    $active = "magazine";
                } else {
                    $id = htmlspecialchars($_GET["id"]);
                    $active = $id;
                } ?>
                <ul class="seller__menu">
                    <li class="seller__item <?php if ($active == "magazine") {
                        echo "seller__item--active";
                    } ?> "><a href="?id=magazine" data-id="magazine"
                              class="seller__link <?php if ($active == "magazine") {
                                  echo "seller__link--active";
                              } ?>">Магазин</a>
                    </li>
                    <li class="seller__item <?php if ($active == "about") {
                        echo "seller__item--active";
                    } ?>"><a href="?id=about"
                             data-id="about"
                             class="seller__link <?php if ($active == "about") {
                                 echo "seller__link--active";
                             } ?>">О нас</a>
                    </li>
                    <li class="seller__item <?php if ($active == "reliability") {
                        echo "seller__item--active";
                    } ?>"><a href="?id=reliability" data-id="reliability"
                             class="seller__link <?php if ($active == "reliability") {
                                 echo "seller__link--active";
                             } ?>">Надежность</a>
                    </li>
<!--                    <li class="seller__item --><?php //if ($active == "vip") {
//                        echo "seller__item--active";
//                    } ?><!--"><a href="?id=vip" data-id="vip"-->
<!--                             class="seller__link --><?php //if ($active == "vip") {
//                                 echo "seller__link--active";
//                             } ?><!--">Для Pro-партнеров</a>-->
<!--                    </li>-->

                </ul>
            </nav>
        </div>
        <section class="seller__tabs seller__container-tabs">
            <h3 class="seller__title">Tihnology group NIX</h3>
            <?php include_once "pages/tabs/$active.php"; ?>
        </section>
    </section>
<?php include "footer.php"; ?>