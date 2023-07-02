import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 10,
    name: "Nahid"
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState
});

export default HomePageSlice.reducer;