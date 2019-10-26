//Tugas 1
var pertama = 2
var kedua = 20

console.log('LOOPING PERTAMA')
while (pertama <= 20) {
  console.log( pertama + ' - iLove Coding');
  pertama += 2
} 

console.log('\nLOOPING KEDUA')
while (kedua >= 2) {
  console.log( kedua + ' - I will become fullstack developer');
  kedua -= 2
}

//tugas 2
console.log('\nLOOPING PERTAMA')
for (var loopingPertama = 1; loopingPertama <=20; loopingPertama++) {
  console.log(loopingPertama + ' - iLove Coding');
}

console.log('LOOPING KEDUA')
for (var loopingKedua = 20; loopingKedua >= 1; loopingKedua--) {
  console.log(loopingKedua + ' - I will become fullstack developer');
}

//tugas 3
console.log('\nLOOPING GANJIL-GENAP')
for (var counter1 = 1; counter1 <=100; counter1++) {
  if ( counter1 % 2 === 0) {
    console.log('GANJIL');
  }
  else {
    console.log('GENAP');
  }
}

console.log('\nLOOPING KELIPATAN 3')
for (var counter2 = 1; counter2 <= 100; counter2 += 2) {
  if (counter2 % 3 === 0) {
    console.log(counter2 + ' kelipatan 3');
  }
}

console.log('\nLOOPING KELIPATAN 6')
for (var counter2 = 1; counter2 <= 100; counter2 += 5) {
  if (counter2 % 6 === 0) {
    console.log(counter2 + ' kelipatan 5');
  }
}

console.log('\nLOOPING KELIPATAN 9')
for (var counter2 = 1; counter2 <= 100; counter2 += 9) {
  if (counter2 % 10 === 0) {
    console.log(counter2 + ' kelipatan 9');
  }
}