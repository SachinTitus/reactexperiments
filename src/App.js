import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id:1, value: 10 },
            { id:2, value: 1 },
            { id:3, value: 7 },
            { id:4, value: 8 }
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value++;
        this.setState({ counters});
    };
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c=> c.id !== counterId)
        this.setState({counters});
    };
    handleAddition = () => {
        const counters = [...this.state.counters];
        const nextIndex = counters.length + 1;
        const counter = {id:nextIndex, value:10};
        counters.push(counter);
        console.log(counters);
        this.setState({counters});
    };
  render() {
    return (
        <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}
                    onReset={this.handleReset} onAdd = {this.handleAddition}
            />
            <main className="container">
                <Counters onIncrement={this.handleIncrement}
                          onDelete={this.handleDelete}
                          counters = {this.state.counters}
                />
            </main>
        </React.Fragment>
    );
  }
}

export default App;
