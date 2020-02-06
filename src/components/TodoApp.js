import React, { Component } from 'react';
import { TodoList } from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div className="App">


                <br />
                <br />
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>


                    <TextField
                        id="text"
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        variant="outlined"
                        label="Test"
                    />

                    <br />
                    <br />


                    <TextField
                        id="priority"
                        label="Priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}
                    />


                    <br />
                    <br />

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br />
                <br />
                <TodoList todoList={this.state.items} />
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}