/* Функція JS для визначення підтримки WebP */
export function isWebP() {
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

// змінити елемент при клікі на елемент
export function changeIcon (class1, class2, element, countObj)
{
    let position = countObj.position;
    if (position)
    {
        $(element).attr('class', class2);
        $('.TopBntMusic')[0].play();
        countObj.position = false;
    }
    else
    {
        $(element).attr('class', class1);
        $('.TopBntMusic')[0].pause();
        countObj.position = true;
    }
}