import { Paper, Container } from "@mui/material";
import styles from './launches.module.css';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from "@mui/material/TablePagination";
import Launch from "../Launch";
import AbcIcon from '@mui/icons-material/Abc';
import TagIcon from '@mui/icons-material/Tag';
import Filter1Icon from '@mui/icons-material/Filter1';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Typography from "@mui/material/Typography";

export default function Launches({ launches, currentPage, totalLaunches, changePage }) {
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className={styles.tableHeader}>
                        <TableRow>
                            <TableCell>
                                <div className={styles.columnHeader}>
                                    <AbcIcon />
                                    <Typography
                                        variant='h6'>
                                        Mission name
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={styles.columnHeader}>
                                    <TagIcon />
                                    <Typography
                                        variant='h6'>
                                        Launch ID
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={styles.columnHeader}>
                                    <Filter1Icon />
                                    <Typography
                                        variant='h6'>
                                        Flight number
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={styles.columnHeader}>
                                    <CalendarTodayIcon />
                                    <Typography
                                        variant='h6'>
                                        Launch date
                                    </Typography>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {launches.map((launch, index) => {
                            return (
                                <Launch launch={launch} key={index} index={index} />
                            )
                        })
                        }
                    </TableBody>
                    <TablePagination
                        rowsPerPageOptions={[-1]}
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