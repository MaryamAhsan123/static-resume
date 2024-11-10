var togglebutton = document.getElementById('skills');
var keyskills = document.getElementById('sList');
togglebutton.addEventListener('click', function () {
    if (keyskills.style.display === 'none') {
        keyskills.style.display = 'block';
    }
    else {
        keyskills.style.display = 'none';
    }
});
