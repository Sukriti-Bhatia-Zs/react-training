const input=document.querySelector("#inputfield");
const submit=document.querySelector("#submit")
const displaydiv=document.querySelector(".displaying")

console.log(input);

const handlesubmit=()=>{
    const value=input.value.trim();

    displaydiv.innerText=value;
    console.log('--------learning git---------')
}

submit.addEventListener("click",handlesubmit);