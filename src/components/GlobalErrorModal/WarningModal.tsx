import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { closeModal } from '../../redux/slices/errorModalSlice';
import useStyles from './WarningModal.styles';
import * as React from 'react';

export const WarningModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const unexceptedError = useAppSelector(state => state.errorModalReducer);
    const dispatch = useAppDispatch();

    const handleClose = () => { (dispatch(closeModal())) };
    const classes = useStyles();
    useEffect(() => {
        setIsOpen(unexceptedError.showModal);
    }, [unexceptedError.showModal]);

    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <Typography className={classes.Typography}  id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2}}>
                        <b> Unexcepted Error</b>
                    </Typography>
                    <Typography className={classes.Typography}  id="modal-modal-description" sx={{ mt: 2}}>
                        {unexceptedError.message}
                    </Typography>
                    <Button sx={{mt:6,marginLeft:12}}  className={classes.btn} onClick={handleClose}><b>Close</b></Button>
                    
                </Box>
            </Modal>
        </div>
    

    );
}