// const o={
// js:'JavaScript',
// cpp:'C++',
// rb:'ruby',
// swift:'swift by APPLE'
// }

// for(const k in o){
//     console.log(`${k} : ${o[k]}`);
// }

// const prog=["JS","C++","JAVA","PYTHON","R","RUBY"];
// for(const k in prog){
//     console.log(prog[k]);
// }
const c=["JS","RUBY","JAVA","PYTHON","CPP"];
//c.forEach((i)=>console.log(i));
// c.forEach((i,index,c)=>{
//     console.log(i,index,c)
// })
const code=[
    {
        languageName:"Javascript",
        languageFileName:"JS"
    },
    {
        languageName:"Python",
        languageFileName:"PY",
    },
    {
        languageName:"C++",
        languageFileName:"CPP"
    }
]
code.forEach((i)=>{console.log(`${i.languageName} :- ${i.languageFileName}`)})