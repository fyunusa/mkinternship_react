import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const MidSection = () => {
    return (
        <div className="bg-light card p-3" style={{height: '100%' }}>
            <Flow />
        </div>
    );
};

const edg1 = { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' };
const edg2 = { id: '1-3', source: '1', target: '3' };
const initialEdges = [edg1, edg2];

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

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    );
}

export default MidSection;
