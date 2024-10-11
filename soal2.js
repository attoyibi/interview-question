// 	Input	aaabbcccaaaac
// 	Output	"a = 3 
// b = 2 
// c = 3 
// a = 4 
// c = 1"

// 	Kriteria	
// 	1. Selesai Max 10 Menit	
// 	2. Penggunaan code yang efektif dan efisien serta tidak ada hardcode	
// 	3. Hasil sesuai dengan output	
// 	4. Tolong sertakan code dan capture hasil running dari programmya	

const input = 'aaabbcccaaaac';
const inputArray = input.split('');
// console.log(inputArray);
// let varA = 0;
// let varB = 0;
// let varC = 0;
// let objVar = {};
// console.log("==========");
// for (let index = 0; index < inputArray.length; index++) {
//     const element = inputArray[index];
//     if (inputArray[index] == 'a') {
//         varA++;
//     } else if (inputArray[index] == 'b') {
//         varB++;
//     } else if (inputArray[index] == 'c') {
//         varC++;
//     }

// }   
// console.log('a =', varA);
// console.log('a =', varB);
// console.log('a =', varC);


function hitungKaraketer(inputArray, karakter) {
    let count = 0;
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] == karakter) {
            // console.log('masuk if');
            count++;
        }
        // console.log('inputArray = ' + inputArray);
    }
    return count;
}
console.log(hitungKaraketer(inputArray, 'a'));
console.log(hitungKaraketer(inputArray, 'b'));
console.log(hitungKaraketer(inputArray, 'c'));
