const styles = {
  keyboard: {
    minHeight: '50vh',
    width: '100%',
    backgroundColor: 'rgb(100,100,100)',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '.25rem 0',
  },
  keyboardRow: {
    flex: '1',
    display: 'grid',
    gridTemplateColumns: 'repeat(24, 1fr)',
    gridTemplateRows: '1fr',
    // gap: '.25rem',
    paddingBottom: '.25rem',
  },
  firstRow: {
    // paddingTop: '.5rem',
    borderBottom: '1px solid rgba(80, 80, 80, .25)',
  },
  secondRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(24, 1fr)',
    gridTemplateRows: '1fr',
  },
  thirdRow: {},
  fourthRow: {},
  bottomRow: {
    paddingBottom: '0',
  },
  key: {
    display: 'inline-block',
    minHeight: '100%',
    margin: '.15rem',
    // backgroundColor: 'rgb(180,180,180)',
  },
  keySizes: {
    sm: {
      gridColumn: 'span 2',
    },
    md: {
      gridColumn: 'span 3',
    },
    lg: {
      gridColumn: 'span 4',
    },
    xl: {
      gridColumn: 'span 5',
    },
    space: {
      gridColumn: 'span 14',
    },
  },
};

export default styles;
