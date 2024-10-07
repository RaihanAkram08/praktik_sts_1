function validateName(name) {
    if (
        validateNameNull(name) &&
        validateCharacter(name)
    ) {
        console.log("Nama Valid");
    } else {
        console.log("Nama Tidak Valid")
    }
}

function validateNameNull(name) { // Membuat Function untuk validasi apakah inputan kosong atau tidak
    if (name.trim() === "") {
        console.log("Nama tidak boleh kosong")
    } else {
        return true;
    }
}

function validateCharacter(name) { // Membuat function untuk validasi apakah inputan kosong lebih dari 2 karakter atau tidak
    if (name.length < 3) {
        console.log("Nama harus lebih dari 2 character")
    } else {
        return true;
    }
}

console.log(validateName("")); // Output : Nama tidak boleh kosong Nama Tidak Valid
console.log(validateName("Ra")); // Output : Nama harus lebih dari 2 character Nama Tidak Valid
console.log(validateName("Rai")); // Output : Nama Valid
console.log(validateName("Raihan")); // Output : Nama Valid