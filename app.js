let by = document.getElementById('de-po1');
let by2 = document.getElementById('ba-la1');
let by3 =document.getElementById ('wi-th1');
let depositebalance = 0;
let totalbalance = 0;
let withdrawbalance = 0;


function deposit() {
input = document.getElementById('inp').value;
let inValue = parseInt(input);
depositebalance += inValue;
totalbalance += inValue;
by.textContent = `$${depositebalance}`;
by2.textContent = `$${totalbalance}`;
}

function withdraw() {
input = document.getElementById('inp').value;
let inValue = parseInt(input);
if (inValue > totalbalance) {
    alert("Are you fucking Crazy! You Are a GORIB. Saty low now.");
    return;
}
withdrawbalance += inValue;
totalbalance -=inValue;
by2.textContent = `$${totalbalance}`;
by3.textContent= `$${withdrawbalance}`;

}