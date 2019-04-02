

const reverseString = (str) => {
    let arr = str.split(" ");
    console.log(arr)
    let len = arr.length;
    let rev = '';
    for(let i=len-1; i>=0; i--){
        rev += arr[i];
    }
    console.log(rev);
}

reverseString("Hello Sanu Kumar")