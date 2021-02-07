const dotRow = (col1, col2, col3, col4, col5) => {
    const dot = `<div class="dot"></div>`
    const dotBlack = `<div class="dot-black"></div>`
    for(let i = 1 ; i <= 5; i++) {
        if( i == col1 || i == col2 || i == col3 || i == col4 || i == col5 ) {
            document.querySelector(".container").innerHTML += dotBlack;
        } else {
            document.querySelector(".container").innerHTML += dot;
        }
    }
    document.querySelector(".container").innerHTML += '<br>';
}

const makeADots = (alphabeth) => {
    switch (alphabeth.toLowerCase()) {
        case "a":
            dotRow(3);
            dotRow(2,4);
            dotRow(2,3,4);
            dotRow(2,4);
            dotRow(2,4);
            break;
        
        case "b":
            dotRow(1,2,3);
            dotRow(1,4)
            dotRow(1,2,3,4);
            dotRow(1,4);
            dotRow(1,2,3);
            break;
        
        case "c" :
            dotRow(1,2,3,4);
            dotRow(1);
            dotRow(1);
            dotRow(1);
            dotRow(1,2,3,4);
            break;

        case "d" :
            dotRow(1,2,3);
            dotRow(1,4);
            dotRow(1,4);
            dotRow(1,4);
            dotRow(1,2,3);
            break;

        case "e" :
            dotRow(1,2,3,4);
            dotRow(1);
            dotRow(1,2,3,4);
            dotRow(1);
            dotRow(1,2,3,4);
            break;

        case "f" :
            dotRow(1,2,3,4);
            dotRow(1);
            dotRow(1,2,3,4);
            dotRow(1);
            dotRow(1);
            break;

        case "g" :
            dotRow(1,2,3,4);
            dotRow(1,4);
            dotRow(1,2,3,4);
            dotRow(4);
            dotRow(1,2,3,4);
            break;
        
        case "h" :
            dotRow(1,4);
            dotRow(1,4);
            dotRow(1,2,3,4);
            dotRow(1,4);
            dotRow(1,4);
            break;
    
        case "i" :
            for (let index = 0; index < 5; index++) {
                dotRow(3);
            }
            break;

        case "j" :
            dotRow(2,3,4);
            dotRow(4);
            dotRow(4);
            dotRow(1,4);
            dotRow(1,2,3,4);
            break;

        case "k" :
            dotRow(1,3);
            dotRow(1,2);
            dotRow(1);
            dotRow(1,2);
            dotRow(1,3);
            break;
    
        case "l" :
            dotRow(1);
            dotRow(1);
            dotRow(1);
            dotRow(1,4);
            dotRow(1,2,3,4);
            break;
        
        case "m" :
            dotRow(1,2,3,4,5);
            dotRow(1,3,5);
            dotRow(1,3,5);
            dotRow(1,3,5);
            dotRow(1,3,5);
            break;

        case "n" :
            dotRow(1,5);
            dotRow(1,2,5);
            dotRow(1,3,5);
            dotRow(1,4,5);
            dotRow(1,5);
            break;

        case "o" :
            dotRow(1,2,3,4,5);
            dotRow(1,5);
            dotRow(1,5);
            dotRow(1,5);
            dotRow(1,2,3,4,5);
            break;
            
        case "p" :
            dotRow(1,2,3,4);
            dotRow(1,4);
            dotRow(1,2,3,4);
            dotRow(1);
            dotRow(1);
            break;
        
        case "q" :
            dotRow(1,2,3,4);
            dotRow(1,4);
            dotRow(1,4);
            dotRow(1,3,4);
            dotRow(1,2,3,4,5);
            break;

        case "r" :
            dotRow(1,2,3,4);
            dotRow(1,4);
            dotRow(1,2,3,4);
            dotRow(1,3);
            dotRow(1,4);
            break;
        
        case "s" :
            dotRow(1,2,3,4);
            dotRow(1);
            dotRow(1,2,3,4);
            dotRow(4);
            dotRow(1,2,3,4);
            break;

        case "t" :
            dotRow(1,2,3,4,5);
            dotRow(3);
            dotRow(3);
            dotRow(3);
            dotRow(3);
            break;

        case "u" :
            dotRow(1,5);
            dotRow(1,5);
            dotRow(1,5);
            dotRow(1,5);
            dotRow(1,2,3,4,5);
            break;

        case "v" :
            dotRow(1,5);
            dotRow(1,5);
            dotRow(2,4);
            dotRow(3);
            dotRow()
            break;

        case "w" :
            dotRow(1,3,5);
            dotRow(1,3,5);
            dotRow(1,3,5);
            dotRow(1,3,5);
            dotRow(1,2,3,4,5)
            break;

        case "x" :
            dotRow(1,5);
            dotRow(2,4);
            dotRow(3);
            dotRow(2,4);
            dotRow(1,5)
            break;

        case "y" :
            dotRow(1,5);
            dotRow(2,4);
            dotRow(3);
            dotRow(3);
            dotRow(3)
            break;

        case "z" :
            dotRow(1,2,3,4,5);
            dotRow(4);
            dotRow(3);
            dotRow(2);
            dotRow(1,2,3,4,5)
            break;
            
        default:
            break;
    }
}

makeADots("m");
