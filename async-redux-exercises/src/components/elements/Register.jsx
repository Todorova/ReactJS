import React from 'react';


let executeSubmit = (e, payload, func) => {

    e.preventDefault();
    delete payload.login;
    func(payload)
}

let RegisterForm = (props) => {
    console.log(props.userProps)
    return (
        <section id="viewRegister">
            <div class="content">
                <form onSubmit={(e)=>{executeSubmit(e, props.userProps, props.registerFunc)}} class="form" id="formRegister">
                    <label>Username</label>
                    <input onChange={(e) => props.dataFunc(e)} name="username" type="text" />
                    <label>Password</label>
                    <input onChange={(e) => props.dataFunc(e)} name="password" type="password" />
                    <label>Repeat Password</label>
                    <input onChange={(e) => props.dataFunc(e)} name="repeatPass" type="password" />
                    <input id="btnRegister" value="Register" type="submit" />
                </form>
                <button onClick={() => { props.viewFunc()}}>Log in</button>
            </div>
        </section>
    )
}

export default RegisterForm;