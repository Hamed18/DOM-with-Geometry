function CalculateTriangleArea(){
// Create a DOM that access the input field in UI to strore the input data
	const TriangleBase = document.getElementById('triangle-base');
	const TriangleHeight = document.getElementById('triangle-height');
	const Area = 0.5*parseFloat(TriangleBase.value)*parseFloat(TriangleHeight.value); // .value bcz default dom takes html layout and parseFloat bcz in default input is string

// now show the calculated area in UI
const AreaValue = document.getElementById('triangle-area');
AreaValue.innerText = Area;  // memorize
}
