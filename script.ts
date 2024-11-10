
const togglebutton= document.getElementById('skills') as HTMLButtonElement
const keyskills= document.getElementById('sList') as HTMLElement

togglebutton.addEventListener('click' ,() =>{

if (keyskills.style.display === 'none')
{
    keyskills.style.display= 'block'
}
else {
    keyskills.style.display = 'none'
}

});

