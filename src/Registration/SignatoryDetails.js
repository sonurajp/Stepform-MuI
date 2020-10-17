import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '26ch',
        },
    },
    input: {
        display: "none"
    }
}));

const SignatoryDetails = ({values,  handleChange, handleNext, handleBack }) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <Container maxWidth='md' >
                <Paper elevation={1} style={{ padding: "16px" }}>
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Your Signatory Details
                             </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.root}>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Full Name"
                                defaultValue=""
                                variant="outlined"
                                onChange={handleChange('fullName')}
                                defaultValue={values.fullName}
                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Designation"
                                defaultValue=""
                                variant="outlined"
                                onChange={handleChange('designation')}
                                defaultValue={values.designation}

                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/mm/yyyy"
                                    margin="normal"
                                    id="date-Of-joining"
                                    label="Date Of joining"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>

                        </Grid>

                        <Grid container item >
                            <Grid xs={4} item>
                                <IconButton aria-label="back" onClick={() => handleBack()}>
                                    <ArrowBackIosIcon fontSize="small" />
                                    <Typography>back</Typography>
                                </IconButton>

                            </Grid>
                            <Grid container xs={8} item alignItems="flex-start">
                                <Button variant="contained" color="primary" style={{
                                    backgroundColor: "#707070"
                                }} onClick={() => handleNext()}>
                                    <Typography>Continue to Next</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </div>
    )

}
export default SignatoryDetails