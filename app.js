function calcTip() {
    //Assign dropdown values to variables
    let billTotal = document.getElementById("totalBill").value;
    let preTaxTotal = document.getElementById("preTaxBill").value;
    let tipPercent = document.getElementById("tipPercent").value;
    let splitBill = document.getElementById("totalParty").value;
    let tipDecimal;
    let tipAmount;
    let billWithTip;
    let singleBillTotal;
    let singleTipAmount;
    let singleBillNoTip;
    //Convert string to number
    billTotal = parseFloat(billTotal);
    preTaxTotal = parseFloat(preTaxTotal);
    tipPercent = parseFloat(tipPercent);
    splitBill = parseFloat(splitBill);
    //Verify if number
    if (isNaN(billTotal) || isNaN(preTaxTotal) 
        || billTotal <= 0 || preTaxTotal <= 0) {
        alert("Please, enter a valid number!");
    } else {
        //convert tip percent to decimal
        tipDecimal = tipPercent * 0.01;
        //Calculate percentage
        tipAmount = preTaxTotal * tipDecimal;
        //Calculate bill with tip
        billWithTip = billTotal + tipAmount
        //calculate individual bill amount
        singleBillTotal = billWithTip / splitBill;
        //calculate individual tip amount
        singleTipAmount = tipAmount / splitBill;
        //calculate individual bill without tip
        singleBillNoTip = singleBillTotal - singleTipAmount;
        //Fix variable to 2 decimals
        billWithTip = billWithTip.toFixed(2);
        tipAmount = tipAmount.toFixed(2);
        singleBillTotal = singleBillTotal.toFixed(2);
        singleTipAmount = singleTipAmount.toFixed(2);
        singleBillNoTip = singleBillNoTip.toFixed(2);
        //Display output
        document.getElementById("finalFullTotalAmt").innerHTML = 
            "Total bill amount: $" + billWithTip;
        document.getElementById("myBillAmt").innerHTML =
            "My bill amount: $" + singleBillTotal;
        document.getElementById("myPreTip").innerHTML =
            "My pre-tip total: $" + singleBillNoTip;
        document.getElementById("myTipAmt").innerHTML =
            "My tip total: $" + singleTipAmount; };

    console.log("Total bill amount is: " + billWithTip);
    console.log("Total bill without tip " + billTotal);
    console.log("Your full tip amount is " + tipAmount);
    console.log("Individual bill amount is " + singleBillTotal);
    console.log("Individual bill without tip " + singleBillNoTip);
    console.log("individual tip amount is " + singleTipAmount);
}