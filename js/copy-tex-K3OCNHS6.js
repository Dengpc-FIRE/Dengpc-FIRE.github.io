import"./chunk-GOF42GBU.js";var v={inline:["$","$"],display:["$$","$$"]};function m(t,e){e===void 0&&(e=v);for(var i=t.querySelectorAll(".katex-mathml + .katex-html"),n=0;n<i.length;n++){var a=i[n];a.remove?a.remove():a.parentNode&&a.parentNode.removeChild(a)}for(var c=t.querySelectorAll(".katex-mathml"),o=0;o<c.length;o++){var l=c[o],r=l.querySelector("annotation");r&&(l.replaceWith?l.replaceWith(r):l.parentNode&&l.parentNode.replaceChild(r,l),r.innerHTML=e.inline[0]+r.innerHTML+e.inline[1])}for(var h=t.querySelectorAll(".katex-display annotation"),p=0;p<h.length;p++){var d=h[p];d.innerHTML=e.display[0]+d.innerHTML.substr(e.inline[0].length,d.innerHTML.length-e.inline[0].length-e.inline[1].length)+e.display[1]}return t}function s(t){var e=t instanceof Element?t:t.parentElement;return e&&e.closest(".katex")}document.addEventListener("copy",function(t){var e=window.getSelection();if(!(e.isCollapsed||!t.clipboardData)){var i=t.clipboardData,n=e.getRangeAt(0),a=s(n.startContainer);a&&n.setStartBefore(a);var c=s(n.endContainer);c&&n.setEndAfter(c);var o=n.cloneContents();if(o.querySelector(".katex-mathml")){var l=Array.prototype.map.call(o.childNodes,r=>r instanceof Text?r.textContent:r.outerHTML).join("");i.setData("text/html",l),i.setData("text/plain",m(o).textContent),t.preventDefault()}}});/*! For license information please see copy-tex-K3OCNHS6.js.LEGAL.txt */
