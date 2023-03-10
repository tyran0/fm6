export function getOutermostParent(node, callback, limit=document.body) {
    if (!node) return;
    if (node === limit) return;
    if (callback(node)) return node;
    return getOutermostParent(node.parentNode, callback, limit);
}

export function getButton(target, root) {
    const button = getOutermostParent(target,
        node => (node.className + '')
            .includes('js-button'),
        root);
    if (button) return button;
}