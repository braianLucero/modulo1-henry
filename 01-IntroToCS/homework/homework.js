'use strict';

function BinarioADecimal(num) {
   let sum  = 0;

   for (let i = 0; i < num.length;i++){
      sum  = sum + num[i] * 2 ** (num.length - 1 - i);
   }
   return sum
}

function DecimalABinario(num) {
   let  binary  = '';
   while (num > 0){
         binary = (num % 2) + binary;
         num = Math.floor(num / 2);      
   }
   return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
