windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log(windowWidth + 'x' + windowHeight);

let resizeTimer;

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        console.log(windowWidth + 'x' + windowHeight);
        if (windowWidth < 1000) {
            document.getElementById('nav-list').style.display = 'none';
            console.log('Window is thinner than 1000px, default to hiding nav-links');
        }
        else {
            document.getElementById('nav-list').style.display = 'inherit';
            console.log('Window is wider than 1000px, default to showing nav-links');
        }
    }, 100);
}

function toggle_nav_visibility(id) {
    let element = document.getElementById(id);

    if(element.style.display == 'inherit') {
        element.style.display = 'none';
        console.log('Hiding');
    }
    else {
        element.style.display = 'inherit';
        console.log('Showing');
    }
}
