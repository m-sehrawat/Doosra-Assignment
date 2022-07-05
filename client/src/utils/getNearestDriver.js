export const getNearestDriver = (driver, coord, threshold) => {

    let arr = driver.filter((e) => e.availability === 'on');

    let min = Infinity;
    let myDriver = {};

    for (let i = 0; i < arr.length; i++) {

        let distance = Math.sqrt(((arr[i].coordinates.x - coord.x) ** 2) + ((arr[i].coordinates.y - coord.y) ** 2)).toFixed(2);
        console.log('distance:', distance)

        if(distance <= threshold && distance < min){
            min = distance;
            myDriver = arr[i];
        }
    }
    return myDriver;
};