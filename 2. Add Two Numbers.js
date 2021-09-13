/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head
    let point
    let carry = 0
    while (l1 || l2 !== null) {        
        let add1 = l1 == null ? 0 : l1.val
        let add2 = l2 == null ? 0 : l2.val
        let sum = add1 + add2 + carry
        sum >= 10 ? carry = 1 : carry = 0
        sum = sum % 10
        if (head == null && point == null) {
            point = new ListNode(sum)
            head = point
        } else {
            point.next = new ListNode(sum)
            point = point.next
        }
        l1 !== null ? l1 = l1.next : l1 = null
        l2 !== null ? l2 = l2.next : l2 = null   
    }
    carry ? point.next = new ListNode(carry) : null
    return head
};
