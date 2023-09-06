/*
1. add event handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get previous withdraw total
5. calculate total withdraw amount and set it to the withdraw total element
6. get previous balance
7. calculate new balance and set it to the balance total element
*/ 


// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    // step-3
    withdrawField.value = '';
  
    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithTotal = parseFloat(withdrawTotalElement.innerText);

    // step-5
    const newWithdrawTotal = newWithdrawAmount + previousWithTotal;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})