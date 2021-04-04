import { Helmet } from 'react-helmet';
import {
  Avatar,
  Box, Button, Card, CardActions, CardContent,
  Container, Divider,
  Grid, Typography
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import React from 'react';
import TableDragSelect from 'react-table-drag-select';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [time, setTime] = React.useState({
    cells: [
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    ]
  });
  if (!loaded) {
    axios.get(`http://localhost:4000/timeslot/${id}`)
      .then((response) => {
        setLoaded(true);
        setTime({ cells: JSON.parse(response.data.value) });
      })
      .catch(() => {
        setLoaded(false);
      });
  }
  if (!profile) {
    axios.get(`http://localhost:4000/user/${id}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch(() => {
        setProfile(false);
      });
  }
  return (
    <>
      <Helmet>
        <title>{ id }</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Avatar
                      src={user.avatar}
                      sx={{
                        height: 100,
                        width: 100
                      }}
                    />
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h3"
                    >
                      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
                      {profile.username}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      {`${moment().format('hh:mm A')} ${user.timezone}`}
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    color="primary"
                    fullWidth
                    variant="text"
                  >
                    Upload picture
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <Card>
                <TableDragSelect
                  value={time.cells}
                >
                  <tr>
                    <td disabled />
                    <td disabled>1</td>
                    <td disabled>2</td>
                    <td disabled>3</td>
                    <td disabled>4</td>
                    <td disabled>5</td>
                    <td disabled>6</td>
                    <td disabled>7</td>
                    <td disabled>8</td>
                    <td disabled>9</td>
                    <td disabled>10</td>
                    <td disabled>11</td>
                    <td disabled>12</td>
                    <td disabled>13</td>
                    <td disabled>14</td>
                    <td disabled>15</td>
                    <td disabled>16</td>
                    <td disabled>17</td>
                    <td disabled>18</td>
                    <td disabled>19</td>
                    <td disabled>20</td>
                    <td disabled>21</td>
                    <td disabled>22</td>
                    <td disabled>23</td>
                    <td disabled>24</td>
                  </tr>
                  <tr>
                    <td disabled>Monday</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td disabled>Tuesday</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td disabled>Wednesday</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td disabled>Thursday</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td disabled>Friday</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td disabled>Saturday</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td disabled>Sunday</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </TableDragSelect>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
