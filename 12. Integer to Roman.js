// Very over engineered to support the addition of chars that don't exist
// this was intentional because I got a dumb idea/
// A better way is to just subtract from the largest int and avoid the additional math
var intToRoman = function (num) {
    const vals = [{
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
    },
    {
        1: "X",
        4: 'LX',
        5: "L",
        9: "XC",
    },
    {
        1: "C",
        4: "CD",
        5: "D",
        9: "CM",
    },
    {
        1: 'M'
    }] 
    let rnum = Array
        .from(num.toString())
        .map(Number)
    let str = []
    let j = Math.min(vals.length,rnum.length) - 1
    for (let i = 0; i< rnum.length; i++) {
        let offset = j - i 
        let baseVal = vals[offset]
        let bNum = rnum[i]
        while (bNum > 0) {
            if(Object.keys(baseVal).includes(bNum)) {
                str.push(baseVal[bNum])
                bNum = b
            } else {
                let highNum = Object.keys(baseVal).reverse().filter(int => int <= bNum)[0]
                str.push(baseVal[highNum.toString()])
                bNum -= highNum
            }
        }
    }
    return str.join('')
};

console.log(intToRoman(1994));