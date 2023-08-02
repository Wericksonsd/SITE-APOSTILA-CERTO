import React from 'react';


function menubarSticky(){
        var menubar = document.getElementById("menubar");
        var sticky = menubar.offsetTop;

        
          if (window.scrollY >= sticky){
              menubar.classList.add("sticky");
          } else {
              menubar.classList.remove("sticky"); 
          }
        
      }

export default menubarSticky