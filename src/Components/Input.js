import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import Number from './Number';

export default props => (
    <View style={styles.container}>
        <Number
            refreshNumberValue={props.refreshNumberValue}
            num={props.num1}
            name='num1'
        />
        <Number
            refreshNumberValue={props.refreshNumberValue}
            num={props.num2}
            name='num2'
        />
    </View>
);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
