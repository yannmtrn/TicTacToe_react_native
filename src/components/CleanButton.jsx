import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

export function CleanButton({ resetMarkers }) {
    return (
        <View style={styles.viewCleanBtn}>
            <Pressable style={styles.cleanBtn} onPress={resetMarkers}>
                <FontAwesomeIcon icon={faRepeat} color={"white"} size={60}/>
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