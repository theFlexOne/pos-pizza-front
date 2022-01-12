import { useTheme } from '@emotion/react';

const useStyles = component => {
  const theme = useTheme();
  const styles = {
    customerLookup: {
      page: {
        display: 'flex',
        flex: '1',
        bgColor: '#000000',
      },
      formContainer: {
        flex: '2',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '4rem',
        // bgColor: theme.palette.secondary[200],
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      inputWrapper: {
        bgColor: 'red',
        bgcolor: theme.palette.secondary[50],
        mb: '1rem',
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
      keypadContainer: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem 1rem',
        gap: '1rem',
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
      // keyboardContainer: { backgroundColor: theme.palette.secondary[900] },
      inputWrapper: {
        backgroundColor: theme.palette.secondary[50],
        flex: '1 1 35%',
      },
      firstName: {
        flex: '1 1 30%',
      },
      lastName: {
        flex: '1 1 40%',
      },
    },
    customerAddress: {},
  };
  return styles[component];
};

export default useStyles;
