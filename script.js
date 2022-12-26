//Set a timer to turn on marry-you image
const timer = () => {
    setTimeout(() => {
        document.getElementsByClassName('marry-you')[0].style.display = "block";
    }, "10000");
};

timer();


// Wait for user to close image then show it again after certain amount of time
const marryPicture = document.querySelector('.marry-you');

marryPicture.addEventListener('click', function () {
    if (document.getElementsByClassName('marry-you')[0].style.display == 'block') {
        document.getElementsByClassName('marry-you')[0].style.display = 'none';
    }

    timer();
});