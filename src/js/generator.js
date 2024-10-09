document.addEventListener("DOMContentLoaded", function() {
    const passwordsList = document.querySelector('.main_block_passwords_list');
    const inputs = document.querySelectorAll('input');
    const exampleInput = document.querySelector("input[name='pass-example']")
    const submitButton = document.getElementById('submit-button');
        
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = `~!@-#$%^&*()_=+{}[];:\\'",.<>/?`;

    const uppercaseregex = '(?=.*[A-Z])';
    const lowercaseregex = '(?=.*[a-z])';
    const numbersregex = '(?=.*\\d)';
    const symbolsregex = `(?=.*[~!\-@#$%^&*()_=+{}\\[\\];:\\'",.<>/?])`;

    let passwords;

    generatePasswords();

    document.addEventListener("input", function() {
        generatePasswords();
    });

    submitButton.addEventListener("click", function() {
        generatePasswords();
        passwordsList.innerHTML = '';
        passwords.forEach((password, index) => {
            if (password === passwords[0]) return;
            let li = document.createElement('li');
            li.classList = 'main_block_passwords_list_item';
            li.textContent = password;
            passwordsList.appendChild(li);
            setTimeout(() => {
                li.classList.add('animated_item');
            }, (index-1) * 300);
        });
    });
    

    function generatePasswords() {
        let regexelements = '';
        let charset = '';
        let length = 0;
        let amount = 0;
        passwords = [];
        let example = '';

        inputs.forEach(input => {
            if (input === document.querySelector("input[name='pass-uppercase']")) {
                if(input.checked) {
                    charset += uppercaseLetters;
                    regexelements += uppercaseregex;
                }
            } else if (input === document.querySelector("input[name='pass-lowercase']")) {
                if(input.checked) {
                    charset += lowercaseLetters;
                    regexelements += lowercaseregex;
                }
            } else if (input === document.querySelector("input[name='pass-numbers']")) {
                if(input.checked) {
                    charset += numbers;
                    regexelements += numbersregex;
                }
            } else if (input === document.querySelector("input[name='pass-symbols']")) {
                if(input.checked) {
                    charset += symbols;
                    regexelements += symbolsregex;
                }
            } else if (input === document.querySelector("input[name='pass-length-num']")) {
                length = input.value;
            } else if (input === document.querySelector("input[name='pass-amount-num']")) {
                amount = input.value;
            }
        });

        let regex = new RegExp("^" + regexelements + ".*$");

        function checkPassword() {
            let password = '';
            for(let j = 0; j < length; j++) {
                password += charset.charAt(Math.random() * charset.length);
            }
            if (!(regex.test(password))) {
                checkPassword(password);
            } else {
                passwords.push(password);
            }
        }

        for (let i = 0; i <= amount; i++) {
            checkPassword();
        }

        example = passwords[0];
        exampleInput.value = example;
    }
});