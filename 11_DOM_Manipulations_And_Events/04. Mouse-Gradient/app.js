function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', function (event) {
        let position = event.offsetX;
        let gradientWidth = event.target.offsetWidth;

        let result = Math.trunc(position / gradientWidth * 100);

        document.getElementById('result').textContent = result + "%";
    });
}

// function attachGradientEvents() {
//     let gradient = document.getElementById('gradient');
//     gradient.addEventListener('mousemove', gradientMove);
//     gradient.addEventListener('mouseout', gradientOut);
//     function gradientMove(event) {
//       let power = event.offsetX / (event.target.clientWidth - 1);
//       power = Math.trunc(power * 100);
//       document.getElementById('result').textContent = power + "%";
//     }
//     function gradientOut(event) {
//       document.getElementById('result').textContent = "";
//     }
//   }
  