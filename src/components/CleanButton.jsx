import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { useColorBackgroundTxtValue } from "../provider/GameProvider";

export function CleanButton({ resetMarkers }) {
    const backgroundColorText = useColorBackgroundTxtValue();

    return (
        <View style={styles.viewCleanBtn}>
            <Pressable style={styles.cleanBtn} onPress={resetMarkers}>
                <FontAwesomeIcon icon={faRepeat} color={backgroundColorText} size={60}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    viewCleanBtn: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cleanBtn: {
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});