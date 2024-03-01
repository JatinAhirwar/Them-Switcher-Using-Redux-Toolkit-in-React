import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    themeMode: "light"
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        darkMode: (state, _) => {
            const darkMode = "dark"
            state.themeMode.push(darkMode)
        },
        lightMode: (state, _) => {
            const lightMode = "light"
            state.themeMode.push(lightMode)
        }
    }
})

export const {darkMode, lightMode} = themeSlice.actions
export default themeSlice.reducer