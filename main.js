// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

//////////1

// let birthday = new Date(prompt('Dogum tarixinizi qeyd edin:'));
// setInterval(() => {
// let r=Math.trunc(Math.random()*255)
// let g=Math.trunc(Math.random()*255)
// let b=Math.trunc(Math.random()*255)
// let indi = new Date();
// let sira=[31557600000,262800000,86400000,3600000,60000,1000]
// let bos=[]
// let qaliq = indi - birthday;
// reng=`rgb(${r},${g},${b})`

// for (i=0;i<sira.length;i++){
//     data=qaliq/sira[i]
//     qaliq=qaliq-Math.trunc(data)*sira[i]
//     bos.push(Math.trunc(data))
// }
// let net=`${bos[0]} il ${bos[1]} ay ${bos[2]} Gün ${bos[3]} saat  ${bos[4]} dəqiqə ${bos[5]} saniyə`
// console.log(`%c${net}`, `color:${reng};`);

// },1000)

////////2
let search = prompt("Axtardığınız adı daxil edin:");
students = [
  {
    member_id: 1,
    group_id: 3,
    name: "Elvin",
    surname: "Bagirov",
    hobbies: "observing celestial objects",
    score: 99.8,
  },
  {
    member_id: 2,
    group_id: 2,
    name: "Mirqafar",
    surname: "Seyidov",
    hobbies: "Read books",
    score: 89,
  },
  {
    member_id: 3,
    group_id: 3,
    name: "Nuray",
    surname: "Abbasova",
    hobbies: "writing code",
    score: 91,
  },
  {
    member_id: 4,
    group_id: 2,
    name: "Nuray",
    surname: "Cəfərova",
    hobbies: "Play tennis",
    score: 80,
  },
  {
    member_id: 5,
    group_id: 1,
    name: "Yusif",
    surname: "Alcəfərov",
    hobbies: "counting money",
    score: 89,
  },
  {
    member_id: 6,
    group_id: 1,
    name: "Ayşə",
    surname: "Əhmədova",
    hobbies: "writing code",
    score: 91,
  },
];

const axtar = students.find((student) => student.name.toLowerCase.includes(search) );
if (axtar !== undefined) {
  console.log(axtar);
} else {
  console.log(`Telebe tapilmadi`);
}


// ///3
// let soz= prompt("soz daxil edin")
// let netice=''

// for (i=0;i<soz.length;i++){
//     netice+=soz[i]
//     console.log(netice)
// }