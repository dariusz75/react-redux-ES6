import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>About</h1>
                <p>This application uses React, Redux, Rect Router, and a variety of other libraries.</p>
            </div>
        );
    }
}

export default AboutPage;