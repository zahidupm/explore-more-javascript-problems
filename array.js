 const country = 'Bangladesh';
 const age = 52;
 const independent = true;
 const student = {id: 121, class: 11, name: 'agun'};
 const friends = [13, 14, 11, 17, 15, 18, 21];

 function add(num1, num2) {
    return num1 + num2;
 }

 console.log(Array.isArray(student));
 console.log(Array.isArray(friends));
 console.log(typeof(add));

 //===================
 // Array মধ্যে কোন কিছু আছে কিনা তা দেখার জন্য includes ব্যবহার করা হয়।

 console.log(friends.includes(21));

 if(friends.indexOf(21) !== -1) {

 }

 // concat:
 // একটা Array এর সাথে অন্য Array কে জোরা দেয়ার জন্য concat ব্যবহার করা হয়।
 const newFriendsAge = [12, 13, 11, 15];
 const allFriends = newFriendsAge.concat(friends);
 console.log(allFriends);