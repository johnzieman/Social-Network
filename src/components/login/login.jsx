import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { connect } from "react-redux";
import { login } from "../../redux file/authReducer";
import { Redirect } from "react-router";


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input} /> </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'} /> </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> Remember me </div>
            <div> <button>Submit</button> </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);    
    } 
    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return <div>
        <p>Login here</p>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);