var num1 = +prompt('birinchi sonni kiriting')
var num2 = +prompt('ikinchi sonni kiriting')
var num3 = +prompt('uchinchi sonni kiriting')




if ((num1< num2 && num1> num3)|| (num1 > num2 && num1 < num3) && !isNaN(num1)&& !isNaN(num2) && !isNaN(num3)){
    alert('orta qiymat ' + num1)
}else if ((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)&& !isNaN(num1)&& !isNaN(num2)&& !isNaN(num3)){

    alert ('otra qiymat '+ num2)
}else if ((num3 < num1 && num3 > num2) || (num3 > num1 && num3 < num2)&& !isNaN(num1)&& !isNaN(num2)&& !isNaN(num3)) {
    alert ('orta qiymat ' +  num3)
}
else if (num1=== num2 && num1=== num3){
    alert ('siz birxil raqam kiritiz')
}

else 
    if(isNaN(num1) && isNaN(num2) && isNaN (num3)){
        console.error('siz umun son kiritmadingiz! ')
    
    }else if (!isNaN(num1) && isNaN(num2)&& isNaNa(num3)){
        console.error('ikinci va ucinci son son emas')
    }
    else if (isNaN(num1) && !isNaN(num2)&& isNaNa(num3)){
        console.error('birinci va ucinci son son emas')
    }
    else if (isNaN(num1) && !isNaN(num2)&& isNaNa(num3)){
        console.error('birinci va ucinci son son emas')
    }
    
    else if (!isNaN(num1) && isNaN(num2)&& isNaNa(num3)){
        console.error('ikinci va ucinci son son emas')
    }

    else if (!isNaN(num1) && isNaN(num2)&& isNaN(num3)){
        console.error('ikinci son son emas')
    }
    else if (isNaN(num1) && !isNaN(num2)&& !isNaN(num3)){
        console.error('birinch son son emas')

    }
    else if (!isNaN(num1) && !isNaN(num2) && isNaN(num3)){
        console.error('ucinci son son emas')
    }

    else if (isNaN(num1) && !isNaN(num2)&& !isNaN(num3)){
        console.error('ikinci va ucinci son son emas')
    }


    else if (num1=== num2 && num1=== num3){
        alert ('siz birxil raqam kiritiz')
    }
    else if(num3===num1 ){
        alert ('birinci raqam uchinchiga teng')
    }
    else if (num2===num3){
        alert ('ikinchi va ichinchi son birxil')
    }else if (num1===num2){
        alert('birinci ikinchi sonlarimiz birxil')
    }
    
    else {
        console.error('siz teng son ezdiz')
    }

