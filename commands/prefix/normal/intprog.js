const Discord = require('discord.js')

module.exports.run = async (client, message, args, prefix, color, config) => {
  let isPrime = true

  function FindPrime(number) {
    for (let i = 2; i < number; i++) {
      if(number % i == 0) {
        isPrime = false
        break;
      }
     return console.log(isPrime);
    }
  }
  for (let i = 0; i < 100; i++) {
    FindPrime(i)
  }
}