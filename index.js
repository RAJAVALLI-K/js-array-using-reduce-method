const numbers = [1, 2, 3, 4, 5];
//accumulator ----> 0th position of array value,
//currentValue ----> 1th position of array value,
//initialization value ---> namma kotokura value,
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue * 2;
}, 10);
console.log(sum);
document.write("The Reduce Method using Sum Value:" + sum);