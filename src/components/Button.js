import React from 'react';
import languageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    static contextType = languageContext

    render(){
        const text = this.context === 'english' ? 'Submit' : 'Voorgent';
        return (
            <div>
                <button className="ui button primary">{text}</button>
            </div>
        );
    }
}

export default Button;