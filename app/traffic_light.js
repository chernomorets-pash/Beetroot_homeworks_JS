let green = document.querySelector('.green');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let click = document.querySelector('.btn');
let lights = document.querySelectorAll('.light');
let step = 0;
click.addEventListener('click', () => {
    // didnt find solution to add/remove classes, so overwriting styles inside html in this case
    switch (step % 4) {
        case 0:
            lights[0].style.background = '#f94144';
            lights[0].innerHTML = 'stop';
            lights[1].style.background = 'var(--gray-9)';
            lights[2].style.background = 'var(--gray-9)';
            break;
        case 1:
            lights[1].style.background = '#f8961e';
            lights[1].innerHTML = 'prepare';
            lights[2].style.background = 'var(--gray-9)';
            break;
        case 2:
            lights[0].style.background = 'var(--gray-9)';
            lights[1].style.background = 'var(--gray-9)';
            lights[2].style.background = '#90be6d';
            lights[2].innerHTML = 'go!';
            break;
        case 3:
            lights[0].style.background = 'var(--gray-9)';
            lights[1].style.background = '#f8961e';
            lights[1].innerHTML = 'slow';
            lights[2].style.background = 'var(--gray-9)';
            break;
    }
    step++;
})