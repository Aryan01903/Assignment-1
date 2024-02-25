let paymethod="Credit";
switch(paymethod){
    case "Credit":
        console.log("Processing fee is 2%");
        break;
    case "Debit":
        console.log("Processing fee is 1.5%");
        break;
    case "Paypal":
        console.log("Processing fee is 3%");
        break;
    default:
        console.log("Invalid Method");
        break;

}