const randomPassword = document.getElementById("Password")
const passLength = 12
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase ="abcdefghijklmnopqrstuvwxyz"
const number ="1234567890"
const symbol="!@#$%^&*()<>+-~/?"
const allChar = upperCase+lowerCase+number+symbol

function createPassword()
{
    let password = "";
    password+=upperCase[Math.floor(Math.random() * upperCase.length)]
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password+=number[Math.floor(Math.random() * number.length)]
    password+=symbol[Math.floor(Math.random() * symbol.length)]
   
    while(passLength > password.length)
        {
            password+=allChar[Math.floor(Math.random() * allChar.length)]
        }
        randomPassword.value = password
}


function copyPassword()
{
    randomPassword.select()
    document.execCommand('copy')
}