import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Tooltip from '@material-ui/core/Tooltip';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import { IconContext } from "react-icons";
import { AiFillGithub, AiFillZhihuCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaBlogger } from 'react-icons/fa';

import 'fontsource-roboto';
import './main.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    ...theme.typography.gutterBottom,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
  listItemTextTitle: {
    width: '300px',
  },
  listItemTextDetail: {
    marginLeft: '20px',
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Paper elevation={10} className={classes.paper}>
              <Typography variant="h2" gutterBottom>Hi~</Typography>
              <Typography variant="h5" gutterBottom>I'm Leo Sirius, a senior markdown engineer :)</Typography>
              <Typography variant="h5" gutterBottom>You can contact me through following ways: </Typography>
              <IconContext.Provider value={{ size: '2em' }}>
                <Tooltip title="github" placement="bottom">
                  <a className="icon-link" href="https://github.com/LeoSirius"><AiFillGithub /></a>
                </Tooltip>
                <Tooltip title="zhihu" placement="bottom">
                  <a className="icon-link" href="https://www.zhihu.com/people/li-xiao-yu-16-37"><AiFillZhihuCircle/></a>
                </Tooltip>
                <Tooltip title="blog" placement="bottom">
                  <a className="icon-link" href="https://leosirius.github.io/blog/"><FaBlogger/></a>
                </Tooltip>
                <Tooltip title="email" placement="bottom">
                  <a className="icon-link" href="mailto:is.li.xiaoyu@qq.com"><MdEmail/></a>
                </Tooltip>
              </IconContext.Provider>
            </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={10} className={classes.paper}>
                <Typography variant="h4" gutterBottom>My Main Works</Typography>
                <List component="nav" className={classes.root} aria-label="mailbox folders">
                  <ListItemLink href="https://github.com/LeoSirius/open_dict">
                    <div className={classes.listItemTextTitle}>
                      <Typography variant="h5" gutterBottom>Open dict</Typography>
                    </div>
                    <div className={classes.listItemTextDetail}>
                      <Typography variant="h6" gutterBottom>a web dictionary service</Typography>
                    </div>
                  </ListItemLink>
                  <Divider />
                  <ListItemLink href="https://github.com/LeoSirius/leetcode_solutions">
                    <div className={classes.listItemTextTitle}>
                      <Typography variant="h5" gutterBottom>LeetCode solutions</Typography>
                    </div>
                    <div className={classes.listItemTextDetail}>
                      <Typography variant="h6" gutterBottom>a leetcode solutions in various languages and methods</Typography>
                    </div>
                  </ListItemLink>
                  <Divider light />
                  <ListItemLink href="https://github.com/LeoSirius/meta_c">
                    <div className={classes.listItemTextTitle}>
                      <Typography variant="h5" gutterBottom>Meta c</Typography>
                    </div>
                    <div className={classes.listItemTextDetail}>
                      <Typography variant="h6" gutterBottom>a c implmentation of data structures and algorithms</Typography>
                    </div>
                  </ListItemLink>
                  <Divider light />
                  <ListItem>
                    <div className={classes.listItemTextTitle}>
                      <Typography variant="h5" gutterBottom>jishengci miniapp</Typography>
                    </div>
                    <div className={classes.listItemTextDetail}>
                      <Typography variant="h6" gutterBottom>as name, is developing</Typography>
                    </div>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}

export default App;
