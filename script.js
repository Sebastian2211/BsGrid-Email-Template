//Set a timer to turn on marry-you image
const timer = () => {
    setTimeout(() => {
        document.getElementsByClassName('marry-you')[0].style.display = "block";
    }, "20000");
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

function myFunction() {
    var x = document.getElementById("emails-text2");
    if (x.innerHTML === "Hello") {
        x.innerHTML = "Click on the damn link now. You want fortnite 2 don't you?";
      } else {
        x.innerHTML = "Hello";
      }

}