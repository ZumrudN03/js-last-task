
function credit() {
  let money = parseInt((prompt("pulu daxil edin")));
  let month = parseInt((prompt("ayi daxil edin")));

  let qaliq = money % month;
  let pul = money - qaliq;
  let ayliq_odenis = pul / month;
  
  for (let i = 1; i <= month; i++) {
    let odenis=ayliq_odenis
      if (i===month) {
        odenis+=qaliq
      }
      console.log(i + "-ci ay: " + odenis+" azn");
  }

}  
credit();

