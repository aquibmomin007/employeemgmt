const options = {
    layout: {
      improvedLayout: false,
      hierarchical: {
        enabled: true,
        parentCentralization: false,
        direction: 'UD',
        sortMethod: 'directed',
        levelSeparation: 150,
        treeSpacing: 250,
        nodeSpacing: 150,
        blockShifting: false,
        edgeMinimization: false,
      }
    },
    manipulation: {
        enabled: false,
        initiallyActive: false,
        editEdge: false,
    },
    edges: {
      color: "#096dd9"
    },
    interaction: {
        dragNodes: false,
        dragView: false,
        hideEdgesOnDrag: false,
        hideNodesOnDrag: false,
        hover: true,
        hoverConnectedEdges: false,
        keyboard: {
            enabled: false
        },
        multiselect: false,
        navigationButtons: false,
        selectable: false,
        selectConnectedEdges: false,
        zoomView: false
    },
    height: "500px"
};

export default options