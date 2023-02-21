import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faCircle, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { SecondTab } from "./SecondTab";

export function HomePage() {

    const [activePlayer, setActivePlayer] = useState('X');
    const [markers, setMarkers] = useState([null, null, null, null, null, null, null, null, null]);

    const markPosition = (position) => {
        if (!markers[position]) {
            let temp = {...markers};
            temp[position] = activePlayer;
            setMarkers(temp);
            if(activePlayer === "X"){
                setActivePlayer("0");
            }else{
                setActivePlayer("X");
            }
        }
    }

    const resetMarkers = () => {
        setMarkers([
            null, null, null,
            null, null, null,
            null, null, null
        ]);
        setActivePlayer("X");
    }

    const checkWinner = (square) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a];
            }
        }
        return null;
    }

    useEffect(() => {
        let winner = checkWinner(markers);
        if(winner === "X" || winner === "0") {
            alert("Winner is: " + winner);
            resetMarkers();
        }
    }
    , [markers]);

    return (
        <SafeAreaView style={styles.body}>
            <View style={[styles.playerInfo, { backgroundColor : activePlayer === "X"?"#87e7e1":"#e8b5db"} ]}>
                <Text style={styles.playerText}>Player: {activePlayer}'s turn </Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.row}>
                    <Pressable style={styles.cell} onPress={()=>markPosition(0)}>
                        {markers[0] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[0] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                    <Pressable style={styles.cell} onPress={()=>markPosition(1)}>
                        {markers[1] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[1] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                    <Pressable style={styles.cell} onPress={()=>markPosition(2)}>
                        {markers[2] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[2] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Pressable style={styles.cell} onPress={()=>markPosition(3)}>
                        {markers[3] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[3] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                    <Pressable style={styles.cell} onPress={()=>markPosition(4)}>
                        {markers[4] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[4] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                    <Pressable style={styles.cell} onPress={()=>markPosition(5)}>
                        {markers[5] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[5] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Pressable style={styles.cell} onPress={()=>markPosition(6)}>
                        {markers[6] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[6] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                    <Pressable style={styles.cell} onPress={()=>markPosition(7)}>
                        {markers[7] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[7] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                    <Pressable style={styles.cell} onPress={()=>markPosition(8)}>
                        {markers[8] === "X" && <FontAwesomeIcon icon={faXmark} style={styles.icon} size={90}/>}
                        {markers[8] === "0" && <FontAwesomeIcon icon={faCircle} style={styles.icon} size={70}/>}
                    </Pressable>
                </View>
            </View>
            <View style={styles.viewCleanBtn}>
                <Pressable style={styles.cleanBtn} onPress={resetMarkers}>
                    <FontAwesomeIcon icon={faRepeat} color={"white"} size={60}/>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#121212',
        opacity: 0.9,
    },
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
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    row: {
        width: 360,
        height: 125,
        display: 'flex',
        flexDirection: 'row',
    },
    cell: {
        width: '33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'white',
        opacity: 0.8,
    },
    icon: {
        color: 'white',
    },
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
    }
});
