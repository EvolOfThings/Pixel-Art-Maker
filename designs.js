// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

makeGrid = () => {



}

// assigning variables for input fields

const heightGrid = $('#input_height');
const widthGrid = $('#input_width');



// To grab the values

let heightValue = heightGrid.val();
let widthValue =  widthGrid.val();

let colorPicked = $('#colorPicker').val();



heightGrid.keypress(function(){
console.log(`The value selected for height is ${heightValue}`);
});

widthGrid.keypress(function(){
console.log(`The value selected for width is ${widthValue}`);
});
