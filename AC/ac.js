var  cleaning = document.getElementById('cleaning');
var  repair = document.getElementById('repair');
var gas = document.getElementById('gas');
var relocation = document.getElementById('relocation');
var  filter = document.getElementById('filter');
var maintenance = document.getElementById('maintenance');

function btnclick(event) {
    const checkbox = [cleaning, repair, gas, relocation, filter];
    var checkcount=0
    var amount = 0;
    event.preventDefault();
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            amount += parseInt(checkbox[i].value);
            checkcount = checkcount+1
        }
    }
    if (maintenance.check) {
        amount += 600;
    }
    document.getElementById('result').innerHTML = 'Total Estimate cost: ' + amount + "/-";
}