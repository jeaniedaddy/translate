import React from 'react';
import Field from './Field';
import Button from './Button';

// add comment
class UserCreate extends React.Component {
    render(){
        return (
            <div className="ui form">
                <Field />
                <Button />
            </div>
        );
    }
}

export default UserCreate;