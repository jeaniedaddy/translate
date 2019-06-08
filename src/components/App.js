import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';


class App extends React.Component {
    state = { language: 'english'};

    changeLanguage(language){
        this.setState({ language }); 
    }

    render(){
        return(
            <div  className="ui container">
                select a language 
                <i className="flag us" onClick={()=> this.changeLanguage('english')}/>
                <i className="flag nl" onClick={()=> this.changeLanguage('dutch')}/>
                
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
