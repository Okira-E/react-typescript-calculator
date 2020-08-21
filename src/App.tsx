import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

type State = {
    input?: number | "";
};

class App extends React.Component<any, State> {
    constructor(props: undefined) {
        super(props);
        this.incrementInput = this.incrementInput.bind(this);
        this.state = {
            input: "",
        };
    }

    incrementInput(char: any) {
        if (this.state.input !== "") {
            this.setState({
                input: this.state.input + char,
            });
        } else if (this.state.input === "") {
            this.setState({
                input: char,
            });
        }
    }

    render() {
        return (
            <div className="app">
                <div className="calc-wrapper">
                    <Input>{this.state.input}</Input>
                    <div className="row">
                        <Button handleClick={this.incrementInput}>7</Button>
                        <Button handleClick={this.incrementInput}>8</Button>
                        <Button handleClick={this.incrementInput}>9</Button>
                        <Button handleClick={this.incrementInput}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.incrementInput}>4</Button>
                        <Button handleClick={this.incrementInput}>5</Button>
                        <Button handleClick={this.incrementInput}>6</Button>
                        <Button handleClick={this.incrementInput}>X</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.incrementInput}>1</Button>
                        <Button handleClick={this.incrementInput}>2</Button>
                        <Button handleClick={this.incrementInput}>3</Button>
                        <Button handleClick={this.incrementInput}>+</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.incrementInput}>.</Button>
                        <Button handleClick={this.incrementInput}>0</Button>
                        <Button handleClick={this.incrementInput}>=</Button>
                        <Button handleClick={this.incrementInput}>-</Button>
                    </div>
                    <ClearButton
                        handleClear={() => this.setState({ input: "" })}>
                        Clear
                    </ClearButton>
                </div>
            </div>
        );
    }
}

export default App;
