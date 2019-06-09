import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // static contextType = LanguageContext
    renderButton= (color)=> {
        const buttonColor = color==="red"? 'negative': 'primary';
        return (
            <LanguageContext.Consumer>
                {value=>{
                    return (
                        <div>
                            <button className={`ui button ${buttonColor}`}>{value}</button>
                        </div>
                    );
                }}
            </LanguageContext.Consumer>
        );
    };

    render(){
        const text = this.context === 'english' ? 'Submit' : 'Voorgent';
        return (
            <ColorContext.Consumer>
                {color =>  this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;