function validateTC(tcNumber) {
  const isAllDigits = /^\d{11}$/.test(tcNumber);
  let totalOdd = 0,
    totalEven = 0;

  if (!isAllDigits) return false; // Tüm karakterlerin rakam olduğunu kontrol et

  for (let i = 0; i < 9; i++) {
    const digit = parseInt(tcNumber[i], 10);
    if (i % 2 === 0) totalOdd += digit; // Tek haneleri topla
    else totalEven += digit; // Çift haneleri topla
  }

  const digit10 = (((totalOdd * 7 - totalEven) % 10) + 10) % 10;
  const digit11 = (totalOdd + totalEven + parseInt(tcNumber[9], 10)) % 10;

  return tcNumber[9] == digit10 && tcNumber[10] == digit11;
}

module.exports = validateTC;
