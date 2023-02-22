import {createContext, useContext, useState} from "react";

const ColorJoueurXValue = createContext(undefined, undefined);
const ColorJoueurXSetter = createContext(undefined, undefined);

const ColorJoueur0Value = createContext(undefined, undefined);
const ColorJoueur0Setter = createContext(undefined, undefined);

const ColorBackgroundValue = createContext(undefined, undefined);
const ColorBackgroundSetter = createContext(undefined, undefined);

const ColorBackgroundTxtValue = createContext(undefined, undefined);
const ColorBackgroundTxtSetter = createContext(undefined, undefined);

export function GameProvider({ children }) {
    const [colorJoueurX, setColorJoueurX] = useState('#87e7e1');
    const [colorJoueur0, setColorJoueur0] = useState('#e8b5db');
    const [colorBackground, setColorBackground] = useState('#121212');
    const [colorBackgroundTxt, setColorBackgroundTxt] = useState('white');

    return (
        <ColorJoueurXSetter.Provider value={setColorJoueurX}>
            <ColorJoueurXValue.Provider value={colorJoueurX}>
                <ColorJoueur0Setter.Provider value={setColorJoueur0}>
                    <ColorJoueur0Value.Provider value={colorJoueur0}>
                        <ColorBackgroundSetter.Provider value={setColorBackground}>
                            <ColorBackgroundValue.Provider value={colorBackground}>
                                <ColorBackgroundTxtSetter.Provider value={setColorBackgroundTxt}>
                                    <ColorBackgroundTxtValue.Provider value={colorBackgroundTxt}>
                                        {children}
                                    </ColorBackgroundTxtValue.Provider>
                                </ColorBackgroundTxtSetter.Provider>
                            </ColorBackgroundValue.Provider>
                        </ColorBackgroundSetter.Provider>
                    </ColorJoueur0Value.Provider>
                </ColorJoueur0Setter.Provider>
            </ColorJoueurXValue.Provider>
        </ColorJoueurXSetter.Provider>
    );
}

export function useColorJoueurXValue() {
    return useContext(ColorJoueurXValue);
}

export function useColorJoueurXSetter() {
    return useContext(ColorJoueurXSetter);
}

export function useColorJoueur0Value() {
    return useContext(ColorJoueur0Value);
}

export function useColorJoueur0Setter() {
    return useContext(ColorJoueur0Setter);
}

export function useColorBackgroundValue() {
    return useContext(ColorBackgroundValue);
}

export function useColorBackgroundSetter() {
    return useContext(ColorBackgroundSetter);
}

export function useColorBackgroundTxtValue() {
    return useContext(ColorBackgroundTxtValue);
}

export function useColorBackgroundTxtSetter() {
    return useContext(ColorBackgroundTxtSetter);
}