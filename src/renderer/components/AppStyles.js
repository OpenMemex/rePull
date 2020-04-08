import { makeStyles } from '@material-ui/core';

const useAppStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    toolbar: {
        flexGrow: 0,
        flexShrink: 0,
    },
    mainWrapper: {
        display: 'flex',
        height: '100%',
        minHeight: 0,
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
    },
    sidebar: {
        flexGrow: 0,
        flexShrink: 0,
    },
    main: {
        overflow: 'auto',
        flexGrow: 1,
    },
}));

export default useAppStyles;
