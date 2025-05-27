// Algoritma Test
// 1. Terdapat string "NEGIE1", silahkan reverse alpahabet nya dengan angka tetap di akhir kata Hasil= "EIGEN1"
// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, Jika ada kata dengan panjang yang sama silahkan ambil salah satu
// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN

// Jawaban:
// No.1
const reverseAlphabet = (str) => {
  const reversed = str.slice(0, -1).split("").reverse().join("");
  const lastChar = str.slice(-1);

  return reversed + lastChar;
};

const input = "NEGIE1";
const result1 = reverseAlphabet(input);
console.log(`Hasil no 1 = ${result1}`);

// No.2
const findWord = (sentence) => {
  const words = sentence.split(" ");
  let longWord = "";

  for (const word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }

  return longWord;
};
const input2 = "Saya sangat senang mengerjakan soal algoritma";
const result2 = findWord(input2);
console.log(`Hasil no 2 = ${result2}`);

// No.3
const countQuery = (inputArray, queryArray) => {
  const occurrences = {};

  for (const query of queryArray) {
    occurrences[query] = 0;
    for (const item of inputArray) {
      if (item === query) {
        occurrences[query]++;
      }
    }
  }

  return occurrences;
};
const INPUT = ["xc", "dz", "bbb", "dz"];
const ARRAY = ["bbb", "ac", "dz"];
const result3 = countQuery(INPUT, ARRAY);
console.log("Hasil no 3 =", result3);

// No.4
const subtractDiagonal = (Matrix) => {
  const n = Matrix.length;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < n; i++) {
    primaryDiagonal += Matrix[i][i];
    secondaryDiagonal += Matrix[i][n - 1 - i];
  }

  return primaryDiagonal - secondaryDiagonal;
};
Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
const result4 = subtractDiagonal(Matrix);
console.log(`Hasil no 4 = ${result4}`);

// cara menjalankan yaitu dengan mengetikan `cd AlgoritmaTest`
// pada terminal, lalu ketik `node index.js` untuk menjalankan kode ini
