import React from 'react';

function Menubar(){
    window.scroll = function() {menubarScroll()};
    var menubar = document.getElementById("menubar");
    var sticky = menubar.offsetTop;

    function menubarScroll(){
        
    }
}