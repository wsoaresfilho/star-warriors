import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { yellow, grey } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const ColoredSwitch = withStyles({
    switchBase: {
        color: grey[700],
        '& + $track': {
            backgroundColor: grey[800],
        },
        '&$checked': {
            color: yellow[800],
        },
        '&$checked + $track': {
            backgroundColor: yellow[800],
        },
    },
    checked: {},
    track: {},
})(Switch);

export default function ThemeSwitch(props) {
    const [customsProps, setCustomState] = React.useState(props);

    React.useEffect(() => {
        setCustomState(props);
    }, [props]);

    const handleChange = () => {
        customsProps.onChange();
    };

    return (
        <FormGroup>
            <Typography component='div'>
                <Grid
                    component='label'
                    container
                    alignItems='center'
                    spacing={1}
                >
                    <Grid item>Light Theme</Grid>
                    <Grid item>
                        <ColoredSwitch
                            checked={customsProps.isChecked}
                            onChange={() => handleChange()}
                        />
                    </Grid>
                    <Grid item>Dark Theme</Grid>
                </Grid>
            </Typography>
        </FormGroup>
    );
}
