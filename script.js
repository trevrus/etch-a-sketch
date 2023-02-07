const container = document.querySelector('.container');

function createGrid(size) {
    // limit the size of the grid
    if (size > 100) {
        size = 100;
    } else if (size < 1) {
        size = 1;
    }

    // remove all divs
    const gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach(row => {
        row.remove();
    });

    // create a new grid
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row', `row-${i}`);
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            row.appendChild(div);
        }
    }
    // add event listener to each div
    // evlHover();
    // changeColor();
    makeColorDarker();
}

function evlHover() {
    // add event listener to each div
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hover');
        });
    });
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = randomColor();
        });
    });
}

function makeColorDarker() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            let color = item.style.backgroundColor;
            if (color === '') {
                color = 'rgb(255, 255, 255)';
            }
            let rgb = color.match(/\d+/g);
            let r = Number(rgb[0]);
            let g = Number(rgb[1]);
            let b = Number(rgb[2]);
            if (r > 0) {
                r -= 25.5;
            }
            if (g > 0) {
                g -= 25.5;
            }
            if (b > 0) {
                b -= 25.5;
            }
            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
}

// add event listener to the button
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const size = prompt('Enter the size of the grid', '25');
    createGrid(size);
});