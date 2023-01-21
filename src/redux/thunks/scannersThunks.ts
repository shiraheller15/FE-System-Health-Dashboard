import axios from 'axios'
import { getAllScannersFromServer, getScannersFromServerWithPagination } from '../../api/scannersApi'
import { getScanners } from '../slices/scannersSlice'
import { AppDispatch } from '../store'

export const getAllScanners = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const scanners = (await getAllScannersFromServer()).data
      dispatch(getScanners(scanners))
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
}

export const getScannersByPagination = (page: number, scannerName: string, productName: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const scanners = (await getScannersFromServerWithPagination(page, scannerName, productName)).data
      dispatch(getScanners(scanners))
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
}




