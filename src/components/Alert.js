import React from 'react';

export default function Alert(props) {
    if(props.alert){
        return (
            <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{((props.alert.type).charAt(0).toUpperCase())+((props.alert.type).slice(1).toLowerCase())}: </strong>{props.alert.message}
                </div>
            </div>
        );    
    } else{
        return(
            <></>
        );
    }
}
