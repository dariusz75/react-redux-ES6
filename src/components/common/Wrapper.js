import React from 'react';
import UserPageContent from './UserPageContent';
import SiteBar from './SiteBar';

class Wrapper extends React.Component {
    render () {
        return (
            <div id="wrapper">
                <SiteBar />
                <UserPageContent />
            </div>
        );
    }
}

export default Wrapper;
