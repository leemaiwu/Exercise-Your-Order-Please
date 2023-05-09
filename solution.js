function order(words) {
    let array = words.split(' ')
    let num = words.match(/\d/g)
    let sorted = []
    let final = []
    if (num == null) {
        return ''
    }
    sorted = num.sort((a, b) => a -b)
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < sorted.length; k++) {
            if (array[i].includes(sorted[k])) {
                final[k] = array[i]
            }
        }
    }
    return final.join(' ')
}

console.log(order('')) // ''
console.log(order('is2 Thi1s T4est 3a')) // 'Thi1s is2 3a T4est'
console.log(order('4of Fo1r pe6ople g3ood th5e the2')) // 'Fo1r the2 g3ood 4of th5e pe6ople'
