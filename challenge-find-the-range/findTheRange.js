// Starting array
let arr = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:


let smallest = arr[0]
let largest = arr[0]


for(let i = 0; i < arr.length; i++){
  if(arr[i] < smallest){
    smallest = arr[i]
  } else if(largest < arr[i]){
    largest = arr[i]
  }
}

console.log(smallest, largest)