let grid = document.querySelector('.etchContainer');
let init = 16;

//Create 16x16 grid initially
function runGrid() {
    for (let i = 0; i < init * init; i++) {
        let div = document.createElement('DIV'); 
        div.classList.add('block'); 
        div.style.height = `${500 / init}px`; 
        div.style.width = `${500 / init}px`;
        grid.appendChild(div);
    }
}
runGrid();

//Add hover trail effect, initially black
grid.addEventListener('mouseover', e => { 
    if (e.target.classList.contains('block')) {
        e.target.style.backgroundColor = 'black';
    }
});

//Add button that clears the grid
let clear = document.querySelector('.clear');
clear.addEventListener('click', e => {
    let gridDiv = document.querySelectorAll('.block'); 
    for (let i = 0; i < gridDiv.length; i++) {
        gridDiv[i].style.backgroundColor = 'white';
    }
});

//Create new grid button
document.addEventListener('click', e => {
    let gridDiv = document.querySelectorAll('.block'); 

    if (e.target.classList.contains('size')) {
        let newNum = prompt('Input a number for the desired amount of squares per side');
        let num = parseInt(newNum);
        if (num <= 100) { 
            for (let i = 0; i < gridDiv.length; i++) {
                gridDiv[i].remove();
            }
            init = num; 
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
                e.target.style.backgroundColor = 'black';
            }
        })
    }
});