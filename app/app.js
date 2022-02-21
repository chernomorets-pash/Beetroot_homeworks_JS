// Scripts of visual part so on. 
// closing the window by pushing red button
let windowsCloser = document.querySelector('.js-wrapper');
let btnCloser = document.querySelector('#exit__btn');
let binBtn = document.getElementById('binBtn');
btnCloser.addEventListener('click', function () {
    windowsCloser.classList.toggle('window-hide')
    windowsCloser.classList.remove('window-show')
});
binBtn.addEventListener('click', () => {
    windowsCloser.classList.toggle('window-show')
    windowsCloser.classList.remove('window-hide')
});