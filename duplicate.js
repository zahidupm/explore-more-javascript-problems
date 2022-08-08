
const names = ['abul', 'babul', 'kabul', 'dabul', 'babul', 'abul', 'kabul', 'babul', 'abul', 'mokbul'];

function removeDuplicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++) {
        const name = names[i];
        if(unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNamas = removeDuplicate(names);
console.log(uniqueNamas);