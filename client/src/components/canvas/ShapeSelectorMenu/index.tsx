import { Grid, Toolbar, IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { canvasSelector } from '../../../store/selectors/canvasSelectors';
import { selectShape } from "src/store/slices/canvasSlice";
import { useSelector, useDispatch } from "react-redux";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'rgb(150,150,150)'
    }
}))
const ShapeSelectorMenu = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const { selectedShape } = useSelector(canvasSelector);

    const handleClick = (shapeType: string) => {
        dispatch(selectShape(shapeType))
    }

    return (
        <Grid item>
            <Toolbar variant='dense' sx={{backgroundColor: 'rgb(28 26 26) !important'}}>
                <IconButton>
                    <CheckBoxOutlineBlankIcon 
                        className={styles.icon} 
                        sx={selectedShape === 'circle' ? {color: 'yellow'} : {}}
                        onClick={() => handleClick('circle')}
                    />
                </IconButton>
                <IconButton>
                    <RadioButtonUncheckedIcon 
                        className={styles.icon} 
                        sx={selectedShape === 'square' ? {color: 'yellow'} : {}}
                        onClick={() => handleClick('square')}
                    />
                </IconButton>
                <IconButton>
                    <ShowChartIcon 
                        className={styles.icon} 
                        sx={selectedShape === 'line' ? {color: 'yellow'} : {}}
                        onClick={() => handleClick('line')}
                    />
                </IconButton>
            </Toolbar>
        </Grid>
    )
}

export default ShapeSelectorMenu;