function Sum(){
  var amount = document.getElementById(' mebleg').value; 
  var interest = document.getElementById('Illik faiz').value;
  var month = document.getElementById('Muddet').value;

  document.getElementById("mebleg").innerHTML = amount + " AZN" ;
  document.getElementById("mebleg").style.color = 'red'

  document.getElementById("illik").innerHTML = interest + " %";
  document.getElementById("illik").style.color = 'red'
  document.getElementById("muddet").innerHTML = month + " Month";
  document.getElementById("muddet").style.color = 'red'

  var  Umumimebleg = (mebleg * faiz)/100 + Number(mebleg)
  document.getElementById('umumimebleg').innerHTML = umumimebleg + " AZN";

  var Ayliqodenis = ((mebleg*(illik/100)) + Number(mebleg))/ay;
  document.getElementById('ayliq odenis').innerHTML=monthlyPayment.toFixed(2) + " AZN";

  var Illikfaiz = (mebleg *illik)/100
  document.getElementById('illik1').innerHTML = totalInterest + " AZN";


}
