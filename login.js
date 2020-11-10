"use strict";

const signIn=document.getElementById("signin");
const signUp=document.getElementById("signup");
const noSignIn=document.getElementById("nosignin");
const bttn=document.getElementById("bttn");

function toggleCells(){
    noSignIn.addEventListener("click", function(){
        if (signUp.style.display==="none"){
            signUp.style.display="none";
        }else{
            signUp.style.display="block";
        }   
    })
    hideCells();   
};
toggleCells();

function hideCells(){
    noSignIn.addEventListener("click", function(){
        if(signIn.style.display==="block"){
            signIn.style.display="block";
        }else{
            signIn.style.display="none";
        }
    })
    
};