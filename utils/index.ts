export function fixPrice(price: Number): String {
  const num = price.toString().replace('.', ',')
  const num1 = num.split(',')
  const num2 = num1[0].split('').reverse()

  let newPrice = ""
  let points = 0
  
  for (let i = 0; i < num2.length; i++) {
    const item = num2[i]
    if (newPrice.length > 0 && (newPrice.length - points) % 3 === 0) {
      if (i === (num2.length -1) && num1[1]) {
        newPrice = `${item}.${newPrice},${num1[1]}`
      } else {
        newPrice = `${item}.${newPrice}`
        points++
      }
    } else {
      if (i === (num2.length- 1) && num1[1]) {
        newPrice = `${item}${newPrice},${num1[1]}`
      } else {
         newPrice = `${item}${newPrice}`
      }
    }
  }
  
  return newPrice
}