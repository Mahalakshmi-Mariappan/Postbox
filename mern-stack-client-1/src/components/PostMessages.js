import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";
import { Grid, Paper, withStyles, List, ListItem, ListItemText, Typography, Divider, Button } from "@material-ui/core";
import PostMessageForm from "./PostMessageForm";
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";

const styles = theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
});

const PostMessages = ({ classes, fetchAllPostMessages, deletePostMessage, postMessageList }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    fetchAllPostMessages();
  }, [fetchAllPostMessages]); // Add all dependencies

  const onDelete = (id) => {
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Post Box"
            content="Deleted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            icon={<DeleteSweep />}
          />
        ),
      });
    };
    if (window.confirm("Are you sure to delete this record?")) deletePostMessage(id, onSuccess);
  };

  const fullScreenStyle = {
    backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    right: "50px",
    left: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section style={fullScreenStyle}>
      <div className="container-md h-custom">
        <div>
          <p>POSTBOX</p>
        </div>
        <Grid container>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <PostMessageForm {...{ currentId, setCurrentId }} />
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <List>
                {postMessageList.map((record, index) => (
                  <Fragment key={index}>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h5">{record.from}</Typography>
                        <Typography variant="h5">{record.to}</Typography>
                        <Typography variant="h6">{record.title}</Typography>
                        <div>{record.message}</div>
                        <div className={classes.actionDiv}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() => setCurrentId(record._id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() => onDelete(record._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </ListItemText>
                    </ListItem>
                    <Divider component="li" />
                  </Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
  deletePostMessage: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessages));
