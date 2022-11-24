function cinema (input) {
    let projectionType = input[0]; 
    let aisles = Number(input[1]); 
    let columns = Number(input[2]); 

    switch (projectionType) {
        case 'Premiere': console.log((12.00 * aisles * columns).toFixed(2)); break; 
        case 'Normal': console.log((7.50 * aisles * columns).toFixed(2)); break;
        case 'Discount': console.log((5 * aisles * columns).toFixed(2)); break;
    }
}

cinema (["Normal", "21", "13"])