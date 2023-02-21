import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export function SecondTab() {

    const [activeColorX, setActiveColorX] = useState('#87e7e1');
    const [activeColor0, setActiveColor0] = useState('#e8b5db');
    const [backgroundColor, setBackgroundColor] = useState('#121212');
    const [backgroundColorText, setBackgroundColorText] = useState('white');

    const changeColorX = () => {
        if (activeColorX === '#87e7e1') {
            setActiveColorX('red');
        } else {
            setActiveColorX('#87e7e1');
        }
    }

    const changeColor0 = () => {
        if (activeColor0 === '#e8b5db') {
            setActiveColor0('blue');
        } else {
            setActiveColor0('#e8b5db');
        }
    }

    const changeBackgroundColor = () => {
        if (backgroundColor === '#121212') {
            setBackgroundColor('white');
            setBackgroundColorText('#121212')
        } else {
            setBackgroundColor('#121212');
            setBackgroundColorText('white')
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor === "#121212"?"#121212":"white"}]}>
            <Pressable style={[styles.buttonChange, { borderColor: backgroundColor === "#121212"?"white":"#121212"}]} onPress={changeColorX}><Text style={{color: activeColorX, fontSize: 16}}>Change color Joueur X</Text></Pressable>
            <Pressable style={[styles.buttonChange, { borderColor: backgroundColor === "#121212"?"white":"#121212"}]} onPress={changeColor0}><Text style={{color: activeColor0, fontSize: 16}}>Change color Joueur 0</Text></Pressable>
            <Pressable style={[styles.buttonChange, { borderColor: backgroundColor === "#121212"?"white":"#121212"}]} onPress={changeBackgroundColor}><Text style={{color: backgroundColorText, fontSize: 16}}>Change background color</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        opacity: 0.9,
    },
    buttonChange: {
        width: 200,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        margin: 10,
    },
});