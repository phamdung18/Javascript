const form = document.getElementById("loginForm");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        form.addEventListener("submit", function (event) {

            const checkEmail = emailInput.value;
            const checkPass = passwordInput.value;
            event.preventDefault();
            const user = {
                email: checkEmail,
                password: checkPass,
            };

            console.log(user);

        });