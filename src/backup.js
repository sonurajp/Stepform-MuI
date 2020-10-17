import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '26ch',
        },
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);
const getSteps = () => {
    return ['Originization details', 'Signatory details', 'Bank Details'];
}

const Registeration = () => {


    const [activeStep, setActiveStep] = React.useState(0);
    const [initialValues, setRegValues] = React.useState({
        entityName: " ",
        country: " ",
        date: " ",
        type: " ",
        name: " ",
        designation: " ",
        joinDate: " ",
        accountName: " ",
        accountNumber: " ",
        bankName: " ",
        ifsc: " ",



    });
    const steps = getSteps();



    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const registerUser = async (data) => {
        let userData = {};
        userData.entityName = "Litmus7";
        userData.country = "India";
        userData.date = "23";
        userData.type = "Trainee";
        userData.name = "Sonuraj";
        userData.designation = "Ui";
        userData.joinDate = "March 3rd";
        userData.accountName = "Sbi";
        userData.accountNumber = 45677;
        userData.bankName = "SBI BANk";
        userData.ifsc = "sbi007";

    }


    const completeProcess = () => {
        registerUser(initialValues);
    }
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <OriginizationDetails defaultValue={initialValues} setValues={setRegValues} handleNext={handleNext} />
            case 1:
                return <SignatoryDetails defaultValue={initialValues} setValues={setRegValues} handleNext={handleNext} handleBack={handleBack} />
            case 2:
                return <BankDetails defaultValue={initialValues} setValues={setRegValues} handleBack={handleBack} completeProcess={completeProcess} />;
            default:
                return <p>Unknown stepIndex</p>;
        }
    }

    return (
        <>

            <>
                <Typography variant="h5">Virtual Captive</Typography>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label} >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {getStepContent(activeStep)}
                </div>
            </>

        </>
    );
}
const OriginizationDetails = ({ defaultValue, setValues, handleNext }) => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='sm'   >
                <Paper elevation={1} style={{ padding: "16px" }}>
                    <Grid container direction="Row" spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Your Originization Details
                             </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.root}>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Entity Name"
                                defaultValue=""
                                variant="outlined"


                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Country"
                                defaultValue=""
                                variant="outlined"

                            />
                        </Grid>

                        <Grid item xs={12} className={classes.root}>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Date"
                                defaultValue=""
                                variant="outlined"

                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="type"
                                defaultValue=""
                                variant="outlined"

                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" style={{
                                backgroundColor: "#707070"
                            }} onClick={() => handleNext()} >
                                <Typography>Next</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </div>
    )

}
const SignatoryDetails = ({ defaultValue, setValues, handleNext, handleBack }) => {
    const classes = useStyles();
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

                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Designation"
                                defaultValue=""
                                variant="outlined"

                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Date Of joining"
                                defaultValue=""
                                variant="outlined"

                            />
                        </Grid>


                        <Grid item xs={12}>
                            <Button onClick={() => handleBack()}>
                                <Typography>back</Typography>
                            </Button>
                            <Button variant="contained" color="primary" style={{
                                backgroundColor: "#707070"
                            }} onClick={() => handleNext()}>
                                <Typography>Next</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </div>
    )

}
const BankDetails = ({ defaultValue, setValues, handleNext, handleBack }) => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='sm' >
                <Paper elevation={1} style={{ padding: "16px" }}>
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Your Bank Details
                             </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.root}>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Account Holder Name"
                                defaultValue=""
                                variant="outlined"

                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Account Number"
                                defaultValue=""
                                variant="outlined"

                            />
                        </Grid>

                        <Grid item xs={12} className={classes.root}>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Bank Name"
                                defaultValue=""
                                variant="outlined"

                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Ifsc Code"
                                defaultValue=""
                                variant="outlined"

                            />
                        </Grid>
                        <Grid item xs={12}>



                            <Button onClick={() => handleBack()}>back</Button>

                            <Button variant="contained" color="primary" style={{
                                backgroundColor: "#707070"
                            }}>
                                <Typography>Submit</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </div>
    )

}

export default Registeration
