function getTotal() {
    // declare VARIABLES
    const ADMIN_FEE = 50.00;
    const TICKET_PRICE = 250.00;

    let qty = document.getElementById("qty1").value;
    let subTotal = qty * TICKET_PRICE;
    let total = subTotal + ADMIN_FEE;


    document.getElementById("subt1").value = subTotal.toFixed(2);
    document.getElementById("adminf").value = ADMIN_FEE.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("outcome").innerText = "Your total is: P" + total.toFixed(2);
}