import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 300, y: 50 },
    data: { label: 'User Traffic' },
    style: { 
      backgroundColor: '#3b82f6', 
      color: 'white',
      width: 120,
      fontSize: '12px'
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 300, y: 150 },
    data: { label: 'Load Balancer' },
    style: { 
      backgroundColor: '#10b981', 
      color: 'white',
      width: 120,
      fontSize: '12px'
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 300, y: 250 },
    data: { label: 'CDN' },
    style: { 
      backgroundColor: '#f59e0b', 
      color: 'white',
      width: 120,
      fontSize: '12px'
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 250, y: 350 },
    data: { label: 'Shell Application/Container' },
    style: { 
      backgroundColor: '#059669', 
      color: 'white',
      width: 220,
      height: 80,
      fontSize: '12px'
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 280, y: 420 },
    data: { label: 'Shared Component Library' },
    style: { 
      backgroundColor: '#34d399', 
      color: 'black',
      width: 160,
      fontSize: '10px'
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 50, y: 550 },
    data: { label: 'Micro FE 1\n(React)\nTeam A' },
    style: { 
      backgroundColor: '#3b82f6', 
      color: 'white',
      width: 120,
      height: 80,
      fontSize: '10px'
    },
  },
  {
    id: '7',
    type: 'default',
    position: { x: 250, y: 550 },
    data: { label: 'Micro FE 2\n(Vue)\nTeam B' },
    style: { 
      backgroundColor: '#10b981', 
      color: 'white',
      width: 120,
      height: 80,
      fontSize: '10px'
    },
  },
  {
    id: '8',
    type: 'default',
    position: { x: 450, y: 550 },
    data: { label: 'Micro FE 3\n(Angular)\nTeam C' },
    style: { 
      backgroundColor: '#f59e0b', 
      color: 'white',
      width: 120,
      height: 80,
      fontSize: '10px'
    },
  },
  {
    id: '9',
    type: 'default',
    position: { x: 50, y: 680 },
    data: { label: 'Team A\nServices' },
    style: { 
      backgroundColor: '#7c3aed', 
      color: 'white',
      width: 80,
      fontSize: '10px'
    },
  },
  {
    id: '10',
    type: 'default',
    position: { x: 250, y: 680 },
    data: { label: 'Team B\nServices' },
    style: { 
      backgroundColor: '#7c3aed', 
      color: 'white',
      width: 80,
      fontSize: '10px'
    },
  },
  {
    id: '11',
    type: 'default',
    position: { x: 450, y: 680 },
    data: { label: 'Team C\nServices' },
    style: { 
      backgroundColor: '#7c3aed', 
      color: 'white',
      width: 80,
      fontSize: '10px'
    },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-6', source: '4', target: '6', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e4-7', source: '4', target: '7', animated: true, style: { stroke: '#10b981' } },
  { id: 'e4-8', source: '4', target: '8', animated: true, style: { stroke: '#f59e0b' } },
  { id: 'e6-9', source: '6', target: '9', animated: true },
  { id: 'e7-10', source: '7', target: '10', animated: true },
  { id: 'e8-11', source: '8', target: '11', animated: true },
];

export const MicroFrontendDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        proOptions={{ hideAttribution: true }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};