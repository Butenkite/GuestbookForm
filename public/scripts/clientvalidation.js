document.getElementById('guestbook-form').onsubmit = validate;

function validate() {
    clearerror();
    let first_name = document.getElementById('fname').value.trim();
    let last_name = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();
    let job = document.getElementById('job').value.trim();
    let company = document.getElementById('company').value.trim();
    let linkedin = document.getElementById('linkedin').value.trim();
    let how_meet = document.getElementById('how_meet').value.trim();
    let flag = true;

    if (first_name === '') {
        document.getElementById('err-first_name').style.display = 'block';
        flag = false;
    }

    if (last_name === '') {
        document.getElementById('err-last_name').style.display = 'block';
        flag = false;
    }

    if (last_name === '') {
        document.getElementById('err-last_name').style.display = 'block';
        flag = false;
    }

    if (job === '') {
        document.getElementById('err-job').style.display = 'block';
        flag = false;
    }

    if (company === '') {
        document.getElementById('err-company').style.display = 'block';
        flag = false;
    }

    if (linkedin === '') {
        document.getElementById('err-linkedin1').style.display = 'block';
        flag = false;
    }

    if (linkedin.indexOf('.') === -1) {
        document.getElementById('err-linkedin2').style.display = 'block';
        flag = false;
    }

    if (email === '') {
        document.getElementById('err-email1').style.display = 'block';
        flag = false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        document.getElementById('err-email2').style.display = 'block';
        flag = false;
    }

    if (!how_meet === 'work' || !how_meet === 'event' || !how_meet === 'fair' || !how_meet === 'school' || !how_meet === 'mutual') {
        document.getElementById('err-how_meet').style.display = 'block';
        flag = false;
    }

    return flag;
}

function clearerror(){
    let errors = document.getElementsByClassName('err');
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }
}