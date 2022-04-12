//GATHERING USER'S MAIL AND CHECK THE ACCESS LIST + PRINT THE RESULT

// - GIVEN
// 1. Asking user's mail
const accessList = ["sarlinicola7@gmail.com", "sarlinicola23@gmail.com", "nonverraiaccettato@gmail.com", "nonsopiuchemettere@gmail.com"];
console.log(accessList);

const userMail = prompt('Scrivi qui la tua email');
console.log(userMail);

// - ELABORATION
// 2. Check the access list 
let userOnList = false;
for (let i = 0; i < accessList.length; i++) {
    const thisMail = accessList[i];
    if (thisMail === userMail) {
        userOnList = true;
    }
}

console.log("La tua mail é presente nella lista?",userOnList);

// - OUTPUT
// 3. Print the result
if (userOnList === true) {
    alert("Sei presente nella lista, benvenuto nel club!");
} else if (userOnList === false) {
    alert("La tua email non é presente nella nostra esclusiva lista d'accesso, ritenta sarai più fortunato!");
}