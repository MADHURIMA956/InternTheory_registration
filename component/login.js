function loginForm(x,y,z,a){
    return `  <div class="login">
    <div class="inner-box">
        <div class="buttons">
            <div id='studentbutton'>
                <button ><a href="loginStudent.html">Student</a></button>
            </div>
            <div id='companybutton'>
            <button ><a href="loginCompany.html">Company</a></button>
            </div>
        </div>
        <div>
            <h2 id='loginh2'>Login</h2>

        </div>
        <div class='loginpara'>
            <p>If you are a ${x} looking to hire ${y}, please login as a ${x} by clicking <a
                    href=${z}>here</a>
            </p>
        </div>
        <div class="fbGoogle bg-icon-color1">
            <a href="">
                <span>
                    <img id='iconImg' class="iconImg"
                        src="https://www.interntheory.com/assets/iconsLogos/facebook-circular-logo.svg" height="25">
                    <span id='span' style="margin-left: 20%;">SIGNIN WITH FACEBOOK</span>
                </span>
            </a>
        </div>
        <div id='gooleicon' class="fbGoogle bg-icon-color2">
            <a href="">
                <span>
                    <img class="iconImg" src="https://www.interntheory.com/assets/iconsLogos/googlelogo.svg"
                        height="25">
                    <span style="margin-left: 20%;">SIGNIN WITH GOOGLE</span>
                </span>
            </a>
        </div>
        <div class="or">
            <h5>OR</h5>
        </div>
        <div>
            <form class="form">
                <!-- <label for="email">Email/Number</label> -->
                <input aria-invalid="false" type="text" placeholder="Email/Number*" id="email" required />
                <!-- <label for="password">Password</label> -->
                <input type="password" placeholder="Password*" id="password" required />
                <div class="not_account">
                <p>
                    Don't have an account?
                    <span><a href=${a}>Create your account</a></span>
                    <!-- <span class="color_blue" onclick="create_account()">Create your account</span> -->
                </p>
            </div>
            <button id="login_btn" class="login_btn">LOGIN</button>
            </form>
        </div>
      
    </div>
</div>`
}

export default loginForm;