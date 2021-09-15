const fahrenheitCelsiusConverter = (temperature, converter = 'F-C') => 
converter === 'F-C' ? ((temperature - 32) / 1.8).toFixed(0) : temperature * 1.8 +32 


console.log(fahrenheitCelsiusConverter(0, 'C-F')) // 32
console.log(fahrenheitCelsiusConverter(5, 'C-F')) // 41
console.log(fahrenheitCelsiusConverter(15, 'C-F')) // 59
console.log(fahrenheitCelsiusConverter(25, 'C-F')) // 77
console.log(fahrenheitCelsiusConverter(40, 'C-F')) // 104
console.log('------------')
console.log(fahrenheitCelsiusConverter(0)) // -18
console.log(fahrenheitCelsiusConverter(5)) // -15
console.log(fahrenheitCelsiusConverter(15)) // -9
console.log(fahrenheitCelsiusConverter(25)) // -4
console.log(fahrenheitCelsiusConverter(40)) // 4
