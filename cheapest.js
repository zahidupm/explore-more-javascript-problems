const phones = [
    { name: 'Samsumg',camera: 12,storage: '32gb',  price: 36000, color: 'silver'},
    { name: 'Oppo',camera: 12,storage: '32gb',  price: 31000, color: 'silver'},
    { name: 'iphone',camera: 12,storage: '32gb',  price: 82000, color: 'silver'},
    { name: 'Xiaomi',camera: 12,storage: '32gb',  price: 44000, color: 'silver'},
    { name: 'Walton',camera: 12,storage: '32gb',  price: 34000, color: 'black'},
    { name: 'Nokia',camera: 12,storage: '32gb',  price: 32200, color: 'golden'},
    { name: 'HTC',camera: 12,storage: '32gb',  price: 48000, color: 'silver'},
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);