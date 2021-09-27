let slide = document.getElementById('slide');
let up = document.getElementById('up');
let down = document.getElementById('down');
let count = document.getElementById('slide').childElementCount - 1;

let x = 0;

// down.onclick = function() {
//     if (x > "-1200") {
//         x = x - 300;
//         slide.style.top = x + 'px';
//     }
// }
// up.onclick = function() {
//     if (x < 0) {
//         x = x + 300;
//         slide.style.top = x + 'px';
//     }
// }

down.onclick = function() {
    if (x > -(count * 300)) {
        x = x - 300;
        slide.style.top = x + 'px';
    }
}
up.onclick = function() {
    if (x < count * 0) {
        x = x + 300;
        slide.style.top = x + 'px';
    }
}