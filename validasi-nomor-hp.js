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

function validateCharacter(phone) { // Membuat function untuk validasi apakah inputan lebih dari 10 karakter atau tidak
    if (phone.length < 10 && phone.length > 13) {
        console.log("Nomor HP harus berisi antara 10 sampai 13 karakter")
    } else {
        return true;
    }
}

// function validateNumber(phone) {
//     if (!Number.isInteger(phone)) {
//         console.log("Nomor HP hanya boleh berisi angka");
//     } else {
//         return true;
//     }
// }

function validateNumber(phone) {
    if (phone.includes("abcdefghijklmnopqrstuvwxyz")) {
        console.log("Nomor HP hanya boleh berisi angka");
    } 
}

console.log(validatePhoneNumber("")); // Output : Nomor HP tidak boleh kosong Nomor HP Tidak Valid
console.log(validatePhoneNumber("08123")); // Output : Nomor HP minimal berisi 10 character dan harus kurang dari 14 character Nomor HP Tidak Valid
console.log(validatePhoneNumber("0812345abc")); // Output : Nomor HP hanya boleh berisi angka Nomor HP Tidak Valid
console.log(validatePhoneNumber("08123456789")); // Output : Nomor HP Valid