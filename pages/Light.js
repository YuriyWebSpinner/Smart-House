import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import { getData, getAllData, saveData } from '../src/utils/firebase';

const scheme = 'https://rusenergetics.ru/wp-content/uploads/2019/11/%D0%A0%D0%B8%D1%81.-1.-%D0%9A%D0%B0%D0%BA-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D0%B8%D1%82-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%8B.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '30px',
    width: 'calc(100% - 40px)',
    margin: '20px',
    minWidth: '0px',
  },
  megaComponent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    boxShadow: 'none'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    display: 'block',
    width: '100%',
    objectFit: 'cover',
    marginBottom: '15px'
  }
});

const defaultState = {
  balkon : {
    '0' : 0,
    '1' : 0
  },
  korr : {
    '0' : 0,
    '1' : 0
  },
  kuhn : {
    '0' : 0,
    '1' : 0
  },
  vann : {
    '0' : 0,
    '1' : 0
  },
  zal : {
    '0' : 0,
    '1' : 0
  }
};

export default function Light() {
  const classes = useStyles();
  const [state, setState] = useState({});

  const handleChange = (event) => {
    const targetData = event.target.name.split('-');
    const targetVal = event.target.checked ? 1 : 0;
    const newState = { 
      [targetData[0]] : {
        ...state[targetData[0]],
        [targetData[1]]: targetVal
      }
    };
    const newFullState = {...state, ...newState};
    setState(newFullState);
    saveData(newState,`Light`);
    /*
    let url = '151.248.121.23';
    url = 'localhost';
    let config = {
      params: {
        ...newState
      },
    }
    axios.get(`http://${url}:3000/api/fileChanged`, config);*/

  };

  const convertStateData = (val) => val === 1 ? true : false;

  useEffect(async () => {
    const dataFromBase = await getAllData();
    setState(dataFromBase);
  },[])

  return (
    <Container maxWidth="sm">
      {state && state.zal && (
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Свет в квартире
          </Typography>
          <Paper className={classes.megaComponent}>
            <Card className={classes.root}>
              <CardContent>
                <img className={classes.image} src={scheme} />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Кухня
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.kuhn[0])} onChange={handleChange} name="kuhn-0" />}
                    label="Свет 1"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.kuhn['1'])} onChange={handleChange} name="kuhn-1" />}
                    label="Свет 2"
                  />
                </FormGroup>
              </CardContent>
            </Card>

            <Card className={classes.root}>
              <CardContent>
                <img className={classes.image} src={scheme} />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Ванная
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.vann['0'])} onChange={handleChange} name="vann-0" />}
                    label="Свет 1"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.vann['1'])} onChange={handleChange} name="vann-1" />}
                    label="Свет 2"
                  />
                </FormGroup>
              </CardContent>
            </Card>

            <Card className={classes.root}>
              <CardContent>
                <img className={classes.image} src={scheme} />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Балкон
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.balkon['0'])} onChange={handleChange} name="balkon-0" />}
                    label="Свет 1"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.balkon['1'])} onChange={handleChange} name="balkon-1" />}
                    label="Свет 2"
                  />
                </FormGroup>
              </CardContent>
            </Card>

            <Card className={classes.root}>
              <CardContent>
                <img className={classes.image} src={scheme} />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Зал
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.zal['0'])} onChange={handleChange} name="zal-0" />}
                    label="Свет 1"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.zal['1'])} onChange={handleChange} name="zal-1" />}
                    label="Свет 2"
                  />
                </FormGroup>
              </CardContent>
            </Card>

            <Card className={classes.root}>
              <CardContent>
                <img className={classes.image} src={scheme} />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Корридор
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.korr['0'])} onChange={handleChange} name="korr-0" />}
                    label="Свет 1"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={convertStateData(state.korr['1'])} onChange={handleChange} name="korr-1" />}
                    label="Свет 2"
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Paper>
          <ProTip />
          <Copyright />
        </Box>
      )}
    </Container>
  );
}
