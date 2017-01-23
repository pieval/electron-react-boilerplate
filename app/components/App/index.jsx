import React from 'react';
import SyncCounter from '../../containers/Counter';

export default () =>
  <div>
    <div>
      <h1>React App renderer</h1>
      <p style={{ color: 'green' }}>change text or style color in dev mode to see hot reloading</p>
    </div>
    <div>
      <h2>React Redux integration</h2>
      <SyncCounter />
    </div>
  </div>;
