const zipCode = document.querySelector("#zip-code");
zipCode.addEventListener("input", function (event) {
	const zipCodeLength = zipCode.value.length;
	if (zipCodeLength !== 5) {
		zipCode.setCustomValidity("Country zip code needs to be 5 digits");
	} else {
		zipCode.setCustomValidity("");
	}
});

const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");

passwordConfirm.addEventListener("input", function () {
	if (passwordConfirm.value !== password.value) {
		passwordConfirm.setCustomValidity("Passwords should match");
	} else {
		passwordConfirm.setCustomValidity("");
	}
});
