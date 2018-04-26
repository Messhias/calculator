import React from 'react';
import {
    Picker,
    StyleSheet
} from 'react-native';

export default class Operation extends React.Component {


    render() {
        return (
            <Picker
                style={styles.picker}
                selectedValue={this.props.operationValue}
                onValueChange={operationValue => {
                    this.props.operationValueChange(operationValue);
                }}
            >
                <Picker.Item label='Soma' value='sum' />
                <Picker.Item label='Subtração' value='sub' />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    picker: {
        marginTop: 15,
        marginBottom: 15
    }
});
