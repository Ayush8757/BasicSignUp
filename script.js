const passicon = document.querySelectorAll('.eyes'),
      password = document.querySelectorAll('.password'),
      container = document.querySelector('.container'),
      signup = document.querySelector('.signup-link'),
      login = document.querySelector('.login-link');

      passicon.forEach(eyeIcon=>{
        eyeIcon.addEventListener('click', ()=> {
            password.forEach(password =>{
                if(password.type === 'password') {
                    password.type = 'text';

                    passicon.forEach(icon  => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    password.type = 'password';

                    passicon.forEach(icon  => {
                        icon.classList.replace( "uil-eye","uil-eye-slash");
                    })
                }
            })
      })
    })

    signup.addEventListener('click', ()=> {
        container.classList.add("active");
    })

    login.addEventListener('click', ()=> {
        container.classList.remove("active");
    })