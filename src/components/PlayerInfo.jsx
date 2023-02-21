import { View, Text, StyleSheet } from 'react-native';

export function PlayerInfo({ activePlayer }) {

    return (
        <View style={[styles.playerInfo, { backgroundColor : activePlayer === "X"?"#87e7e1":"#e8b5db"} ]}>
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