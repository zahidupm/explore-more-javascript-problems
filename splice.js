// Array থেকে কোন কিছু remove করতে splice ব্যবহার করা হয়।
// Remove elements from an array
// and, if necessary , inserts new elements in their place
// returning the deleted elemets
// will change the original array
const friends = [12, 14, 43, 534, 54, 644, 45, 65, 67, 76, 34];
const partial = friends.splice(2, 7, 999, 555, 777);
console.log(partial);
console.log(friends);