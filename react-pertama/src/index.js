import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
  
function Halo(){
    return(
        <div>
            <h1>belajar fungsi reactjs</h1>
            <h2>belajar fungsi reactjs</h2>
        </div>
    );
}

class Hallo extends React.Component{
    constructor(){
        super();
        this.state={
            title: "ini judul",
            subtitle: "ini subjudul"
        };
    }

    ubahJudul = () => {
        this.setState({
            title: "judul berubah"
        });
    }   

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <button onClick={this.ubahJudul}>ubah judul</button>
            </div>
        );
    }
}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hallo />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

