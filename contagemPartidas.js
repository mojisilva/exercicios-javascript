

 
let n = 14

let totalMatches = 0;
    while(n > 1){
        if(n % 2 === 0){
            n = n / 2;
            totalMatches += n; 
        }else{
            n = (n-1)/2;
            totalMatches += (n+1);
        }
    }
    console.log(totalMatches)