module.exports = function toReadable (number) {
  let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',	'seven', 'eight', 'nine']; 
  let arr2 = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr3 = ['twenty', 'thirty', 'forty', 'fifty',	'sixty', 'seventy', 'eighty', 'ninety'];
  let arr = [];
  let str = 'hundred'
  
  function expansion_of_a_two_digit_number() {
  	let decomposition = String(number).split('');
  		for (let i=0; i<10; i++){
  			arr[i]=i;
  			if (decomposition[1] == arr[i]){
  				return arr3[Number(decomposition[0])-2]+ " " + arr1[arr[i]];
  			}
  		}
 	}

 	function expansion_of_a_three_digit_number(){
 		let decomposition = String(number).split('');
 		for (let i=0; i<10; i++){
  			arr[i]=i;
  			if (decomposition[2] == '0' && decomposition[1] == '0'){
  				return arr1[decomposition[0]] +" " + str; 
  			}
  			else if (decomposition[1] == '0' && decomposition[2] == arr[i]){
  				return arr1[decomposition[0]] +" " + str + " " + arr1[decomposition[2]];
  			}
  			else if (decomposition[1] == '1' && decomposition[2] == arr[i]){
  				return arr1[decomposition[0]] + " " + str + " " + arr2[arr[i]]
  			}
  			else if (decomposition[2] =='0'){
  				return arr1[decomposition[0]] +" "+ str + " " + arr3[decomposition[1]-2]
  			}
  			else if (decomposition[2] == arr[i]){
  				return arr1[decomposition[0]] +  " " + str + " " + arr3[decomposition[1]-2] + " " + arr1[arr[i]];
  			}
 		}
 	}

 	
  	if (number <10) {
  		for (let i=0; i<10; i++){
  			arr[i] = i;
  			if (number == arr[i]){
  				return arr1[arr[i]];
  			}
  	} 
  }
  else if (number >= 10 && number<20) {
  		for (let i=10; i< 20; i++){
  			arr[i-10] = i;
  			if (number == arr[i-10]){
  				return arr2[arr[i-10]-10]
  			}
  		}
  	}
    else if (number >= 21 && number < 30){
  		
  		return expansion_of_a_two_digit_number(number);
  	}
  	else if (number >= 31 && number < 40){
  		return expansion_of_a_two_digit_number(number);
 	} 
 	else if (number >= 41 && number < 50){
  		return expansion_of_a_two_digit_number(number);
  	}
  	else if (number >= 51 && number < 60){
  		return expansion_of_a_two_digit_number(number);
  	}
  	else if (number >= 61 && number < 70){
  		return expansion_of_a_two_digit_number(number);
  	}
  	else if (number >= 71 && number < 80){
  		return expansion_of_a_two_digit_number(number);
  	}
  	else if (number >= 81 && number < 90){
  		return expansion_of_a_two_digit_number(number);
  	}
  	else if (number >= 91 && number < 100){
  		return expansion_of_a_two_digit_number(number);
  	}		
  	else if (number == 20){
  		return arr3[0]
  	}else if (number == 30){
  		return arr3[1]
  	}else if (number == 40){
  		return arr3[2]
  	}else if (number == 50){
  		return arr3[3]
  	}else if (number == 60){
  		return arr3[4]
  	}else if (number == 70){
  		return arr3[5]
  	}else if (number == 80){
  		return arr3[6]
  	}else if (number == 90){
  		return arr3[7]
  	}else if (number == 100){
  		return arr1[1] + " " +'hundred'
  	}else if (number > 100){
  		return expansion_of_a_three_digit_number();
  	}
}
