//debouncing
let timeout;
function debouncePopulateDiv() {
  //u have to call populateDiv if not called for 100ms
  clearTimeout(timeout); //if any clock running stop the old clock and start a  new clock
  timeout = setTimeout(function () {
    populateDiv();
  }, 1000);
}

function populateDiv() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;
  const element = document.getElementById("finalSum");
  // console.log(element);
  //element.innerHTML = parseInt(a) + parseInt(b);
  fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b).then(
    function (response) {
      //console.log(response);
      response.text().then(function (ans) {
        //console.log(ans);
        element.innerHTML = ans;
      });
    }
  );
  //console.log(res);
}
async function populateDiv2() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;
  const element = document.getElementById("finalSum");
  const response = await fetch(
    "https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b
  );
  const ans = await response.text();
  element.innerHTML = ans;
}
