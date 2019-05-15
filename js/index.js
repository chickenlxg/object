function showDiv() {  
	document.getElementById('popWindow').style.display = 'block';  
	document.getElementById('maskLayer').style.display = 'block';        
}  
function closeDiv() {  
	document.getElementById('popWindow').style.display = 'none';  
	document.getElementById('maskLayer').style.display = 'none';  
}  
    (function (doc, win) {
        var docEl = doc.documentElement;
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    }(document,window));
