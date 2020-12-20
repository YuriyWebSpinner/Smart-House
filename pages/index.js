import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import firebase from "firebase";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import { getAllData } from '../src/utils/firebase';

const defaultInputs = {
  email: {
    value: '',
    error: null,
    validate: true,
  },
  password: {
    value: '',
    error: null,
    validate: true,
  }
};

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

export default function Index() {
  const router = useRouter()
  const classes = useStyles();  
  const [inputs, setInputs] = useState(defaultInputs);

  const changeInput = (e, key) => {
    if (e !== null && e.target) {
      setInputs({
        ...inputs,
        [e.target.name]: {
          ...inputs[e.target.name],
          value: e.target.value,
        },
      });
    } else {
      setInputs({
        ...inputs,
        [key]: {
          ...inputs[key],
          value: e,
        },
      });
    }
  };

  const sendForm = async () => {
    const sendData = {};
    const inputData = { ...inputs };
    Object.keys(inputData).forEach((item) => {
      sendData[item] = inputData[item].value;
    });
    const res = await firebase
    .auth()
    .signInWithEmailAndPassword(sendData.email, sendData.password);
    if(res && res.user) router.push('/Light');
  };

  useEffect(async () => {
    const dataFromBase = await getAllData();
    console.log(dataFromBase);
  },[])

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Авторизация
        </Typography>
        <Paper className={classes.megaComponent}>
          <Card className={classes.root}>
            <FormGroup>
              <FormControl>
                <InputLabel>Email</InputLabel>
                <Input
                  value={inputs.email.value}
                  type='email'
                  name='email'
                  id='email'
                  onChange={(e)=>changeInput(e)}
                />
              </FormControl>
              <FormControl>
                <InputLabel>Пароль</InputLabel>
                <Input
                  value={inputs.password.value}
                  type='password'
                  name='password'
                  id='password'
                  onChange={(e)=>changeInput(e)}
                />
              </FormControl>
              <Button simple color="primary" size="lg" onClick={sendForm}>
                Логин
              </Button>
            </FormGroup>
          </Card>
        </Paper>

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
