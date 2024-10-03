function kelompokkanBilangan(bilangan) {
  if (bilangan % 4 == 0) {
    console.log(`${bilangan}  Bilangan genap dan bisa dibagi 4`);
  } else if (bilangan % 2 == 0) {
    console.log(`${bilangan}  Bilangan genap tetapi tidak bisa dibagi 4`);
  } else {
    console.log(`${bilangan}  Bilangan ganjil`);
  }
}

export { kelompokkanBilangan };