const array = [2,5,2,5,6,1]
// min max sum avg
function minMaxSumAvg(array) {
    let min = array[0]
    let max = array[0]
    let sum = 0
    let avg= 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        if (array[i]<min) min = array[i]

        if(array[i]>max) max = array[i]
 }
 avg = sum/array.length
 return {min:min, max:max, sum:sum,avg,avg}
}

console.log(minMaxSumAvg(array))