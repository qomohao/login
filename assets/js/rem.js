/**
 * rem --  1rem === 100px
 */
window.onload = function () {
    var ohtml = document.getElementsByTagName("html")[0];
    var widthMax = document.documentElement.clientWidth;
    if (widthMax > 750) {
        ohtml.style.fontSize = '100px';
    }
    else {
        ohtml.style.fontSize = (widthMax / 750) * 100 + 'px';
    }
}