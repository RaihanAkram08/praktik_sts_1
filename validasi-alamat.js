function validateAddress(address) {
    if (
        validateAddressNull(address) &&
        validateCharacter(address)
    ) {
        console.log("Alamat Valid");
    } else {
        console.log("Alamat Tidak Valid")
    }
}

function validateAddressNull(address) { // Membuat Function untuk validasi apakah inputan kosong atau tidak
    if (address.trim() === "") {
        console.log("Alamat tidak boleh kosong")
    } else {
        return true;
    }
}

function validateCharacter(address) { // Membuat function untuk validasi apakah inputan kosong lebih dari 2 karakter atau tidak
    if (address.length < 10) {
        console.log("Alamat minimal berisi 10 character")
    } else {
        return true;
    }
}

console.log(validateAddress("")); // Output : Alamat tidak boleh kosong Alamat Tidak Valid
console.log(validateAddress("Jl. Merd")); // Output : Alamat minimal berisi 10 character Alamat Tidak Valid
console.log(validateAddress("Jl. Merdeka No.10")); // Output : Alamat Valid
console.log(validateAddress("Jl. Ahmad Yani")); // Output : Alamat Valid