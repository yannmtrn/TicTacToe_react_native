import {createContext, useContext, useState} from "react";

const ColorJoueurXValue = createContext();
const ColorJoueurXSetter = createContext();

const ColorJoueur0Value = createContext();
const ColorJoueur0Setter = createContext();

const IsDarkThemeSetter = createContext();
const ColorBackgroundValue = createContext();
const ColorBackgroundTxtValue = createContext();

export function GameProvider({ children }) {
    const [colorJoueurX, setColorJoueurX] = useState('#87e7e1');
    const [colorJoueur0, setColorJoueur0] = useState('#e8b5db');
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    
    const colorBackground = isDarkTheme ? '#121212' : 'white'
    const colorBackgroundTxt = isDarkTheme ? 'white' : '#121212'

    return (
        <ColorJoueurXSetter.Provider value={setColorJoueurX}>
            <ColorJoueurXValue.Provider value={colorJoueurX}>
                <ColorJoueur0Setter.Provider value={setColorJoueur0}>
                    <ColorJoueur0Value.Provider value={colorJoueur0}>
                        <ColorBackgroundValue.Provider value={colorBackground}>
                            <ColorBackgroundTxtValue.Provider value={colorBackgroundTxt}>
                                <IsDarkThemeSetter.Provider value={setIsDarkTheme}>
                                    {children}
                                </IsDarkThemeSetter.Provider>
                            </ColorBackgroundTxtValue.Provider>
                        </ColorBackgroundValue.Provider>
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

export function useColorBackgroundTxtValue() {
    return useContext(ColorBackgroundTxtValue);
}

export function useSetDarkTheme() {
    return useContext(IsDarkThemeSetter)
}