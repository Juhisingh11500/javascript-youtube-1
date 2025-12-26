//for loop/itterators with break and continue

for (let i = 0; i < 9; i++) {
    const element = i;
    //console.log(element);
}
//console.log(i);//ReferenceError: i is not defined

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        //console.log(`${element} is the best number `);
    }
    //console.log(element);
}

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     for (let j = 0; j <= 10; j++) {
//         const total = `outer value of ${i} and inner value of ${j}`;
//         console.log(total);
//     }
//     //console.log(j);//ReferenceError: j is not defined
// }

for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        const total = `${i} * ${j} = ${i * j} `
        //console.log(total);
    }
}

let myarr =["juhi","tiku","sneha","pankaj"]
for (let index = 0; index < myarr.length; index++) {//not =< in array length
    const element = myarr[index];
    //console.log(element);
}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {   // loop stop
//         console.log(`index value is ${index}`);
//         break
//         console.log("juhi");//after break not code 
//     }
//     console.log(`value of index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index === 5) {   // skip
        console.log(`index value is ${index}`);
        continue
        //console.log("juhi");//unreachable code
    }
    console.log(`value of index is ${index}`);
}