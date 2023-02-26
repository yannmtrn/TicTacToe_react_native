import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faCircle } from "@fortawesome/free-solid-svg-icons";
import { PlayerInfo } from "./PlayerInfo";
import { CleanButton } from "./CleanButton";
import { useColorBackgroundTxtValue, useColorBackgroundValue } from "../provider/GameProvider";

function Marker({value}) {
    const backgroundColorText = useColorBackgroundTxtValue();
    if (!value) {
        return null
    }
    return value === "X" ? 
        <FontAwesomeIcon icon={faXmark} color={backgroundColorText} size={90}/> 
        : <FontAwesomeIcon icon={faCircle} color={backgroundColorText} size={70}/>
} 

function BoardButton({onPress, value}) {
    const backgroundColorText = useColorBackgroundTxtValue();

    return (
        <Pressable style={[styles.cell, {borderColor: backgroundColorText}]} onPress={onPress}>
            <Marker value={value} />
        </Pressable>
    )
}

export function Board() {
    const backgroundColor = useColorBackgroundValue();

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
    }, [markers]);

    return (
        <SafeAreaView style={[styles.body, { backgroundColor : backgroundColor}]}>
            <PlayerInfo activePlayer={activePlayer}/>
            <View style={styles.mainContainer}>
                <View style={styles.row}>
                    <BoardButton onPress={()=>markPosition(0)} value={markers[0]}/>
                    <BoardButton onPress={()=>markPosition(1)} value={markers[1]}/>
                    <BoardButton onPress={()=>markPosition(2)} value={markers[2]}/>
                </View>
                <View style={styles.row}>
                    <BoardButton onPress={()=>markPosition(3)} value={markers[3]}/>
                    <BoardButton onPress={()=>markPosition(4)} value={markers[4]}/>
                    <BoardButton onPress={()=>markPosition(5)} value={markers[5]}/>
                </View>
                <View style={styles.row}>
                    <BoardButton onPress={()=>markPosition(6)} value={markers[6]}/>
                    <BoardButton onPress={()=>markPosition(7)} value={markers[7]}/>
                    <BoardButton onPress={()=>markPosition(8)} value={markers[8]}/>
                </View>
            </View>
            <CleanButton resetMarkers={resetMarkers}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        opacity: 0.9,
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
        opacity: 0.8,
    },
});