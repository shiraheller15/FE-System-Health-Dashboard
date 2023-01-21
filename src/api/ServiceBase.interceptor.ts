import Axios from 'axios';
import { openModal} from '../redux/slices/errorModalSlice';

const interceptor = (store: any) => {
    Axios.interceptors.response.use(
        (next) => {
            return Promise.resolve(next);
        },
        (error) => {
            if(error.response.status===500){
                store.dispatch(
                    openModal(error.message)
                );
                return;
            }
            return Promise.reject(error);
        }
    );
};

export default interceptor;
