import React from 'react'

export default function CreateGalaxy(props) {

    const { onChange, onSubmit, values } = props

    return( <div>
                <h3>Create a galaxy:</h3>
                <form onSubmit={onSubmit}> 
                    <label>Name:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.title}
                            name='title'
                            placeholder='name'
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
    )
}