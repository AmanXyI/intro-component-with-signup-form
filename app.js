const submitBtn=document.querySelector('.submit-btn')
const fNameInput=document.querySelector('#firstName')
const lNameInput=document.querySelector('#lastName')
const emailInput=document.querySelector('#emailAddress')
const passInput=document.querySelector('#password')

const fNameError=document.querySelector('#firstNameError')
const lNameError=document.querySelector('#lastNameError')
const emailError=document.querySelector('#emailError')
const passwordError=document.querySelector('#passwordError')

const inputAr=document.querySelectorAll('.input-area')
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(fNameInput.value===''){
        fNameInput.classList.add('active')
        fNameError.style['z-index']="10"
    }
    if(lNameInput.value===''){
        lNameInput.classList.add('active')
        lNameError.style['z-index']="10"
    }
    if(emailInput.value===''){
        emailInput.classList.add('active')
        emailError.style['z-index']="10"
    }
    if(passInput.value===''){
        passInput.classList.add('active')
        passwordError.style['z-index']="10"
    }
})

inputAr.forEach((item)=>{
    item.addEventListener('input',(e)=>{
        e.target.classList.remove('active')
        const id=`${e.target.dataset.id}Error`
        const element=document.getElementById(id)
        element.style['z-index']='-10'
    })
})




