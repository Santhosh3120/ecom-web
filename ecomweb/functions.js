const form= document.getElementById('form');
const userName= document.getElementById('userName');
const userEmail= document.getElementById('userEmail');

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInput();
});
 function checkInput(){
    const userNameValue = userName.Value.trim();
    const userEmailValue = userEmail.Value.trim();
    if(userEmailValue===""){
        setError(userName,'username can not be blank');
    }
    else{
        setSucess(userName,'username is correct')
    }
   
 }
 function setError(){
    const formControl=input.praentElement;
    const small=formControl.query
 }

 









