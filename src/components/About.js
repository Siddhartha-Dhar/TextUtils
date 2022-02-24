import React from 'react'

export default function (props) {
    return (
        <>
            <div>
                <h2 style={{ color: (props.mode == 'light') ? 'black' : 'white' }}>About TextUtils</h2>
                <p style={{ color: (props.mode == 'light') ? 'black' : 'white' }}>TextUtils is a text based utility app.<br />
                    Edit and Fromat your text in very simple hastle free and productive way...</p>
            </div>
        </>
    )
}
