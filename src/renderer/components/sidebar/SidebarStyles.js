import { makeStyles } from '@material-ui/core';

const useSidebarStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        backgroundColor: theme.palette.background.sidebar,
        padding: 5,
    },
}));

export default useSidebarStyles;