function withdraw(n){
    let withdraw_limit_cash = 5000;
    let withdraw_limit_taptopay = 3000;
    let b = 1
    // b =1
    console.log("Withdrawal type: \n 1 for cash \n 2 for taptopay: \n",b)
    
    if(b==1 && n<= balance && n<=withdraw_limit_cash){
        balance = balance - n;
        return console.log("Withdrawal intiated"+ "\n"+"remaing balance : "+balance);
    }
    else if(b==2 && n<= balance && n<=withdraw_limit_taptopay){
        balance = balance - n;
        return console.log("Withdrawal intiated"+ "\n"+"remaing balance : "+balance);
}
}

function deposit(m){
    balance = balance + m;
    return console.log("Deposit intiated"+ "\n"+"remaing balance : "+balance);
}

let balance = 10000;
console.log("My current balance is:",balance);


let a=1;
console.log("Enter 1 if you want to withdraw and 2 if you want to deposit: ",a);
if (a==1){
    let withdraw_amount = 1000
    console.log(withdraw(withdraw_amount));
}

else if(a==2){
    let deposit_amount= 1500
    console.log(deposit(deposit_amount));
}