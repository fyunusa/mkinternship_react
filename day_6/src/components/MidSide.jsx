import React, { useState, useCallback, useEffect, useContext } from 'react';
import ReactFlow, {
  Controls,
  Background,
  addEdge,
  useStoreState,
  useStoreActions,
  registerNode,
} from 'reactflow';
import 'reactflow/dist/style.css';
import ShapeContext from './ShapeContext';

const getShapeIcon = (shapeType) => {
  switch (shapeType) {
    case 'Circle':
      return 'fa-circle';
    case 'Rectangle':
      return 'fa-square';
    case 'Triangle':
      return 'fa-caret-up';
    case 'Square':
      return 'fa-square';
    case 'Star':
      return 'fa-star';
    case 'Certificate':
      return 'fa-certificate';
    case 'Heart':
      return 'fa-heart';
    case 'Database':
      return 'fa-database';
    case 'Diamond':
      return 'fa-gem';
    case 'Cross':
      return 'fa-times';
    case 'Oval':
      return 'fa-circle';
    case 'Arrow':
      return 'fa-arrow-right';
    default:
      return '';
  }
};

const CustomShapeNode = ({ id, data }) => {
  const shapeIcon = getShapeIcon(data.label);
  return (
    <div style={{ color: 'white' }}>
      <i className={`fas ${shapeIcon}`} style={{ fontSize: '30px' }}></i>
    </div>
  );
};

registerNode('customShape', CustomShapeNode);

const MidSection = () => {
  const [shapeNode, setShapeNode] = useState(null);
  const { selectedShape } = useContext(ShapeContext);

  useEffect(() => {
    if (selectedShape) {
      const newNode = {
        id: 'shapeNode',
        type: 'customShape',
        data: { label: selectedShape },
        position: { x: 300, y: 150 },
        draggable: false,
      };

      setShapeNode(newNode);
    }
  }, [selectedShape]);

  const nodes = useStoreState((store) => store.nodes);
  const setNodes = useStoreActions((actions) => actions.setNodes);

  const onConnect = useCallback((params) => {
    setNodes((prevNodes) => addEdge(params, prevNodes));
  }, [setNodes]);

  useEffect(() => {
    const initialNodes = [
      { id: '1', type: 'input', data: { label: 'Hello' }, position: { x: 0, y: 0 } },
      { id: '2', data: { label: 'World' }, position: { x: 100, y: 75 } },
      { id: '3', data: { label: 'New Life' }, position: { x: 0, y: 150 } },
      { id: '4', data: { label: 'Good Life' }, position: { x: 200, y: 150 } },
    ];

    if (shapeNode) {
      const updatedNodes = [...initialNodes, shapeNode];
      setNodes(updatedNodes);
    } else {
      setNodes(initialNodes);
    }
  }, [shapeNode, setNodes]);

  return (
    <div className="bg-light card p-3" style={{ height: '100%' }}>
      <ReactFlow elements={nodes} onConnect={onConnect}>
        <Background color="midnightblue" />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default MidSection;



































// import React, { useState, useCallback, useEffect, useContext } from 'react';
// import ReactFlow, {
//   Controls,
//   Background,
//   applyNodeChanges,
//   applyEdgeChanges,
//   addEdge,
// } from 'reactflow';
// import 'reactflow/dist/style.css';
// import ShapeContext from './ShapeContext';

// const getShapeIcon = (shapeType) => {
//         switch (shapeType) {
//           case 'Circle':
//             return 'fa-circle';
//           case 'Rectangle':
//             return 'fa-square';
//           case 'Triangle':
//             return 'fa-caret-up';
//           case 'Square':
//             return 'fa-square';
//           case 'Star':
//             return 'fa-star';
//           case 'Certificate':
//             return 'fa-certificate';
//           case 'Heart':
//             return 'fa-heart';
//           case 'Database':
//             return 'fa-database';
//           case 'Diamond':
//             return 'fa-gem';
//           case 'Cross':
//             return 'fa-times';
//           case 'Oval':
//             return 'fa-circle';
//           case 'Arrow':
//             return 'fa-arrow-right';
//           default:
//             return '';
//         }
//       };
// const MidSection = () => {
//   const [shapeNode, setShapeNode] = useState(null);
//   const { selectedShape } = useContext(ShapeContext);

//   useEffect(() => {
//     if (selectedShape) {
//       const shapeIcon = getShapeIcon(selectedShape);

//       const newNode = {
//         id: 'shapeNode',
//         data: { label: selectedShape },
//         position: { x: 300, y: 150 },
//         // style: {
//         //   // background: 'transparent',
//         //   border: 'none',
//         //   display: 'flex',
//         //   justifyContent: 'center',
//         //   alignItems: 'center',
//         // },
//         // targetPosition: 'left',
//         // sourcePosition: 'right',
//         render: ({ style }) => (
//           <div style={{ ...style, color: 'white' }}>
//             <i className={`fas ${shapeIcon}`} style={{ fontSize: '30px' }}></i>
//           </div>
//         ),
//       };

//       setShapeNode(newNode);
//     }
//   }, [selectedShape]);

//   const Flow = () => {
//     const [nodes, setNodes] = useState([]);
//     const [edges, setEdges] = useState([]);

//     useEffect(() => {
//       const initialNodes = [
//         {
//           id: '1',
//           data: { label: 'Hello' },
//           position: { x: 0, y: 0 },
//           type: 'input',
//         },
//         {
//           id: '2',
//           data: { label: 'World' },
//           position: { x: 100, y: 75 },
//         },
//         {
//           id: '3',
//           data: { label: 'New Life' },
//           position: { x: 0, y: 150 },
//         },
//         {
//           id: '4',
//           data: { label: 'Good Life' },
//           position: { x: 200, y: 150 },
//         },
//       ];

//       if (shapeNode) {
//         const updatedNodes = [...initialNodes, shapeNode];
//         setNodes(updatedNodes);
//       } else {
//         setNodes(initialNodes);
//       }
//     }, [shapeNode]);

//     const onNodesChange = useCallback(
//       (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//       []
//     );

//     const onEdgesChange = useCallback(
//       (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//       []
//     );

//     const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    

//     return (
//       <div style={{ height: '100vh', backgroundColor: 'midnightblue', display: 'flex' }}>
//         <div style={{ flex: 1 }}>
//           <ReactFlow
//             nodes={nodes}
//             style={{ height: '100%' }}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//           >
//             <Background />
//             <Controls />
//           </ReactFlow>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-light card p-3" style={{ height: '100%' }}>
//       <Flow />
//     </div>
//   );
// };

// export default MidSection;




