import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import home from '../assets/images/index'

const Home = () => {
    const [value, setValue] = React.useState('one');
    const placeholder = ['Sport', 'Date', 'Time'];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const customtext = createTheme({
    //   typography: {
    //     htmlFontSize: 11,
    //   },
    // });

    const arrayvalue = [1, 2, 3];

    return (
        <div style={{ height: '100vh', overflowY: 'scroll' }}>
            <div style={{backgroundImage:`url(${home.home})`,  backgroundSize: 'cover'}}>
                <Stack direction="row-reverse" alignItems="baseline" sx={{ mr: '10%', borderRadius: '100px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ borderRadius: '30px' }}
                        sx={{ width: 80, height: 33, mt: 5, textTransform: 'capitalize' }}
                    >
                        Login
                    </Button>
                </Stack>
                <Stack alignItems="center" sx={{ mt: '11%' }}>
                    <Typography variant="h3">Book Venues Coaches Academies Nearby</Typography>
                </Stack>
                <hr
                    style={{
                        width: '40%',
                        marginLeft: '30%',
                        marginTop: '1%',
                        marginBottom: '2%'
                    }}
                />
                <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="primary" aria-label="secondary tabs example">
                        <Tab
                            value="one"
                            label="sportCenters"
                            sx={{ ml: '44%', mt: 1, mb: -12 }}
                            style={{
                                width: '9%',
                                marginBottom: '-10',
                                whiteSpace: 'nowrap'
                            }}
                        />
                        <Tab
                            value="two"
                            label="Playmates"
                            sx={{ mt: 1, mb: -12, ml: 4 }}
                            style={{
                                width: '9%',
                                marginBottom: '-10',
                                whiteSpace: 'nowrap'
                            }}
                        />
                        <Tab
                            value="three"
                            label="Lessons"
                            sx={{ mt: 1, mb: -12, ml: 4 }}
                            style={{
                                width: '9%',
                                marginBottom: '-10',
                                whiteSpace: 'nowrap'
                            }}
                        />
                    </Tabs>
                </Box>
                <FormControl component="fieldset" sx={{ ml: 39, mt: 2, mb: 24 }}>
                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <Stack direction="row" sx={{ mt: 2 }}>
                            <TextField label="Location" size="small" variant="outlined" sx={{ width: 260,color: "#3c3c3c"}} style={{backgroundColor:"#fafafa"}}  floatingLabelStyle={{color: "#3c3c3c" }}InputLabelProps={{ style:{color: 'grey'} }}/>
                            {placeholder.map((value, i) => (
                                <TextField key={i} label={value} size="small" variant="outlined" sx={{ width: 170 }} style={{backgroundColor:"#fafafa"}}InputLabelProps={{ style:{color: 'grey'} }}/>
                            ))}
                            <Button variant="contained" sx={{ width: '15%', ml: '13%' }} style={{ height: '100%' }}InputLabelProps={{ style:{color: 'grey'} }}>
                                Search
                            </Button>
                        </Stack>
                    </FormGroup>
                </FormControl>
            </div>
            <div style={{ marginTop: '33px' }}>
                <Typography style={{ textAlign: 'center' }} variant="h2">
                    Game & Entertainment
                </Typography>
                <Typography align="center" sx={{ mt: 3 }}>
                    Lorem ipsum is simply dummy text of the printing and typetesting industry.Lorem ipsum has been the industry's standared <br /> dummy text
                    ever since the 1500s,when an unknown printer took a gallery
                </Typography>
            </div>

            {arrayvalue?.map((map) => {
                return (
                    <Grid container spacing={1} direction="row" sx={{ my: 1, mb: -7, mt: '2%' }} justifyContent="center">
                        <Grid item sx={{ mb: 0 }}>
                            <Card key={{ map }} sx={{ maxWidth: 270, height: '69%' }}>
                                <CardMedia component="img" height="100" image={`${home.home}`} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Tennis
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        The CardMedia component sets a background image to cover available space.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card key={{ map }} sx={{ maxWidth: 270, height: '69%' }}>
                                <CardMedia component="img" height="100" image={`${home.home}`} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Badmition
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        The CardMedia component sets a background image to cover available space.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card key={{ map }} sx={{ maxWidth: 270, height: '69%' }}>
                                <CardMedia component="img" height="100" image={`${home.home}`} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        squash
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        The CardMedia component sets a background image to cover available space.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card key={{ map }} sx={{ maxWidth: 270, height: '69%' }}>
                                <CardMedia component="img" height="100" image={`${home.home}`} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        swimming
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        The CardMedia component sets a background image to cover available space.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                );
            })}
            <div style={{height:"30%",backgroundImage:`url(${home.home})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>

            </div>
            <Box
                sx={{
                    bottom: 0,
                    width: '100%',
                    color: 'white',
                    py: 1,
                    bgcolor: 'footer',
                    textAlign: 'center'
                }}
                style={{ backgroundColor: '#272727' }}
            >
                <p>PlayzeOn</p>
                <div>About us &nbsp;|&nbsp; Terms & Conditions &nbsp;|&nbsp; Privacy &nbsp;|&nbsp; Download App </div>
                <hr style={{ borderBottom: '1px solid black', marginTop: '3%' }} />
                <p>Weplayreal @ 2020. All Rights Reserved</p>
            </Box>
        </div>
    );
};
export default Home;
