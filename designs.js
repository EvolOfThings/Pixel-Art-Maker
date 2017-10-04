// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

makeGrid = () => {

console.log("Success");

}

// assigning variables for input fields

const heightGrid = $('#input_height');
const widthGrid = $('#input_width');
const colorPicked = $('#colorPicker');


// To grab the values

let heightValue = heightGrid.val();
let widthValue =  widthGrid.val();

let colorValue = colorPicked.val();


$('#sizePicker').on("submit", function(event){
  console.log(`height: ${heightValue} and width: ${widthValue}`);
  makeGrid();
  event.preventDefault(); // stops page from refreshing upon submit
});


// heightGrid.keypress(function(){
// console.log(`The value selected for height is ${heightValue}`);
// });

// widthGrid.keypress(function(){
// console.log(`The value selected for width is ${widthValue}`);
// });
