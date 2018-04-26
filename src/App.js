import React from 'react';
import { View } from 'react-native';

import { Header, Panel, Result } from './Components';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '0',
            num2: '0',
            operationValue: '',
            result: ''
        };
        this.calc = this.calc.bind(this);
        this.refreshNumberValue = this.refreshNumberValue.bind(this);
        this.operationValueChange = this.operationValueChange.bind(this);
    }

    // sum action
    sumAction() {
        return parseFloat(this.state.num1) + parseFloat(this.state.num2);
    }

    // sub action
    subAction() {
        return parseFloat(this.state.num1) - parseFloat(this.state.num2);
    }

    // make the operation
    calc() {
        let result = 0;
        switch (this.state.operationValue) {
            case 'sum':
                result = this.sumAction();
            break;

            case 'sub':
                result = this.subAction();
            break;
            default:
                return;
        }
        console.log(result);
        this.setState({ result: result.toString() });
    }

    // refresh numbers values
    refreshNumberValue(value, stateRef) {
        const obj = {};
        obj[stateRef] = value;
        this.setState(obj);
    }

    // function to handle on change operation
    operationValueChange(operationValue) {
        this.setState({ operationValue });
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Header />
                <Result
                    result={this.state.result}
                />
                <Panel
                    operationValueChange={this.operationValueChange}
                    refreshNumberValue={this.refreshNumberValue}
                    calc={this.calc}
                    num1={this.state.num1}
                    num2={this.state.num2}
                />
            </View>
        );
    }
}
