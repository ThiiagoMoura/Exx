//Digital root is the recursive sum of all the digits in a number.

//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
//Examples
//  16  -->  1 + 6 = 7
//942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digital_root(n) {
    let x = n.toString(),
        i,
        y = 0;

    if (x.length === 1) {
        return +x;
    }
    for (i = 0; i < x.length; i++) {
        y += +x[i];
    }
    return digital_root(y);
}
console.log(digital_root(942))