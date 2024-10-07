function validateBirthdate(date) {
    if (
        validateDateNull(date) &&
        validateCharacter(date)
    ) {
        console.log("Tanggal Lahir Valid");
    } else {
        console.log("Tanggal Lahir Tidak Valid")
    }
}

function validateDateNull(date) { // Membuat Function untuk validasi apakah inputan kosong atau tidak
    if (date.trim() === "") {
        console.log("Tanggal Lahir tidak boleh kosong")
    } else {
        return true;
    }
}

function validateCharacter(date) { // Membuat function untuk validasi apakah tanggal lahir lebih kecil dari tanggal hari ini
const dateYYYYMMDD = new Date();
const day = String(dateYYYYMMDD.getDate()).padStart(2, '0'); 
const month = String(dateYYYYMMDD.getMonth() + 1).padStart(2, '0'); 
const year = dateYYYYMMDD.getFullYear(); 
date = `${year}-${month}-${day}`;

console.log(date); // Output 18/09/2024
    if (date < new Date()) {
        console.log("Tanggal lahir tidak boleh lebih daripada hari ini")
    } else {
        return true;
    }
}

console.log(validateBirthdate("")); // Output : Email tidak boleh kosong Email Tidak Valid
console.log(validateBirthdate("2025-05-01")); // Output : Email minimal berisi 5 character Email Tidak Valid
console.log(validateBirthdate("raihan@com")); // Output : Email Valid
console.log(validateBirthdate("2005-05-01")); // Output : Email Valid