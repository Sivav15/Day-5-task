// a. Print odd numbers in an array

// anonymous function

let arr = function (a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i]);
        }
    }
};
arr([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//  IIFE

(function (a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);



//     // B.  Convert all the strings to title caps in a string array

// anonymous function

let title_caps = function (array) {
    for (i = -0; i < array.length; i++) {
        var y = array[i].split("")
        if (y[0].charCodeAt() >= 97 && y[0].charCodeAt() <= 122) {
            y[0] = String.fromCharCode(y[0].charCodeAt(0) - 32)

        }
        array[i] = y[0] + array[i].substring(1, y.length)
    }
    console.log(array);  // output:[ 'Siva', 'Mech', 'Salem' ]
};
title_caps(["siva", "mech", "salem"]);

//IIFE

(function (array) {
    for (i = -0; i < array.length; i++) {
        var y = array[i].split("")
        if (y[0].charCodeAt() >= 97 && y[0].charCodeAt() <= 122) {
            y[0] = String.fromCharCode(y[0].charCodeAt(0) - 32)

        }
        array[i] = y[0] + array[i].substring(1, y.length)
    }
    console.log(array);              //   output:[ 'Siva', 'Mech', 'Salem' ]
})(["siva", "mech", "salem"]);


// c. Sum of all numbers in an array


// anonymous function
let sum = function (a) {
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        x = x + a[i]

    }
    console.log(x);
};
sum([10, 10, 10, 10, 10]);  //output:50


//IIFE

(function (a) {
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        x = x + a[i]

    }
    console.log(x);             //output:50
})([10, 10, 10, 10, 10]);

// D. Return all the prime numbers in an array

// anonymous function
let prime = function (a) {
    let arrs = [];
    for (var i = 2; i < a.length; i++) {
        if ((a[i] % 2 === 0) || (a[i] % 3 === 0))
            continue;
        arrs.push(a[i]);
    }
    return arrs;
};
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));


// IIFE

let y = (function (a) {
    let arrs = [];
    for (var i = 2; i < a.length; i++) {
        if ((a[i] % 2 === 0) || (a[i] % 3 === 0))
            continue;
        arrs.push(a[i]);
    }
    return arrs;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

console.log(y);


// E. Return all the palindromes in an array
// anonymous function
let pali = function (a) {
    var ans = [];
    for (var x of a) {
        var repeat = 0;
        var y = x.toString();
        for (i = 0; i <= y.length / 2; i++) {
            if (y.charAt(i) == y.charAt(y.length - i - 1)) {
                repeat = 1;
            }
        }
        if (repeat == 1) {
            ans.push(x)
        }
    }
    return ans;
};

console.log(pali([56465, "guvi", "madam", "siva", 35435]));

//IIFE


var z = (function (a) {
    var ans = [];
    for (var x of a) {
        var repeat = 0;
        var y = x.toString();
        for (i = 0; i <= y.length / 2; i++) {
            if (y.charAt(i) == y.charAt(y.length - i - 1)) {
                repeat = 1;
            }
        }
        if (repeat == 1) {
            ans.push(x)
        }
    }
    return ans;
})([56465, "guvi", "madam", "siva", 35435]);
console.log(z);


// F. Return median of two sorted arrays of the same size

// anonymous function
let medium = function (ar1, ar2, n) {
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2) / 2;
};
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2) {
    console.log(medium(ar1, ar2, n1));
}
else {
    console.log("Doesn't work for arrays of unequal size");
}
//G. Remove duplicates from an array
// anonymous function

var arra = [1, 2, 3, 1, 2];

let duplicate = function (a) {
    var x = [];
    for (i = 0; i < a.length; i++) {
        var repeat = 0;
        for (j = 0; j < a.length; j++) {
            if (a[i] == x[j]) {
                repeat = 1;
            }
        }
        if (repeat == 0) {
            x.push(a[i])
        }


    }
    console.log(x);
};
duplicate([1, 2, 3, 2, 1,]);


//IIFE
(function (a) {
    var x = [];
    for (i = 0; i < a.length; i++) {
        var repeat = 0;
        for (j = 0; j < a.length; j++) {
            if (a[i] == x[j]) {
                repeat = 1;
            }
        }
        if (repeat == 0) {
            x.push(a[i])
        }


    }
    console.log(x);
})([1, 2, 3, 2, 1,]);


// H. Rotate an array by k times

// anonymous function

let Rotate = function (a, k) {

    var res = [];
    var n = a.length;
    k = k % n;
    for (i = 0; i < a.length; i++) {
        if (i < k) {
            res[i] = a[n - k + i]
        }
        else {
            res[i] = a[i - k]
        }
    }
    console.log(res)


};
Rotate([1, 2, 3, 4, 5]);

//IIFE



(function (a, k) {

    var res = [];
    var n = a.length;
    k = k % n;
    for (i = 0; i < a.length; i++) {
        if (i < k) {
            res[i] = a[n - k + i]
        }
        else {
            res[i] = a[i - k]
        }
    }
    console.log(res);


})([1, 2, 3, 4, 5], 3);