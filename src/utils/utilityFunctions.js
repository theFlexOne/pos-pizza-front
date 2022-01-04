const focusTextField = ({ target }) => {
  // console.log({ target });
  // TODO - validate target to be an HTMLElementInput with a type of "text"
  target.focus();
};

export { focusTextField };
