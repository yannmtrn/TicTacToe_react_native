import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useColorJoueurXValue, useColorJoueurXSetter, useColorJoueur0Value, useColorJoueur0Setter, useColorBackgroundValue, useColorBackgroundSetter, useColorBackgroundTxtValue, useColorBackgroundTxtSetter } from "../provider/GameProvider";

export function SecondTab() {

    const activeColorX = useColorJoueurXValue();
    const setActiveColorX = useColorJoueurXSetter();

    const activeColor0 = useColorJoueur0Value();
    const setActiveColor0 = useColorJoueur0Setter();

    const backgroundColor = useColorBackgroundValue();
    const setBackgroundColor = useColorBackgroundSetter();

    const backgroundColorText = useColorBackgroundTxtValue();
    const setBackgroundColorText = useColorBackgroundTxtSetter();

    const [image, setImage] = useState(null);

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

     const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <>
        <View style={[styles.profilePictureGlobal, { backgroundColor: backgroundColor === "#121212"?"#121212":"white"}]}>
            <Image
                style={[styles.profilePictureSlot, { borderColor: useColorBackgroundTxtValue()}]}
                source= {{
                    uri: image,
                }}
            />
            <Button title="Modifier" onPress={pickImage} />
        </View>
        <View style={[styles.container, { backgroundColor: backgroundColor === "#121212"?"#121212":"white"}]}>
            <Pressable style={[styles.buttonChange, { borderColor: backgroundColor === "#121212"?"white":"#121212"}]} onPress={changeColorX}><Text style={{color: activeColorX, fontSize: 16}}>Change color Joueur X</Text></Pressable>
            <Pressable style={[styles.buttonChange, { borderColor: backgroundColor === "#121212"?"white":"#121212"}]} onPress={changeColor0}><Text style={{color: activeColor0, fontSize: 16}}>Change color Joueur 0</Text></Pressable>
            <Pressable style={[styles.buttonChange, { borderColor: backgroundColor === "#121212"?"white":"#121212"}]} onPress={changeBackgroundColor}><Text style={{color: backgroundColorText, fontSize: 16}}>Change background color</Text></Pressable>
        </View>
        </>
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
    profilePictureGlobal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },
    profilePictureSlot: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        width: 100,
        height: 100,
    },
});