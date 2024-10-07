function validatePhoneNumber(phone) {
    if (
        validatePhoneNumberNull(phone) &&
        validateCharacter(phone) &&
        validateNumber(phone)
    ) {
        console.log("Nomor HP Valid");
    } else {
        console.log("Nomor HP Tidak Valid")
    }
}

function validatePhoneNumberNull(phone) { // Membuat Function untuk validasi apakah inputan kosong atau tidak
    if (phone.trim() === "") {
        console.log("Nomor HP tidak boleh kosong")
    } else {
        return true;
    }
}

function validateCharacter(phone) { // Membuat function untuk validasi apakah inputan kosong lebih dari 10 karakter atau tidak
    if (phone.length < 10 && phone.length > 13) {
        console.log("Nomor HP minimal berisi 10 character dan harus kurang dari 14 character")
    } else {
        return true;
    }
}

function validateNumber(phone) {
    if (typeof phone !== "number") {
        console.log("Nomor HP hanya boleh berisi angka")
    } else {
        return true;
    }
}

console.log(validatePhoneNumber("")); // Output : Nomor HP tidak boleh kosong Nomor HP Tidak Valid
console.log(validatePhoneNumber("0812345")); // Output : Nomor HP minimal berisi 10 character dan harus kurang dari 14 character Nomor HP Tidak Valid
console.log(validatePhoneNumber("0812345abc")); // Output : Nomor HP Valid
console.log(validatePhoneNumber("08123456789")); // Output : Nomor HP Valid