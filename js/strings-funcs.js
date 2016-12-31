const capitalize = (str) => str.split('').map((letter) => letter.toUpperCase()).join('');

const capitalizeFirst = (str) =>{
	var final = str.split(' ')

	var fin = final.map(function(a,b){
	  return a[0].toUpperCase() + a.slice(1)
	})
	return fin.join(' ')
}


module.exports = {
  capitalize: capitalize,
  capitalizeFirst: capitalizeFirst
};
