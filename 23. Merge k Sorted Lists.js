/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Uses a cheater array. Re-write later to merge into sublists via merge sort
 var mergeKLists = function(lists) {
    let point = new ListNode()
    let cheaterArray = []
    let head 
    for(let list of lists) {
        while (list !== null) {
            cheaterArray.push(list.val)
            list = list.next
        }
    }
    cheaterArray.length == 0 ? head = point.next : true
    cheaterArray
    .sort((a,b) => a-b)
    .forEach(int => {
        int ?  point.next = new ListNode(int) : point.next = new ListNode()
        point = point.next
        head == null ? head = point : null
    }) 
    return head
};