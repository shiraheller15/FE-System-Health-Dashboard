import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IErrorModalState {
    showModal: boolean;
    message: string;
}

const initialState: IErrorModalState = {
    showModal: false,
    message: ''
}

export const errorModalSlice = createSlice({
    name: 'errorModalReducer',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            state.showModal = true;
        },
        closeModal: (state) => {           
            state.message='';
            state.showModal = false;
        }
    },
})

export const { openModal, closeModal } = errorModalSlice.actions;

export default errorModalSlice.reducer;
