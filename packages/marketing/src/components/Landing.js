import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="data:image/jpeg;base64,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"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}