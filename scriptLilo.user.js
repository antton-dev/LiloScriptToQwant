// ==UserScript==
// @name         Lilo Qwant Redirection
// @namespace    https://github.com/antton-dev/LiloScriptToQwant
// @version      1.1.1
// @description  Change la redirection vers un autre moteur de recherche.
// @updateURL    https://raw.githubusercontent.com/antton-dev/LiloScriptToQwant/main/scriptLilo.user.js
// @downloadURL  https://raw.githubusercontent.com/antton-dev/LiloScriptToQwant/main/scriptLilo.user.js
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

    const newLinkToQwantMaps = "https://www.qwant.com/maps/?q=" + query

    const redirectLinkToMaps = document.querySelector('.menu-maps a');
    redirectLinkToMaps.textContent = 'Qwant Maps';
    redirectLinkToMaps.removeAttribute("onclick");
    redirectLinkToMaps.removeAttribute("title");
    redirectLinkToMaps.removeAttribute("href");
    redirectLinkToMaps.setAttribute('title', 'Tentez votre chance avec Qwant Maps!');
    redirectLinkToMaps.setAttribute('href', newLinkToQwantMaps);
    redirectLinkToMaps.setAttribute('target', '_blank');

})();
