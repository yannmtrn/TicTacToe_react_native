import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useColorBackgroundTxtValue } from "../provider/GameProvider";

export function ThemeButton({onPress, title, textColor}) {
  const backgroundColorText = useColorBackgroundTxtValue();

  return (
    <Pressable style={[styles.buttonChange, { borderColor: backgroundColorText}]} onPress={onPress}>
      <Text style={{color: textColor, fontSize: 16}}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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