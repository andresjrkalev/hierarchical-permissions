export const toTree = (items, id = null) =>
    items
        .filter(item => item.parentId === id)
        .map(item => ({ ...item, children: toTree(items, item.id) }));