import styles from "./missioninfo.module.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Avatar, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import moment from "moment";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function MissionInfo({ missionInfo }) {
    return (
        <Container className={styles.missionInfo}>
            <Card>
                <CardHeader
                    title={`Mission ${missionInfo.name}`}
                    titleTypographyProps={{ variant: "h6", component: "h6" }}
                    subheader={moment(missionInfo.date_utc).format('MMMM Do YYYY')}
                    avatar={
                        <Avatar
                            src={missionInfo["links"]["patch"]["small"]}
                            sx={{ width: 128, height: 128 }}
                            variant="square"
                        />
                    }
                />
                <CardMedia
                    component="img"
                    image={missionInfo["rocket"]["flickr_images"][0]}
                    alt="rocket pic"
                    height="250px"
                >
                </CardMedia>
                <CardContent>
                    <Typography variant="body1" component="p">
                        {missionInfo.rocket.name} rocket was launched from {missionInfo.launchpad.full_name}.
                    </Typography>
                </CardContent>
                <CardActions>
                    {missionInfo["links"]["webcast"] &&
                        <a href={missionInfo["links"]["webcast"]}
                            target="_blank" rel="noreferrer"
                            style={{ "all": "unset" }}
                        >
                            <IconButton>
                                <YouTubeIcon
                                />
                            </IconButton>
                        </a>
                    }
                    {missionInfo["links"]["wikipedia"] &&
                        <a href={missionInfo["links"]["wikipedia"]}
                            target="_blank" rel="noreferrer"
                            style={{ "all": "unset" }}
                        >
                            <IconButton>
                                <AutoStoriesIcon
                                />
                            </IconButton>
                        </a>
                    }
                </CardActions>
            </Card>
        </Container>
    )
};
