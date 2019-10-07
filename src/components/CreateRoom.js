import React from 'react'

export default function AdCreateFrom(props) {

    const { onChange, onSubmit, values } = props

    return( <div>
                <h3>Create a room:</h3>
                <form onSubmit={onSubmit}> 
                    <label>Title:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.title}
                            name='title'
                            placeholder='title'
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
    )
}