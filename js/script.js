const video = document.getElementById('custom-video');
const btnPlayPause = document.getElementById('playpause');
const controls = document.getElementById('controls');

btnPlayPause.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        controls.style.opacity = "0.5";
    } else {
        video.pause();
        controls.style.opacity = "1";
    }
})
// modal
const btnsOrder= document.querySelectorAll('.item-card_btn');
const btnClose = document.querySelector('.close_btn');
const modal = document.querySelector('.modal_block');
const modalShow = document.querySelector('.visible-modal');

btnsOrder.forEach((btn) => {
    btn.addEventListener('click', function () {
        modal.classList.add('visible-modal');
    });
    btnClose.addEventListener('click', function () {
        modal.classList.remove('visible-modal');
    });
});

// validate form
const user = document.querySelector('.user');
const phoneNuber = document.querySelector('.phone');
const form = document.querySelector('.modal-form');

function validate(reg, inp) {
    return reg.test(String(inp));
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const validateTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const validateName = /([a-zA-Z]{2,20})/;
    if (validate(validateTel, phoneNuber.value)) {
        phoneNuber.classList.remove('no-valid');
        phoneNuber.classList.add('valid');
    } else {
        phoneNuber.classList.add('no-valid');
    }
    if (validate(validateName, user.value)) {
         user.classList.remove('no-valid');
         user.classList.add('valid');
    } else {
         user.classList.add('no-valid');
    }
}); 