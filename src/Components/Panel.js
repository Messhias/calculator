import React,{ Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import Input from './Input';
import Command from './Command';
import Operation from './Operation';

const Panel = props => (
    <View>
        <Input />
        <Operation />
        <Command />
    </View>
);


export { Panel };
