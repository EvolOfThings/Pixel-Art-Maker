// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

makeGrid = () => {



}

let heightGrid = $('#input_height');
let widthGrid =  $('#input_width');

heightGrid.on('keypress', function(e){
console.log(`value changed to ${e}`);
});

widthGrid.on('keypress', function(e){
console.log(`value changed to ${e}`);
});
