import axios from "axios";
import {LOG_IN_URL }from '../config/config'
import { ILogInDetails } from "../types/types";

export const logInUser=async(body:ILogInDetails)=>{
    return await axios.post<string>(`${LOG_IN_URL}`,body);
}

