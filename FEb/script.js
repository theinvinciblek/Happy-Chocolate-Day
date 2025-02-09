function createHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        document.body.appendChild(heart);
    }
}
createHearts();

function nextPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}