function validateEmail(email) {
    if (
        validateEmailNull(email) &&
        validateCharacter(email) &&
        validateSymbol(email)
    ) {
        console.log("Email Valid");
    } else {
        console.log("Email Tidak Valid")
    }
}

function validateEmailNull(email) { // Membuat Function untuk validasi apakah inputan kosong atau tidak
    if (email.trim() === "") {
        console.log("Email tidak boleh kosong")
    } else {
        return true;
    }
}

function validateCharacter(email) { // Membuat function untuk validasi apakah inputan lebih dari 5 karakter atau tidak
    if (email.length < 5) {
        console.log("Email minimal berisi 5 character")
    } else {
        return true;
    }
}

function validateSymbol(email) {
    if (
        !email.includes("@")  
    ) {
        console.log("Email Harus Berisi Character @")
    } else {
        return true;
    }
}

console.log(validateEmail("")); // Output : Email tidak boleh kosong Email Tidak Valid
console.log(validateEmail("raihan")); // Output : Email minimal berisi 5 character Email Tidak Valid
console.log(validateEmail("raihan@com")); // Output : Email Valid
console.log(validateEmail("raihan@example.com")); // Output : Email Valid