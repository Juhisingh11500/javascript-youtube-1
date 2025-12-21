//

//let tinderUser = new Object()//singalton obj
let tinderUser = {}//both are same  //nonsingalton obj
tinderUser.id ="123qwe"
tinderUser.name = "juhi"
tinderUser.isloggedin = false
//{ id: '123qwe', name: 'juhi', isloggedin: false }
//console.log(tinderUser);//{}
//console.log(typeof tinderUser);//object

let regularuser = {
    useremail: "juhi@gmail.com",
    fullname: {
        userfullname:{
        user: "juhi",
        age: 26
        }
    }

}
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);
// console.log(regularuser.fullname.userfullname.age);

let obj1 = {
    0: "a",
    1: "aa",
    2: "aaa",
    3: "aaaa"
}
let obj2 = {
    7: "ar",
    18: "aar",
    28: "aaat",
    3: "aaaat"//not same key uses
}
//let obj3 = Object.assign({},obj1, obj2)//good practice
//let obj3 = Object.assign(obj1, obj2)//all object are murge in obj1
//let obj3 = {obj1,obj2}
//console.log(obj3);//{obj1: { '0': 'a', '1': 'aa', '2': 'aaa', '3': 'aaaa' },obj2: { '0': 'ar', '1': 'aar', '2': 'aaat', '3': 'aaaat' }}
//console.log(obj1);//same store as obj3

let obj3 = {...obj1,...obj2}
//console.log(obj3);

let users =[
    {
        id: 1,
        email: "j@gmail.com"
    },  {
        id: 2,
        email: "u@gmail.com"
    },  {
        id: 6,
        email: "k@gmail.com"
    },  {
        id: 8,
        email: "y@gmail.com"
    }
]
//console.log(users[3].id);//8
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));//data type array
//[ 'id', 'name', 'isloggedin' ]
//console.log(Object.values(tinderUser));
//[ '123qwe', 'juhi', false ]
//console.log(Object.entries(tinderUser));
//[ [ 'id', '123qwe' ], [ 'name', 'juhi' ], [ 'isloggedin', false ] ]

console.log(tinderUser.hasOwnProperty('isloggedin'));//true
