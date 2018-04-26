import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default class Visor extends React.Component {

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Resultado'
                    editable={false}
                    value={this.props.result}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 20,
        height: 100,
        fontSize: 30
    }
});
