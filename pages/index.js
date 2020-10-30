import React, {useState} from 'react';
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

export default function Index() {
  const classes = useStyles();
  const [state, setState] = useState({
    kuhn1: false,
    kuhn2: false,
    korr1: false,
    korr2: false,
    vann1: false,
    vann2: false,
    balkon1: false,
    balkon2: false,
    zal1: false,
    zal2: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container maxWidth="sm">
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
                  control={<Switch checked={state.kuhn1} onChange={handleChange} name="kuhn1" />}
                  label="Свет 1"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Switch checked={state.kuhn2} onChange={handleChange} name="kuhn2" />}
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
                  control={<Switch checked={state.vann1} onChange={handleChange} name="vann1" />}
                  label="Свет 1"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Switch checked={state.vann2} onChange={handleChange} name="vann2" />}
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
                  control={<Switch checked={state.balkon1} onChange={handleChange} name="balkon1" />}
                  label="Свет 1"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Switch checked={state.balkon2} onChange={handleChange} name="balkon2" />}
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
                  control={<Switch checked={state.zal1} onChange={handleChange} name="zal1" />}
                  label="Свет 1"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Switch checked={state.zal2} onChange={handleChange} name="zal2" />}
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
                  control={<Switch checked={state.korr1} onChange={handleChange} name="korr1" />}
                  label="Свет 1"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Switch checked={state.korr2} onChange={handleChange} name="korr2" />}
                  label="Свет 2"
                />
              </FormGroup>
            </CardContent>
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
