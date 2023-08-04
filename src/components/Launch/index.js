import styles from './launch.module.css'
import moment from 'moment'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Modal from '@mui/material/Modal';
import MissionInfo from '../MissionInfo';
import { useState } from 'react';

export default function Launch({ launch, index }) {
    const [open, setOpen] = useState(false);

    function handleModal() {
        setOpen(!open);
    };

    return (
        <>
            <TableRow onClick={handleModal}
                // making banded rows
                className={ index % 2 === 1 ? styles.bandedRow : undefined}
            >
                <TableCell
                    className={styles.nameColumn}
                >{launch.name}</TableCell>
                <TableCell
                    className={styles.idColumn}
                >{launch.id}</TableCell>
                <TableCell
                    className={styles.numberColumn}
                >{launch.flight_number}</TableCell>
                <TableCell
                    className={styles.dateColumn}
                >{moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
            </TableRow>
            <Modal
                open={open}
                onClose={handleModal}
            >
                <MissionInfo missionInfo={launch} />
            </Modal>
        </>
    )

};
