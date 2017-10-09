// this is the main component handling the App template used on every page
impotr React, {PropTypes} from 'react'; 

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>header to go hereeeee</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;