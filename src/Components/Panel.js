import React from 'react';
import {
    View
} from 'react-native';

import Input from './Input';
import Command from './Command';
import Operation from './Operation';


export default props => (
    <View>
        <Input
            num1={props.num1}
            num2={props.num2}
            refreshNumberValue={props.refreshNumberValue}
        />
        <Operation
            operationValue={props.operationValue}
            operationValueChange={props.operationValueChange}
        />
        <Command calc={props.calc} />
    </View>
);
