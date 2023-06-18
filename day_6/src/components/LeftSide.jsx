import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const LeftSection = () => {
    return (
        <div className="bg-light card p-3" style={{ }}>
            <Flow />
        </div>
    );
};

const nodes = [
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { label: 'World' },
      position: { x: 100, y: 100 },
    },
  ];
  
const Flow = () => {
    return (
      <div style={{ height: '100%' }}>
        <ReactFlow nodes={nodes}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  }


export default LeftSection;
