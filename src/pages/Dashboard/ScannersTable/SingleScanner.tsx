import { Button, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IScannerUnifiedFormat } from '../../../types/types';
import { useStyles } from './ScannersTable.styles';

const SingleScanner: React.FC<{ scanner: IScannerUnifiedFormat }> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [scanner, setScanner] = useState(props.scanner);
    return (
        <TableRow
            className={classes.tableRow}
            key={scanner.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell sx={{
                align: "left",
                color: '#FFFFFF'
            }}>{scanner.id}</TableCell>
            <TableCell component="th" scope="row" sx={{
                align: 'center',
                color: '#08d6adcf'
            }}>
                {scanner.testName}
            </TableCell>
            <TableCell sx={{
                align: "left",
                color: '#ff4646cf'
            }}>{scanner.productName}</TableCell>
            <TableCell sx={{
                align: "left",
                color: '#FFFFFF'
            }}>{scanner.version}</TableCell>
            <TableCell sx={{
                align: "left",
                color: '#08d6adcf'
            }}>{scanner.scannerName}</TableCell>
            <TableCell sx={{
                align: "left",
                color: '#e71980b3'
            }}>{scanner.numberOfSuccessfulScans}</TableCell>
            <TableCell>
                <Button className={classes.button} onClick={() => {
                    navigate("/more-details/" + scanner.id);
                }}>More Details</Button></TableCell>
        </TableRow>
    )
}
export default SingleScanner;