function calculateBill() {

    let bill = Number(document.getElementById("bill").value);
    let people = Number(document.getElementById("people").value);
    let tip = Number(document.getElementById("tip").value);

    if (bill <= 0 || people <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid values.";
        return;
    }

    let tipAmount = bill * tip / 100;
    let totalBill = bill + tipAmount;
    let eachPerson = totalBill / people;

    document.getElementById("result").innerHTML =
        "Total Bill: ₹" + totalBill.toFixed(2) +
        "<br>Each Person Pays: ₹" + eachPerson.toFixed(2);
}