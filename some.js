let obj = {
  name: "Prince",
  age: 18,
  address: "Shankargarh",
  phone: "main Nahi Batauga",
  ipl_team: "Chennai Super Kings",
  favourite_player: "Mahendra Singh Dhoni",
};
for (let i in obj) {
  console.log(i, ":-", obj[i]);
}
// for new branch

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
//  again for new branch  

let str = "Prince";
for(let i=0;i<str.length;i++){
  console.log(str[i]);
}