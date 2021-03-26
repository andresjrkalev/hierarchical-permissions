import React from 'react';

const Tree = ({ items }) =>
    <>
        {
            items.map(item =>
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <Tree items={item.children} />
                </ul>
            )
        }
    </>;

export default Tree;