import { useContext, useState } from 'react';
import ShapeContext from './ShapeContext';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function CustomTextNode({ data, isConnectable }) {
  const { selectedShape } = useContext(ShapeContext);
  const [text, setText] = useState('Text');

  let shapeChosen = 'square';

  if (selectedShape) {
    shapeChosen = selectedShape;
  }

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={`text-updater-node ${shapeChosen}`}>
      <Handle type="target" isConnectable={isConnectable} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          id="text"
          name="text"
          value={text}
          onChange={handleChange}
          style={{ textAlign: 'center' }}
        />
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
