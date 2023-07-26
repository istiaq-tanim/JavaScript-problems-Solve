const array=[3,7,5,4,8]
const arr=[...array]
const secondSmallest= (arr) =>
{
   return arr.sort((a,b)=>{return a-b})[1]
}
console.log(secondSmallest(arr))
