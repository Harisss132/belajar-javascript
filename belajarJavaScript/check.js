function categorizeNumber(input) {
    // 1. Validasi input: harus number dan tidak ada desimal
    if (typeof input !== 'number' || input % 1 !== 0) {
      throw new Error('Input harus berupa bilangan ganjil, genap, nol, negatif, dan prima bukan huruf/angka');
    }
    if (input === 0) return 'Nol';
    if (input < 0) return 'Negative';
    if (isPrima(input)) return 'Prima';
    if (input % 2 === 0) return 'Genap';
    return 'ganjil';
  }

function isPrima(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
