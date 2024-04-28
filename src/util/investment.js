// Fungsi ini mengharapkan sebuah objek JavaScript sebagai argumen
// Objek tersebut seharusnya berisi properti-properti berikut
// - initialInvestment: Jumlah investasi awal
// - annualInvestment: Jumlah yang diinvestasikan setiap tahun
// - expectedReturn: Tingkat pengembalian yang diharapkan (tahunan)
// - duration: Durasi investasi (jangka waktu)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // identifikasi tahun
      interest: interestEarnedInYear, // jumlah bunga yang diperoleh pada tahun ini
      valueEndOfYear: investmentValue, // nilai investasi pada akhir tahun
      annualInvestment: annualInvestment, // investasi yang ditambahkan pada tahun ini
    });
  }

  return annualData;
}

// Objek formatter dibuat menggunakan API Intl yang disediakan oleh browser
// Objek ini menawarkan metode "format()" yang dapat digunakan untuk memformat angka sebagai mata uang
// Contoh Penggunaan: formatter.format(1000) => menghasilkan "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
