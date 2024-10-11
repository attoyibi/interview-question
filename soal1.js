// 1	Input	[2,4,6,5,3,1,7,9,10,8]	
// 	    Output	[9,5,3,1]	

// 	Kriteria		
// 	1. Selesai Max 15 Menit		
// 	2. Penggunaan code yang efektif dan efisien serta tidak ada hardcode		
// 	3. Hasil sesuai dengan output		
// 	4. Tolong sertakan code dan capture hasil running dari programmya		
console.log('soal 1');

const inputArray = [2, 4, 6, 5, 3, 1, 7, 9, 10, 8];
let outputArray = [];
// for (let index = 0; index < inputArray.length; index++) {
//     // const element = array[index];
//     if (inputArray[index] <= 9 && inputArray[index] >= 1) {
//         outputArray[index] = inputArray[index]
//     }
//     return outputArray;
// }
function rangeArray(start, end) {
    console.log('length =' + inputArray.length);
    for (let index = 0; index <= inputArray.length; index++) {
        // const element = array[index];
        if ((inputArray[index] >= start) || (inputArray[index] <= end)) {
            outputArray.push(inputArray[index])
            console.log(outputArray);
        }
    }
    // return outputArray;
}

const start = 10;
const end = 0;
console.log(rangeArray(start, end));

