import { Paper, Container } from "@mui/material";
import styles from './launches.module.css';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import moment from "moment";

export default function Launches ({launches}) {
    return (
        <Container>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Mission name</TableCell>
                                <TableCell>Launch ID</TableCell>
                                <TableCell>Flight number</TableCell>
                                <TableCell>Launch date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {launches.map(launch => {
                                return (
                                    <TableRow>
                                        <TableCell>{launch.name}</TableCell>
                                        <TableCell>{launch.id}</TableCell>
                                        <TableCell>{launch.flight_number}</TableCell>
                                        <TableCell>{moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                    </TableRow>
                                )
                            })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
    );
}