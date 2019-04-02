//function to find the reverse String

const reverseString = (str) => {
    let arr = str.split(" ");
    console.log(arr)
    let len = arr.length;
    let rev = '';
    for(let i=len-1; i>=0; i--){
        rev = rev + arr[i];
    }
    console.log(rev);
}

//function to reverse the string using for of loop
const reverseString1 = (str) => {
    let reverse = '';
    for(let char of str) {
        reverse = char + reverse;
    }
    console.log(reverse);
}


reverseString("Hello Sanu Kumar")
reverseString1("Hello Sanu Kumar")