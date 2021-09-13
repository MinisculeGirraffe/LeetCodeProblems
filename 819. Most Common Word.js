var mostCommonWord = function (paragraph, banned) {
    let punctuation = "!?',;. "
    let searchArr = paragraph.toLowerCase()
    let occouranceMap = new Map()
    punctuation
        .split('')
        .forEach(char => searchArr = searchArr.replaceAll(char, '|'))
    searchArr
        .split('|')
        .filter(word => word != '')
        .forEach(word => {
            let occ
            occouranceMap.has(word) ? occ = occouranceMap.get(word) + 1 : occ = 1
            occouranceMap.set(word, occ)
        })
    let sorted = [...occouranceMap]
        .filter(([key, value]) => banned.includes(key) ? false : true)
        .sort((a,b) => b[1] - a[1])
    return sorted[0][0]
};

