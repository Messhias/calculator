import React,{Component} from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default props => (
    <View>
        <TextInput
            style={styles.input}
            placeholder='Resultado'
            editable={false}
        />
    </View>
);

const styles = StyleSheet.create({
    input: {
        padding: 20,
        height: 100,
        fontSize: 30
    }
});
