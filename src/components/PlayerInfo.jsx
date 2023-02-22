import { View, Text, StyleSheet } from 'react-native';
import { useColorJoueurXValue, useColorJoueur0Value } from "../provider/GameProvider";

export function PlayerInfo({ activePlayer }) {

    const activeColorX = useColorJoueurXValue();
    const activeColor0 = useColorJoueur0Value();

    return (
        <View style={[styles.playerInfo, { backgroundColor : activePlayer === "X"?activeColorX:activeColor0} ]}>
            <Text style={styles.playerText}>Player: {activePlayer}'s turn </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    playerInfo: {
        height: 60,
        marginTop: 40,
        marginHorizontal: 20,
        marginBottom: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
    },
    playerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});