function balikKata(kata) {
  var panjangKata = kata.length
  var hasil = ""
  for(var i = panjangKata - 1; i >= 0; i--) {
    hasil += kata[i] 
  }
  /*for (var i = 1; i <= panjangKata; i++) {
    hasil += kata[panjangKata-i]
  }*/
  return hasil
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS