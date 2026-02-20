import { useState } from 'react';
import { DevProcessDiagram } from './components/DevProcessDiagram';

export default function App() {
  return (
    <div className="size-full bg-[#0a0a0f] overflow-auto">
      <DevProcessDiagram />
    </div>
  );
}
