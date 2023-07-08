import { useContext } from 'react';
import ShapeContext from './ShapeContext';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function CustomTextNode({ data, isConnectable }) {
  const { selectedShape } = useContext(ShapeContext);

  let shapeChosen = 'square'; // Declare shapeChosen variable outside the if statement

  if (selectedShape) {
    shapeChosen = selectedShape; // Assign value inside the if block
  }

  console.log(shapeChosen)

  return (
    <div className={`text-updater-node ${shapeChosen}`}>
      <Handle type="target" isConnectable={isConnectable} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input id="text" name="text" className="nodrag" style={{ textAlign: 'center' }} />
      </div>
      <Handle
        type="source"
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default CustomTextNode;
