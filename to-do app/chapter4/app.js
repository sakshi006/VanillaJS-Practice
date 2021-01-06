var arr=[]
function range(start,end,step= start < end ? 1 : -1){
    if (step > 0) {
        for (let i = start; i <= end; i += step) arr.push(i);
      } else {
        for (let i = start; i >= end; i += step) arr.push(i);
      }
    return arr;
}

// console.log(range(1, 10));

function sum(a)
{
    var s=0;
    for(var i =0;i<a.length;i++)
         s+=a[i];
    return s;
} 
// console.log(sum(arr));
console.log(sum(range(1, 10)));


////////////////////////////////////////

function reverseArray(arr){
    var rarr=[];
    for(var i=0;i<arr.length;i++)
     rarr[i]=arr[arr.length-1-i];
    return rarr;
}

console.log(reverseArray(arr));

/////////////////////////////////////////
