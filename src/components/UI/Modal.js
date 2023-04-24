import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Backdrop = (props) => {
  return <div className={classes.Backdrop}></div>;
};
const Helper = document.getElementById("over-lays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, Helper)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        Helper
      )}
    </Fragment>
  );
};
export default Modal;
