import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default props => (
    <View style={styles.top}>
        <Text style={styles.text}>
            Calculadora
        </Text>
    </View>
);


const styles = StyleSheet.create({
    top: {
        backgroundColor: '#2196F3',
        padding: 35,
        alignItems: 'center'
    },
    text: {
        paddingTop: 20,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
});
