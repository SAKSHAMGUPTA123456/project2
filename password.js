let type=document.getElementById('first')
let q=document.getElementById('second')
let er=document.getElementById('btns')
let hacker2=document.getElementById('btns2')
let hacker1=document.getElementById('testing1')
let a="your password should contain 1 special characters 3 numbers to make it strong"

const checking=(alphabet)=>{
    console.log(alphabet)
let aplhabets=0;
let special=0;
let number=0;
if(alphabet.length<8){
    type.style.border="1px solid red"
    hacker1.innerText=`${a}`
    writeagain(alphabet);
}
for(let i=0;i<alphabet.length;i++){

    if(alphabet[i]=='&' || alphabet[i]=='@'){
        special++;
    }
    if(alphabet[i]>='0' && alphabet[i]<='9'){
        number++;
    }
    if(alphabet[i]>='a' && alphabet[i]<='z'){
        aplhabets++;
    }
}
if(special<1){
    hacker1.innerText=`${a}`
    type.style.border="1px solid red"
    writeagain(alphabet)
}
if(number<3){
    hacker1.innerText=`${a}`
    type.style.border="1px solid red"
    writeagain(alphabet)
}
if(special>=1 && number>=3 && alphabet.length>=8){
    alert("write again password that you had written and change password")
    type.style.border="2px solid green"
    hacker1.innerText=""
    er.onclick=()=>{
        if(q.value!=""){
        nextinput();
        }
    }
  
}

}
const writeagain=(op)=>{
let ter=op;
hacker2.onclick=()=>{
    checking(type.value);
}


}
writeagain("ab")
const nextinput=()=>{
    let e=q.value;
    let ee=type.value
    if((ee.length>e.length || ee.length<e.length) && q.value!=""){
        alert("password does not match new password") 
    }
    else{
    for(var i=0;i<=ee.length;i++){
        if(i==ee.length && q.value!=""){
            alert("your password is successfully changed");
            type.value=""
q.value=""
type.style.border="1px solid black"
            break;
        }
        if(ee[i]!=e[i] && q.value!=""){
            alert('password does not match new password')
        }
    }
    }
  
}
