import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebP();

/* global vars */

let prdk_topIcon = {position: true}

/* next Working */
jQuery(function($) { // start jQuery

    // кнопка плей в шапці
    $(".topBlock__playIcon-icon").on('click', function () {
        flsFunctions.changeIcon('bi bi-play', 'bi bi-stop', '#btnPlay', prdk_topIcon)
    });


}); // end jQuery

