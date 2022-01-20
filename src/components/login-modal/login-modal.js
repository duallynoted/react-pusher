import React from 'react';
import PropTypes from 'prop-types';
import './login-modal.css';

export default function LoginModal(props) {
    const { handleLogin, handleUsernameChange, username } = props

    return (
        <div className='login-modal-wrapper'>
            <div className='login-modal'>
                <h1 className='login-header'>Login</h1>
                <form
                    className='login-form'
                    onSubmit={handleLogin}>
                    <input className='login-username'
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        type='text'
                        value={username} />
                    <button className='login-button'
                        type='submit'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

LoginModal.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    username: PropTypes.string
}