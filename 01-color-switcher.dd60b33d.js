!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=null;function r(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){o=setInterval(r,1e3),e.setAttribute("disabled","disabled")})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.dd60b33d.js.map