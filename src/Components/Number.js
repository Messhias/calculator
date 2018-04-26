import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

export default props => (
    <TextInput
        style={styles.input}
        value={props.num}
        onChangeText={val => props.refreshNumberValue(val, props.name)}
    />
);

const styles = StyleSheet.create({
    input: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        height: 80,
        width: 140,
        fontSize: 20
    }
});
