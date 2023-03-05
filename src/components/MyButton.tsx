import * as React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
} from 'react-native';

interface MyButtonsProps extends TouchableOpacityProps {
    title: string;
}

function MyButton({title, style, ...rest}: MyButtonsProps) {
    return (
        <TouchableOpacity style={[styles.button, style]} {...rest}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default MyButton

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#550AB1',
        padding: 20,
        borderRadius: 8,
    },
})