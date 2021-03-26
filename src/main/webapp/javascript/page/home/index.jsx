import Home from './Home';
import { connect } from 'react-redux';
import { getPermissions, createPermission, setName, setParent } from './action';

const mapStateToProps = state => ({
    permissions: state.home.permissions,
    name: state.home.name,
    parent: state.home.parent,
    loading: state.home.loading,
    error: state.home.error
});

const mapDispatchToProps = dispatch => ({
    getPermissions: () => getPermissions(dispatch),
    createPermission: (name, parent) => createPermission(name, parent, dispatch),
    setName: name => dispatch(setName(name)),
    setParent: id => dispatch(setParent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);