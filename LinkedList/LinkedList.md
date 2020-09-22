## notes
Linked lists provide us with fast append(Adding element at the end) and prepend(Adding element at the start) operations. **Although the insertion operation in linked lists is of complexity O(n), it is much faster than insertion operation of arrays.** The other problem that we face while using arrays is size complexity, when we use dynamic arrays, while adding an element, we have to copy the complete array to a different address space and then add the element whereas, in linked lists, we don’t face such problems.
## References
- [Understanding Data Structures in JavaScript (Linked Lists)](https://blog.soshace.com/understanding-data-structures-in-javascript-linked-lists/)
- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [LinkedList Data Structure](https://www.programiz.com/dsa/linked-list)
- [visualgo.net](https://visualgo.net/en/list?slide=3)

## LeetCode
- [Merge Two Sorted Lists](https://leetcode.com/submissions/detail/397339479/)
```javascript
var mergeTwoLists = function(l1, l2) {
    const mergedLinkedListHead = { val : -1000, next : null }
    let runner = mergedLinkedListHead

    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2
            l2 = l2.next
        } else {
            runner.next = l1
            l1 = l1.next
        }
        runner = runner.next
    }
    
    runner.next = l1 || l2

    return mergedLinkedListHead.next
}
```
```javascript
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    
    if (l1.val <= l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }
}
```
