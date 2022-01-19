import { useTheme } from '@emotion/react';

const useStyles = (newTheme = undefined) => {
  const currentTheme = useTheme();
  const theme = newTheme || currentTheme;
  const styles = () => ({
    menu: {
      mainPanel: {
        flex: '3',
        alignSelf: 'stretch',
        display: 'flex',
        backgroundColor: theme.palette.secondary[200],
      },
      sidePanel: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary[500],
      },
    },
    customerLookup: {
      page: {
        display: 'flex',
        flex: '1',
      },
      formContainer: {
        flex: '2',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '4rem',
        borderRight: `1.5px solid ${theme.palette.secondary[500]}`,
        backgroundColor: theme.palette.secondary[200],
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      inputWrapper: {
        bgcolor: theme.palette.secondary[50],
        mb: '1rem',
      },
      keypadContainer: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem 1rem',
        gap: '1rem',
        bgcolor: theme.palette.secondary[400],
      },
      buttonsBox: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.5rem',
        bgcolor: '#ff00d4',
      },
    },
    customerFormName: {
      page: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary[200],
      },
      formContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
      },
      form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexBasis: '70%',
        gap: '1.5rem',
        '& > *': {
          borderRadius: '4px',
        },
      },
      firstNameWrapper: {
        backgroundColor: theme.palette.secondary[50],
        borderRadius: '4px',
        flex: '1 1 35%',
      },
      firstName: {
        flex: '1 1 30%',
      },
      lastNameWrapper: {
        flex: '1 1 55%',
        backgroundColor: theme.palette.secondary[50],
      },
      lastName: {
        flex: '1 1 40%',
      },
      keyboardContainer: {
        display: 'flex',
        flex: '1',
        height: 'auto',
        padding: '.75rem 1.25rem',
        backgroundColor: theme.palette.secondary[900],
      },
    },
    customerFormAddress: {
      page: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      formContainer: {
        flex: 1,
        bgcolor: theme.palette.secondary[200],
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: '1rem',
      },
      inputWrapper: {
        backgroundColor: theme.palette.secondary[50],
        borderRadius: '4px',
      },
      streetAddress: {
        flexBasis: '60%',
      },
      secondaryAddress: {
        flexBasis: '35%',
      },
      city: {
        flexBasis: '65%',
      },
      state: {
        flexBasis: '30%',
      },
      keyboardContainer: {
        display: 'flex',
        flex: '1',
        height: 'auto',
        padding: '.75rem 1.25rem',
        backgroundColor: theme.palette.secondary[900],
      },
    },
    cart: {
      cell: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        flex: '3',
        maxHeight: '100%',
      },
      list: {
        padding: '.5rem',
        flex: '1 1 90%',
        backgroundColor: theme.palette.secondary[50],
        margin: '1rem .5rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
      },
    },
    customers: {
      container: {
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.secondary[500],
        flex: '1',
        overflow: 'hidden',
      },
      wrapper: {
        m: '.5rem',
        display: 'flex',
        flexDirection: 'column',
      },
      table: {
        flexGrow: '1',
        boxShadow: '.5px 2px 2px rgba(0,0,0,.3)',
        minWidth: '700px',
      },
      body: {
        backgroundColor: theme.palette.secondary[300],
      },
      row: {
        backgroundColor: theme.palette.secondary[700],
      },
      cell: {
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          svg: {
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.25)',
          },
        },
      },
      arrowDown: { ml: '.75rem', fontSize: '1rem' },
      arrowUp: { ml: '.75rem', fontSize: '1rem' },
      buttons: {
        mt: '.5rem',
        // mr: '1rem',
        // ml: '1rem',
        display: 'flex',
        gap: '.5rem',
        minHeight: '3.5rem',
        flex: '1',
      },
    },
    customerTableRow: {
      row: {
        '&:nth-of-type(even)': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      },
      clearIcon: {
        fontSize: '1.5rem',
        '&:hover': { color: theme.palette.primary[600] },
      },
    },
    keyboard: {
      keyboardContainer: {
        flexBasis: '100%',
        backgroundColor: '#38D435',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    numPad: {
      container: {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      },
      row: {
        display: 'flex',
      },
      button: { width: '100px', height: '100px', m: '1.5px' },
    },
    login: {
      container: {
        backgroundColor: theme.palette.secondary[600],
        flexGrow: '1',
      },
      wrapper: {
        display: 'flex',
        // alignItems: 'start',
        backgroundColor: theme.palette.secondary[300],
        width: '650px',
        margin: '2rem auto',
        height: '85%',
        // pb: '1rem',
      },
      numPadWrapper: {
        flexGrow: '3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      buttonsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        // padding: 'auto 0',
        // alignItems: 'center',
        justifyContent: 'center',
        flexGrow: '1',
      },
      textField: {
        // marginRight: '1rem',
        maxWidth: '100px',
      },
    },
  });
  return styles();
};

export default useStyles;
