const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = tree.items.map((el) => {
      return insertNode(el, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }

  //update delete
  return { insertNode };
};

export default useTraverseTree;
