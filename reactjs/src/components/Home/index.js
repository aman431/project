import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
        marginRight: 200,
        flexGrow: 1,
        backgroundColor: "#f5f6fc",
        marginBottom: 40,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        fontWeight: 900
    },
    papers: {
        padding: theme.spacing(2),
        fontWeight: 900,
        height: 50
    },
    icons: {
        paddingLeft: 5,
        fontSize: 22
    },
    grey: {
        backgroundColor: 'grey',
        borderRadius: 4,
        padding: 10,
        color: "whiteSmoke",
        width: 100,
        textAlign: 'center',
        cursor:'pointer'
    },
    blue: {
        backgroundColor: 'rgb(8, 8, 51)',
        borderRadius: 4,
        padding: 10,
        color: "whiteSmoke",
        width: 100,
        textAlign: 'center',
        cursor: 'pointer'
    },
    blue_circle: {
        backgroundColor: 'rgb(8, 8, 51)',
        borderRadius: 10,
        padding: 10,
        color: "whiteSmoke",
        width: 100,
        textAlign: 'center',
        marginLeft: '15px',
        cursor:'pointer'
    },
    button: {
        marginTop: 20,
        backgroundColor: "orange",
        width: 250,
        border: "none",
        height: 40,
        borderRadius: 50,
        cursor:"pointer",
        color:'white'
      },
      button1: {
        marginTop: 20,
        backgroundColor: "gray",
        width: 100,
        border: "none",
        height: 40,
        borderRadius: 50,
        cursor:"pointer",
        color:'white'
      },
}));
export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div style={{ marginRight: "50px" }}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12}>
                    <div>
                        <Paper style={{ display: 'flex', flexDirection: 'column' }} className={classes.paper}>2. What's your target market ?
                            <span style={{ fontWeight: 40, paddingLeft: 20 }}> Define parameters for best influencers recommendations </span>
                        </Paper>
                    </div>
                </Grid>


                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ height: '250px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray' }}>
                            <span style={{ background: 'red', height: '30px', width: '5px', marginRight: '20px', marginBottom: '20px', borderRadius: '4px' }}></span>
                            <span> Should Be</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p>Gender</p>
                                <p>Age Selections</p>
                                <p>Languages</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '25%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p className={classes.blue} style={{ marginRight: '10px' }}> 
                                     Female
                                    </p>
                                    <p className={classes.grey}>
                                     Male
                                    </p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="0-15"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="18-24"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="25-34"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="35-44"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="45-54"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="55-64"
                                        style={{ paddingRight: '25px' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid black', borderRadius: '10px' }}>
                                    <p>
                                        <span className={classes.blue_circle}>English
                                            <HighlightOffIcon className="delete_icon" style={{ position: "relative", top: "5px", marginLeft: '10px' }} />
                                        </span>
                                        <span className="add_tag" style={{ marginLeft: "15px", fontWeight: '60' }}>Enter preferred language of your campaign</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ height: '150px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray' }}>
                            <span style={{ background: 'red', height: '30px', width: '5px', marginRight: '20px', marginBottom: '20px', borderRadius: '4px' }}></span>
                            <span>Located At</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                                <p>Audience Location (Cities)</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '17%', width: '58%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid black', borderRadius: '10px' }}>
                                    <p>
                                        <span className={classes.blue_circle}>Mumbai
                                            <HighlightOffIcon className="delete_icon" style={{ position: "relative", top: "5px", marginLeft: '10px' }} />
                                        </span>
                                        <span className={classes.blue_circle}>Pune
                                            <HighlightOffIcon className="delete_icon" style={{ position: "relative", top: "5px", marginLeft: '10px' }} />
                                        </span><span className={classes.blue_circle}>Delhi
                                            <HighlightOffIcon className="delete_icon" style={{ position: "relative", top: "5px", marginLeft: '10px' }} />
                                        </span>
                                        <span className="add_tag" style={{ marginLeft: "15px", fontWeight: '60' }}>Enter city to promote your campaign</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ height: '300px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray' }}>
                            <span style={{ background: 'red', height: '30px', width: '5px', marginRight: '20px', marginBottom: '20px', borderRadius: '4px' }}></span>
                            <span>Interested In</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                                <p>Categories</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'200px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Fitness"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Parenting"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Education"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Business"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="F&B Products"
                                        style={{ paddingRight: '25px' }}
                                    />
                                </div>
                            </div>
                            
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Fitness"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Parenting"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Education"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Business"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="F&B Products"
                                        style={{ paddingRight: '25px' }}
                                    />
                                </div>
                            
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Fitness"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Parenting"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Education"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Business"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="F&B Products"
                                        style={{ paddingRight: '25px' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Fitness"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Parenting"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Education"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="Business"
                                        style={{ paddingRight: '25px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="antoine" />}
                                        label="F&B Products"
                                        style={{ paddingRight: '25px' }}
                                    />
                                </div>
                        </div>
                    </Paper>
                    <Grid container justify="space-between">
                        <button className={classes.button1}>Back</button>
                        <button className={classes.button}>Process to Next Step</button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}