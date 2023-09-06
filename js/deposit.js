/*
1. add event listener to deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit amount to a number type 
3.clear the deposit input field after getting the value
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
6. get current balance total
7. calculate the new balance and set it to balance total element
*/ 

// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2
   const depositField = document.getElementById('deposit-field');
   const newDepositAmount = parseFloat(depositField.value);
    // step-3
   depositField.value = '';
    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText)

    // step-5
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = newDepositTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalAmount = parseFloat(balanceTotalElement.innerText);
    
    // step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositTotal;
    
    balanceTotalElement.innerText = newBalanceTotal;
    
})