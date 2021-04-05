let grid = document.querySelector('.etchContainer');
let init = 16;

//Create 16x16 grid initially
function runGrid() {
    for (let i = 0; i < init * init; i++) {
        let div = document.createElement('DIV'); //init amount * itself gives the exact amount of squares on a side. Ex: 16 -> 16*16 = 256 tiles, for loop is ran 256 times, total 256 squares, 16 squares each side
        div.classList.add('block'); //add class to new divs to change background color
        div.style.height = `${500 / init}px`; //Algorithm to dynamically change div size according to amount of squares asked for, 500 is for set container size from css file
        div.style.width = `${500 / init}px`;
        grid.appendChild(div);
    }
}
runGrid();

//Add hover trail effect, initially black
grid.addEventListener('mouseover', e => { //practice event delegation, if not, must use a for loop to add a listener to every div with a class 'block'
    if (e.target.classList.contains('block')) {
        e.target.style.backgroundColor = 'black';
    }
});

//Add button that clears the grid
let clear = document.querySelector('.clear');
clear.addEventListener('click', e => {
    let gridDiv = document.querySelectorAll('.block'); // create selector after div.classList.add for-loop as the class has not been created if you were to put this code before the for loop. ALSO, let it stay within a function scope so that its divs get updated to select newly added divs instead of it staying to what it was initialized if it were to be outside in the global scope
    for (let i = 0; i < gridDiv.length; i++) {
        gridDiv[i].style.backgroundColor = 'white';
    }
});

//Create new grid
document.addEventListener('click', e => {
    let gridDiv = document.querySelectorAll('.block'); // create selector after div.classList.add for-loop as the class has not been created if you were to put this code before the for loop. ALSO, let it stay within a function scope so that its divs get updated to select newly added divs instead of it staying to what it was initialized if it were to be outside in the global scope

    if (e.target.classList.contains('size')) {
        let newNum = prompt('Input a number for the desired amount of squares per side');
        let num = parseInt(newNum);
        if (num <= 100) { //Max user input 100 for performance reasons
            for (let i = 0; i < gridDiv.length; i++) {
                gridDiv[i].remove();
            }
            init = num; // set new grid
            runGrid();
        } else if (isNaN(num)) {
            alert('Enter a number next time!');
        } else {
            alert('Please enter a number no greater than 100!');
        }
    }
});


//Add rainbow mode
document.addEventListener('click', e => {
    if (e.target.classList.contains('rainbow')) {
        grid.addEventListener('mouseover', e => {
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            if (e.target.classList.contains('block')) {
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        })
    }
});

//Add a button to revert to black color
document.addEventListener('click', e => {
    if (e.target.classList.contains('black')) {
        grid.addEventListener('mouseover', e => {
            if (e.target.classList.contains('block')) {
                e.target.style.backgroundColor = 'blac';
            }
        })
    }
});
