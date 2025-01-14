const convertToRoman = function (x){
   
    let myFunc = num => Number(num); 
    var intArr = Array.from(String(x), myFunc).reverse(); 
   
   let cal_0 = function(nun_0){ 
    switch (nun_0[0]){
    case 1:
		return "I";
		break;
	case 2:
        return "II";
		break;
	case 3:
        return "III";
		break;
	case 4:
        return "IV";
		break;
	case 5:
        return "V";
		break;
	case 6:
        return "VI";
		break;
    case 7:
        return "VII";
		break;  
    case 8:
        return "VIII";
        break;
    case 9:
        return "IX";
        break;  
	default:
		return '';
}}
   let cal_1 = function(nun_1){ 
    switch (nun_1[1]){
    case 1:
          return "X";
           break;
        case 2:
          return "XX";
          break;
        case 3:
          return "XXX";
          break;
        case 4:
          return "XL";
          break;
        case 5:
          return "L";
          break;
        case 6:
          return "LX";
          break;
        case 7:
          return "LXX";
          break;
        case 8:
          return "LXXX";
          break;
        case 9:
          return "XC";
          break;
        default:
          return '';
}}
   let cal_2 = function(nun_2){
    switch (nun_2[2]) {
        	case 1:
        		return "C";
        		break;
            case 2:
                return "CC";
                break;
        	case 3:
                return "CCC";
        		break;
        	case 4:
                return "CD";
        		break;
        	case 5:
                return "D";
        		break;
        	case 6:
                return "DC";
        		break;
        	case 7:
                return "DCC";
        		break;
            case 8:
                return "DCCC";
        		break;  
            case 9:
                return "CM";
                break;
        	default:
        		return '';
}}
   let cal_3 = function(nun_3){
     switch (nun_3[3]) {
        	case 1:
        		return "M";
        		break;
            case 2:
                return "MM";
                break;
        	case 3:
                return "MMM";
        		break;
        	default:
        		return '';
}} 
return cal_3(intArr)+cal_2(intArr)+cal_1(intArr)+cal_0(intArr);
}

document.getElementById("demo").innerHTML = convertToRoman(3987);
