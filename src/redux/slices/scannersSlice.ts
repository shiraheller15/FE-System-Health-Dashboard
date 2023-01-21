import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IScannerUnifiedFormat } from '../../types/types'

interface IScannersState {
  scanners: IScannerUnifiedFormat[],
  errorMessage: string,
  shouldDisplayErrorMessage: boolean
}

const initialState: IScannersState = {
  scanners: [],
  errorMessage: "",
  shouldDisplayErrorMessage: false
}

export const scannersSlice = createSlice({
  name: 'scannersReducer',
  initialState,
  reducers: {
    getScanners: (state, action: PayloadAction<IScannerUnifiedFormat[]>) => {
      state.scanners = action.payload;
    },
  },
})

export const { getScanners } = scannersSlice.actions;

export default scannersSlice.reducer;