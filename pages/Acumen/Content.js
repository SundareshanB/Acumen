import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TreeView from '../../components/Treeview';
import Accountpanel from './accountpanel';
import Modal from "../Modal/Datamanager";
import Driver from "../Modal/Driverbuild";
import Modelstats from "../Modal/Modelstats"
import Dbconnection from "../Modal/dbconnection"
import { useSelector } from 'react-redux';

const styles = (theme) => ({
    paper: {
        width: '300px',
        margin: '0 16px auto 0px',
        overflow: 'auto',
        height: '100%',
        paddingBottom:6
    },
    paper2: {
        width: 'calc(100% - 330px)',
        margin: '0',
        overflow: 'auto',
        height: '100%',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    tree: {
        width: '250px'
    },
    body: {
        width: 'calc(100% - 250px)',
    }
});

function Content(props) {
    const { classes } = props;
    const datamanager = useSelector(state => state.modal.datamanager)
    const driver = useSelector (state=> state.modal.driver)
    const modelstats = useSelector(state=>state.modal.modelstats)
    const dbconnection = useSelector(state=>state.modal.dbconnection)
    
    return (
        <div className={classes.content}>
            <Paper className={classes.paper}>
                <TreeView />
            </Paper>
            <Paper className={classes.paper2}>
                <Accountpanel />
            </Paper>
            {datamanager &&<Modal />}
            {driver && <Driver />}
            {modelstats && <Modelstats />}
            {dbconnection && <Dbconnection />}
        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);