// this is the main component handling the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Wrapper from './common/Wrapper';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Wrapper />
            </div>
        );
    }
}


export default App;
