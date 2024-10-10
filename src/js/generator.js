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

        let createdPasswords = document.querySelectorAll(".main_block_passwords_list_item");
    
        createdPasswords.forEach((password) => {
            password.addEventListener("click", () => {
                let passwordValue = password.textContent.split(' ')[0];
                navigator.clipboard.writeText(passwordValue);
                let message = document.createElement('span');
                message.classList ='main_block_passwords_list_item_message';
                message.innerHTML = `
                     Copied! 
                    <svg width="98" height="85" viewBox="0 0 98 85" fill="none" xmlns="http://www.w3.org/2000/svg" class="main_block_passwords_list_item_message_arrow">
                        <path d="M53.3301 82.5C51.4056 85.8333 46.5944 85.8333 44.6699 82.5L1.36861 7.49999C-0.555892 4.16666 1.84973 -9.36737e-06 5.69874 -9.03088e-06L92.3013 -1.45985e-06C96.1503 -1.12336e-06 98.5559 4.16667 96.6314 7.5L53.3301 82.5Z" fill="#222222"/>
                    </svg>
                `;
                password.appendChild(message);
                setTimeout(() => {
                    message.classList.add('active_message');
                }, 300);
                setTimeout(() => {
                    message.classList.add('active_message');
                }, 1700);
                setTimeout(() => {
                    message.remove('active_message');
                }, 2000);
            });
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
            if(length < 3) {
                return;
            };
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
        if(length < 3) {
            exampleInput.value = 'Error: Password must be at least 3 characters!'
        } else {  
            exampleInput.value = example;
        }
    }
});