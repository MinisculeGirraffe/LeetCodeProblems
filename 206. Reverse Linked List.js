// Destructuring assignments to process the node swaps. 
var reverseList = function(head) {
    let [prev, cur] = [null, head]
    while(cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
}
