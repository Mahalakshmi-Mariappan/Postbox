import React, { useEffect } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn } from "@material-ui/icons";

const initialFieldValues = {
  from: '',
  to: '',
  title: '',
  message: ''
}

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  postBtn: {
    width: "50%"
  }
});

const PostMessageForm = ({ classes, currentId, postMessageList, setCurrentId, createPostMessage, updatePostMessage }) => {
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldValues, setCurrentId);

  useEffect(() => {
    if (currentId !== 0) {
      setValues({
        ...postMessageList.find(x => x._id === currentId)
      });
      setErrors({});
    }
  }, [currentId, postMessageList, setValues, setErrors]); // Add all dependencies

  const validate = () => {
    let temp = { ...errors };
    temp.from = values.from ? "" : "This field is required.";
    temp.to = values.to ? "" : "This field is required.";
    temp.title = values.title ? "" : "This field is required.";
    temp.message = values.message ? "" : "This field is required.";
    setErrors({
      ...temp
    });
    return Object.values(temp).every(x => x === "");
  };

  const handleSubmit = e => {
    e.preventDefault();
    const onSuccess = () => {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Post Box"
          content="Submitted successfully"
          scheme={Cinnamon.Crisp.SCHEME_PURPLE}
          icon={<AssignmentTurnedIn />}
        />
      });
      resetForm();
    };
    if (validate()) {
      if (currentId === 0)
        createPostMessage(values, onSuccess);
      else
        updatePostMessage(currentId, values, onSuccess);
    }
  };

  return (
    <div className="container-md h-custom">
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField
          name="from"
          variant="outlined"
          label="From"
          fullWidth
          value={values.from}
          onChange={handleInputChange}
          {...(errors.from && { error: true, helperText: errors.from })}
        />
        <TextField
          name="to"
          variant="outlined"
          label="To"
          fullWidth
          value={values.to}
          onChange={handleInputChange}
          {...(errors.to && { error: true, helperText: errors.to })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={values.title}
          onChange={handleInputChange}
          {...(errors.title && { error: true, helperText: errors.title })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={values.message}
          onChange={handleInputChange}
          {...(errors.message && { error: true, helperText: errors.message })}
        />
        <div className={classes.smMargin}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.postBtn}
          >Submit</Button>
          <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Are you sure you want to <a href="/Home" className="link-danger">Sign out</a>?</p>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  postMessageList: state.postMessage.list
});

const mapActionToProps = {
  createPostMessage: actions.create,
  updatePostMessage: actions.update
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessageForm));
