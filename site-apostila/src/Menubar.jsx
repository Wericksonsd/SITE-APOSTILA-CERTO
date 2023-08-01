import React from 'react';


function menubarSticky(){
        window.scroll = function() {menubarScroll()};
        var menubar = document.getElementById("menubar");
        var sticky = menubar.offsetTop;

        function menubarScroll(){
          if (window.scrollY >= sticky){
              menubar.classList.add("sticky");
          } else {
              menubar.classList.remove("sticky"); 
          }
        }
      }

export default menubarSticky