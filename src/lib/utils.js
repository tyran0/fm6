export function getOutermostParent(node, callback, limit = document.body) {
  if (!node) return;
  if (node === limit) return;
  if (callback(node)) return node;
  return getOutermostParent(node.parentNode, callback, limit);
}

export function getButton(target, root) {
  const button = getOutermostParent(target,
    node => node.nodeName === 'BUTTON',
    root);
  if (button) return button;
}