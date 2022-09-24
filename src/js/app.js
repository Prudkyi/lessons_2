import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebP();

/* global vars */

/* next Working */
jQuery(function($) { // start jQuery

    function getFileExtension(name)
    {
        let found = name.lastIndexOf('.') + 1;
        return (found > 0 ? name.substr(found) : "");
    }

    $('.modalWindows__content__files a').each(function(i,elem) {
        let elClass = $(this).attr('href');
        let resultEx = getFileExtension(elClass);
        if (resultEx == "png" || resultEx == "jpg" || resultEx == "jpeg" || resultEx == "gif")
        {
            $(this).addClass('prdk_icon_img');
        }
        else if (resultEx == 'pdf')
        {
            $(this).addClass('prdk_icon_pdf');
        }
        else {
            $(this).addClass('prdk_icon_file');
        }
    });


}); // end jQuery




