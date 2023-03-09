import React, { useState } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useColorJoueurXValue, useColorJoueurXSetter, useColorJoueur0Value, useColorJoueur0Setter, useColorBackgroundValue, useSetDarkTheme, useColorBackgroundTxtValue } from "../provider/GameProvider";
import { ThemeButton } from '../components/ThemeButton';

export function SecondTab() {
    const activeColorX = useColorJoueurXValue();
    const setActiveColorX = useColorJoueurXSetter();

    const activeColor0 = useColorJoueur0Value();
    const setActiveColor0 = useColorJoueur0Setter();

    const setDarkTheme = useSetDarkTheme();
    const backgroundColor = useColorBackgroundValue();
    const backgroundColorText = useColorBackgroundTxtValue();

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
        setDarkTheme(currentThemeValue => !currentThemeValue)
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
        <View style={[styles.profilePictureGlobal, { backgroundColor }]}>
            <Image
                style={[styles.profilePictureSlot, { borderColor: backgroundColorText}]}
                source= {{
                    uri: image,
                }}
            />
            <Button title="Modifier" onPress={pickImage} />
        </View>
        <View style={[styles.container, { backgroundColor: backgroundColor}]}>
            <ThemeButton onPress={changeColorX} title="Change color Joueur X"  textColor={activeColorX} />
            <ThemeButton onPress={changeColor0} title="Change color Joueur 0"  textColor={activeColor0} />
            <ThemeButton onPress={changeBackgroundColor} title="Change background color" textColor={backgroundColorText}  />
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