bottles = 99;

while (bottles > 0) {
    console.log(bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.');
    bottles--;
    if (bottles == 1) {
        console.log('Take one down and pass it around, ' + bottles + ' bottle of beer on the wall.');
        console.log('\n');
        console.log(bottles + ' bottle of beer on the wall, ' + bottles + ' bottle of beer.');
        console.log('Take one down and pass it around, no more bottles of beer on the wall.');
        console.log('\n');
        break;
    }

    console.log('Take one down and pass it around, ' + bottles + ' bottles of beer on the wall.');
    console.log('\n')
}

console.log('No more bottles of beer on the wall, no more bottles of beer.');
console.log('Go to the Store and buy some more, 99 bottles of beer on the wall.');
