function flip() {    
    Array.prototype.slice.call(document.querySelectorAll('body')).map(function(tag){tag.style['transform'] = 'rotate(' + 180 +'deg)';});
    var fieldNameElement = document.getElementById('flip');
    fieldNameElement.onclick = function () { unflip() };
}
function unflip() {    
    Array.prototype.slice.call(document.querySelectorAll('body')).map(function(tag){tag.style['transform'] = 'rotate(' + 0 +'deg)';});
    var fieldNameElement = document.getElementById('flip');
    fieldNameElement.onclick = function () { flip() };
}