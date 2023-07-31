//FOR in
const arr=[1,2,3,4,5];
for(const i in arr){
    console.log(arr[i]);
}
//MAPS
const m=new Map();
m.set('IN','India')
m.set('USA','United States Of America')
m.set('Fr','France')
//console.log(m);
for(const [k,v] of m){
    console.log(k, ':-' ,v);
}

const o={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for(const [k,v] of o){
    console.log(k, ":-" ,v);
}