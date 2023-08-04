import { Paper, Container } from "@mui/material";
import styles from './launches.module.css';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from "@mui/material/TablePagination";
import moment from "moment";

export default function Launches ({ launches, currentPage, totalLaunches, changePage }) {
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
                        <TablePagination
                            rowsPerPageOptions={-1}
                            rowsPerPage={10}
                            // MUI indexing for pages is zero-based
                            page={currentPage - 1} 
                            count={totalLaunches}
                            onPageChange={(event, page) => {
                                changePage(page + 1);
                            }}
                            showFirstButton={true}
                            showLastButton={true}
                        ></TablePagination>
                    </Table>
                </TableContainer>
            </Container>
    );
}