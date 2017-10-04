// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

makeGrid = () => {
  const pixelCanvas = $('#pixel_canvas');
  const heightValue = $('#input_height').val();
  const widthValue = $('#input_width').val();
  pixelCanvas.innerText = ""; //empty table


  for (let h = 0; h < heightValue; ++h) {
    const row = pixelCanvas.insertRow(-1);
  for (let w = 0; w < widthValue; ++w) {
      const cell = row.insertCell(-1);
      cell.onclick = changeColor;
    }
  }
  event.preventDefault(); // stops page from refreshing upon submit
}


changeColor = () => {
  const color = $('#colorPicker').val();
  this.style.background = color;
}















// $('#sizePicker').on("submit", function(event){
//   console.log(`height: ${heightValue} and width: ${widthValue}`);
//   makeGrid();
//   event.preventDefault(); // stops page from refreshing upon submit
// });

