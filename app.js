const Amountinput = document.querySelector("#Amount");
const customtipinput = document.querySelector("#custom");
const personinput = document.querySelector("#person");
const everbtn = document.querySelector("#container");
const Generat = document.querySelector(".gen-bill");
const TipAmount = document.querySelector("#tip-amount");
const Total = document.querySelector("#total");
const Eachpeople = document.querySelector("#each-bill");
const Btn = document.querySelector(".btn");
const Reset = document.querySelector("#reset");



let tipPercentage = 0;

Generat.addEventListener("click", () => {
    const billamount = parseInt(Amountinput.value);
    const customtipamount = parseInt(customtipinput.value);
    const personNumber = parseInt(personinput.value);

    const tipamount = billamount * (tipPercentage / 100)

    const totalamount = billamount + tipamount;

    const eachperson = totalamount / personNumber;

    Total.innerText = `Rs.${totalamount}`;
    TipAmount.innerText = `Rs.${tipamount}`;
    Eachpeople.innerText = `Rs.${eachperson}`;

})

everbtn.addEventListener("click", (e) => {
    if(e.target !== everbtn){
       tipPercentage =  parseInt(e.target.innerText);
       [...everbtn.children].forEach((tip)=>{tip.classList.remove("selected")});
       e.target.classList.add("selected");
       tipPercentage = parseInt(e.target.innerText);
       customtipinput.value = '';
    }
})


customtipinput.addEventListener("input", () => {
    tipPercentage = parseInt(customtipinput.value);
    [...everbtn.children].forEach((tip)=>{tip.classList.remove("selected")});
})

Reset.addEventListener("click",() => {
    tipPercentage = undefined;
    Amountinput.value = '';
    customtipinput.value = '';
    personinput.value = '';
    Total.innerText = '';
    TipAmount.innerText = '';
    Eachpeople.innerText = '';
    [...everbtn.children].forEach((tip)=>{tip.classList.remove("selected")});
})