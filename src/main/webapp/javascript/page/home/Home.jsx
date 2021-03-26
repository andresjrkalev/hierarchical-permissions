import React, { Component } from 'react';
import Error from '../../common/component/Error';
import Label from '../../common/component/Label';
import Loading from '../../common/component/Loading';
import Row from '../../common/component/Row';
import Tree from '../../common/component/Tree';
import {
    LABEL_CREATE,
    LABEL_HIERARCHICAL_PERMISSIONS_MANAGEMENT,
    LABEL_NO_ROLES,
    LABEL_PARENT,
    LABEL_ROLE,
    LABEL_ROLES,
    TEXT_SIZE_18
} from '../../common/constants';
import { toTree } from '../../util/tree';

class Home extends Component {
    componentDidMount() {
        const { getPermissions } = this.props;
        getPermissions();
    }

    render() {
        const { permissions, name, parent, loading, error, setName, setParent, createPermission } = this.props;
        const tree = toTree(permissions);
        return (
            <>
                <Label text={LABEL_HIERARCHICAL_PERMISSIONS_MANAGEMENT} fontSize={TEXT_SIZE_18} />
                <Row>
                    <Label text={LABEL_ROLE} />
                    <input type="text" value={name} onChange={event => setName(event.target.value)} />
                </Row>
                <Row>
                    <Label text={LABEL_PARENT} />
                    <select value={parent} onChange={event => setParent(event.target.value)}>
                        <option key="0" value=""></option>
                        { permissions.map(({ id, name }) =>
                            <option key={id} value={id}>{name}</option>)
                        }
                    </select>
                </Row>
                <button onClick={() => createPermission(name, parent)}>{LABEL_CREATE}</button>
                { loading.create && (<Loading />) }
                { error.create && (<Error message={error.create} />) }
                <Label text={LABEL_ROLES} />
                { loading.get && (<Loading />) }
                { !permissions.length && (<i>{LABEL_NO_ROLES}</i>) }
                { !loading.get && (<div className="tree"><Tree items={tree} /></div>) }
            </>
        );
    }
}

export default Home;