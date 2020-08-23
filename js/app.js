let preBtn= document.querySelector('.before');
let nextBtn = document.querySelector('.after');
let pageItem = document.querySelectorAll('.page-item');
let current = 0;

nextBtn.onclick = function () {
    current = current +1;
    if (current >= pageItem.length) {
        current = 0;
    }
    renderPage();
}

preBtn.onclick = function () {
    current = current -1;
    if (current <0) {
        current = pageItem.length -1;
    }
    renderPage();
}

function renderPage() {
    pageItem.forEach(function(item,i) {
        item.classList.remove("active");
    })
    pageItem[current].classList.add("active");
}