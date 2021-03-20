// ==UserScript==
// @name         Lilo Qwant Redirection
// @namespace    https://github.com/antton-dev/LiloScriptToQwant
// @version      1.0.0
// @description  Change la redirection vers un autre moteur de recherche.
// @author       AnttonDev
// @match        *https://search.lilo.org/*
// @icon         https://www.lilo.org/wp-content/themes/jarvis_wp/ajans/assets/lilo-logo.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.has('q')
    const query = searchParams.get('q')

    const newLinkToQwant = "https://www.qwant.com/?q=" + query + "&t=web"

    const redirectLink = document.querySelector('.menu-google a');
    redirectLink.textContent = 'Qwant';
    redirectLink.removeAttribute("onclick");
    redirectLink.removeAttribute("title");
    redirectLink.removeAttribute("href");
    redirectLink.setAttribute('title', 'Tentez votre chance avec Qwant !');
    redirectLink.setAttribute('href', newLinkToQwant);
    redirectLink.setAttribute('target', '_blank');


})();