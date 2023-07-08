
import React, { useState, useCallback, useEffect, useContext } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Handle,
  Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import ShapeContext from './ShapeContext';
import CustomTextNode from './CustomShapeNode';
import '../../css/shapes.css'; // Import the shapes.css file


const MidSection = () => {
 
  const [shapeNodes, setShapeNodes] = useState([]);
  const { selectedShape } = useContext(ShapeContext);

  useEffect(() => {
    if (selectedShape) {
      const newNode = {
        id: `shapeNode-${shapeNodes.length + 1}`,
        data: { label: selectedShape },
        position: { x: 300, y: 150 },
        type: 'textUpdater',
        render: ({ style }) => <div style={{ ...style, color: 'white' }}></div>,
      };

      setShapeNodes((prevShapeNodes) => [...prevShapeNodes, newNode]);
    }
  }, [selectedShape]);

  const nodeTypes = { textUpdater: CustomTextNode };
  const initialNodes = [
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { label: 'World' },
      position: { x: 100, y: 75 },
    },
    {
      id: '3',
      data: { label: 'New Life' },
      position: { x: 0, y: 150 },
    },
    {
      id: '4',
      data: { label: 'Good Life' },
      position: { x: 200, y: 150 },
    }
  ];


  const Flow = () => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
      const allNodes = [...initialNodes, ...shapeNodes];
      setNodes(allNodes);
    }, [shapeNodes]);

    const onNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      []
    );

    const onEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      []
    );

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    
    return (
      <div style={{ height: '100vh', backgroundColor: 'midnightblue', display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ReactFlow
            nodes={nodes}
            style={{ height: '100%' }}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-light card p-3" style={{ height: '100%' }}>
      <Flow />
    </div>
  );
};

export default MidSection;


