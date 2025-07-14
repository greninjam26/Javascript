"strict mod";
function printForcast (arr) {
    let forcast = "...";
    for (let i = 0; i < arr.length; i++) {
        forcast += ` ${arr[i]}˚C in ${i+1} day ...`
    }
    console.log(forcast);
}

printForcast([17, 21, 23]);
printForcast([12, 5, -5, 0, 4]);
