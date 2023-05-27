import React from 'react';

export default function Header() {

  return (
    <header className='menu-header'>
      <div className='menu-header-left'>
        <h4 className='menu-header-title'>My Workspace</h4>
      </div>

      <div className='menu-header-mid'>
        <h4>Create</h4>
        <h4>Result</h4>
      </div>

      <div className='menu-header-right'>
        <button>Publish</button>
        <div className='circle'>
          <h4>FY</h4>
        </div>
      </div>

    </header>
  );
}
