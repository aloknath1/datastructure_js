/*
Example 1:

Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
Output: 0
Explanation:
- At time 0, both rooms are not being used. The first meeting starts in room 0.
- At time 1, only room 1 is not being used. The second meeting starts in room 1.
- At time 2, both rooms are being used. The third meeting is delayed.
- At time 3, both rooms are being used. The fourth meeting is delayed.
- At time 5, the meeting in room 1 finishes. The third meeting starts in room 1 for the time period [5,10).
- At time 10, the meetings in both rooms finish. The fourth meeting starts in room 0 for the time period [10,11).
Both rooms 0 and 1 held 2 meetings, so we return 0. 
Example 2:

Input: n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]
Output: 1
Explanation:
- At time 1, all three rooms are not being used. The first meeting starts in room 0.
- At time 2, rooms 1 and 2 are not being used. The second meeting starts in room 1.
- At time 3, only room 2 is not being used. The third meeting starts in room 2.
- At time 4, all three rooms are being used. The fourth meeting is delayed.
- At time 5, the meeting in room 2 finishes. The fourth meeting starts in room 2 for the time period [5,10).
- At time 6, all three rooms are being used. The fifth meeting is delayed.
- At time 10, the meetings in rooms 1 and 2 finish. The fifth meeting starts in room 1 for the time period [10,12).
Room 0 held 1 meeting while rooms 1 and 2 each held 2 meetings, so we return 1.

*/
var mostBooked = function(n, meetings) {
    meetings.sort((a,b) => a[0] - b[0]);

    //Available rooms: min-heap by room number
    const available  = new MinHeap((a,b) => a-b);
    for(let i=0; i<n;i++){
        available.push(i);
    }

    //Occupied rooms: min-heap by end time, the room number
    const occupied  = new MinHeap((a,b) => {
        if(a.end !== b.end) return a.end - b.end;
        return a.room - b.room;
    });

    const counts = new Array(n).fill(0);

    for(let [start, end] of meetings){
        if(!occupied.isEmpty() && occupied.peek().end <= start){
            const {room} = occupied.pop();
            available.push(room);
        }

        if(!available.isEmpty()){
            const room  = available.pop();
            counts[room]++;
            occupied.push({end: end, room: room});
        }else{
            //Assign to its earliest ending room, then update its end time
            const earliest = occupied.pop();
            const duration = end - start;
            const newEnd = earliest.end + duration;
            counts[earliest.room]++;
            occupied.push({end: newEnd, room: earliest.room});
        }
    }

    //Determine the room with highest meeting count
    let maxCount = -1;
    let res = 0;
    for(let i=0;i<n;i++){
        if(counts[i] > maxCount){
            maxCount = counts[i];
            res = i;
        }else if(counts[i] === maxCount && i < res){
            res = i;
        }
    }
    return res;
};

class MinHeap {
    constructor(comparator){
        this.heap = [];
        this.comparator = comparator;
    }
    push(value){
        this.heap.push(value);
        this.bubbleUp();
    }
    pop(){
        if(this.isEmpty()) return null;
        const root  = this.heap[0];
        const last = this.heap.pop();
        if(!this.isEmpty()){
            this.heap[0] = last;
            this.bubbleDown();

        }
        return root;
    }

    peek(){
        return this.isEmpty() ? null : this.heap[0];
    }

    isEmpty(){
        return this.heap.length === 0;

    }

    bubbleUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            const parent  = Math.floor((index -1)/2);
            if(this.comparator(this.heap[index], this.heap[parent]) < 0){
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            }else{
                break;
            }
        }
    }

    bubbleDown(){
        let index = 0;
        while(true){
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;
            if(left < this.heap.length && this.comparator(this.heap[left], this.heap[smallest]) < 0){
                smallest = left;

            }
            if(right < this.heap.length && this.comparator(this.heap[right], this.heap[smallest]) < 0){
                smallest = right;
                
            }
            if(smallest !== index){
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
                
            }else{
                break;
            }

        }
    }
}

let n = 2;
let meetings = [[0,10],[1,5],[2,7],[3,4]];

let result = mostBooked(n, meetings);
console.log(result);