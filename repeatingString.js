//function to reverse a string

const RepeatingString = (str) => {
    let occurance = {};
    let ch;
    let len = str.length;

    for(var i=0; i<len; i++){
        ch = str[i];
        if(occurance[ch] === undefined) {
            occurance[ch]  = 1;
        } else {
            occurance[ch] ++;
        }
    }
    let maxe = [];
    for(ch in occurance){
        // console.log(ch , "--->" , occurance[ch] );
        maxe.push(occurance[ch])
    }    
    console.log('Greatest Reeating Strring Count' , Math.max(...maxe));
}

RepeatingString("HellolSanulKumar")