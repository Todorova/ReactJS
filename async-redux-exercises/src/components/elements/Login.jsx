import React from 'react';

let LoginForm = (props) => {
    return (
        <section id="viewLogin">
            <div class="content">
                <form id="formLogin" class="form">
                    <label>Username</label>
                    <input onChange={(e) => props.dataFunc(e)} name="username" type="text" />
                    <label>Password</label>
                    <input onChange={(e) => props.dataFunc(e)} name="password" type="password" />
                    <input id="btnLogin" value="Sign In" type="submit" />
                </form>
                <button onClick={() => { props.viewFunc()}}>Register</button>
            </div>
        </section>
    )
}

export default LoginForm;



