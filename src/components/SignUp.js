import React from 'react'

export default function SignUp(props) {
    const { onSubmit, onChange, values } = props
    if(!props.values ) return "wating for props"
    return (
        <div>
            <h3>Sign up here:</h3>
            <form onSubmit={onSubmit}> 
                    <label>Name:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.username}
                            name='username'
                            placeholder='name'
                        />
                    </label>
                    <label>Email:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.email}
                            name='email'
                            placeholder='email'
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.password}
                            name='password'
                            placeholder='password'
                        />
                    </label>
                        <button>Sign Up</button>
                </form>
        </div>
    )
}