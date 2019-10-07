import React from 'react'

export default function LoginForm1(props) {
    const { onSubmit, onChange, values } = props
    if(!props.values ) return "wating for props"
    return (
        <div>
            <h3>Log in here:</h3>
            <form onSubmit={onSubmit}> 
                    <label>Name:
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
                        <button>Log In</button>
                </form>
        </div>
    )
}