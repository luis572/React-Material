import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Login } from "./components/Login";
import { TodoApp } from "./components/TodoApp";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState({
            isLoggedIn: true
        });
    }
    render() {

        const LoginView = () => (
            <Login handleLogin={this.handleLogin} />
        );

        const TodoAppView = () => (
            <TodoApp />
        );
        var redirect;
        this.state.isLoggedIn===false && localStorage.getItem("isLoggedIn") === null ? redirect = <Redirect to="/" /> : redirect = <Redirect to="/todo" />;
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br />
                    <br />
                    <div>
                        {redirect}
                        <Route path="/todo" component={TodoAppView} />
                        <Route exact path="/" component={LoginView} />
                    </div>
                </div>
            </Router >
        );
    }
}
export default App;
