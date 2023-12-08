import { indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: indigo[500],
  },
}));
