// # Exercise - 4

// Topshiriq: Yoshini kunga, soatga, minutga va sekundga aylantirib beruvchi dastur tuzing. Prompt bilan yoshni userdan so’rashingiz kerak.

// Masalan:

// 1. Kiruvchi malumot: Yoshni kiriting: “20”
// 2. Chiquvchi malumot: 1. 20 → 20*365 = 7300 kun;  20*365*24 = 175200 soat; 20*365*24*60 = 10512000 minut; 20*365*24*60*60 = 630720000 sekund

let age = Number(prompt(`Yoshingizni kiriting`));
a = age * 365; // kun
b = a * 24; // soat
c = b * 60; // minut
d = c * 60; // sekund
console.log(`Siz ${age} yosh kiritdingiz . Bu :`);
console.log(`${a} kun`);
console.log(`${b} soat`);
console.log(`${c} minut`);
console.log(`${d} sekund`);
