const add = (a, b) => a + b;

const filterEvens = (arr) =>{
	return arr.filter(function(a){
		if(a % 2 == 0){
			return a
		}
	})
}
 
 
  const Smallest = (arr) =>{
    var small = arr[0]
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < small){
        small = arr[i]
      }else{
        small = small
      }
    }
    return small
} 

module.exports = {
  add: add,
  filterEvens: filterEvens,
   Smallest: Smallest
};
