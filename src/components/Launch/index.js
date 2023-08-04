import styles from './launch.module.css'
import moment from 'moment'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Modal from '@mui/material/Modal';
import MissionInfo from '../MissionInfo';
import { useState } from 'react';

export default function Launch({ launch }) {
    const [open, setOpen] = useState(false);

    function handleModal() {
        setOpen(!open);
    };

    return (
        <>
            <TableRow onClick={handleModal}>
                <TableCell>{launch.name}</TableCell>
                <TableCell>{launch.id}</TableCell>
                <TableCell>{launch.flight_number}</TableCell>
                <TableCell>{moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
            </TableRow>
            <Modal
                open={open}
                onClose={handleModal}
            >
                <MissionInfo missionInfo={launch}/>
            </Modal>
        </>
    )

};
