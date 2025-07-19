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
    position: { x: 250, y: 50 },
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
    position: { x: 250, y: 150 },
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
    position: { x: 250, y: 250 },
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
    position: { x: 150, y: 350 },
    data: { label: 'Monolithic Frontend' },
    style: { 
      backgroundColor: '#dc2626', 
      color: 'white',
      width: 220,
      height: 80,
      fontSize: '12px'
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 80, y: 420 },
    data: { label: 'Feature 1' },
    style: { 
      backgroundColor: '#fca5a5', 
      color: 'black',
      width: 80,
      fontSize: '10px'
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 180, y: 420 },
    data: { label: 'Feature 2' },
    style: { 
      backgroundColor: '#fca5a5', 
      color: 'black',
      width: 80,
      fontSize: '10px'
    },
  },
  {
    id: '7',
    type: 'default',
    position: { x: 280, y: 420 },
    data: { label: 'Feature 3' },
    style: { 
      backgroundColor: '#fca5a5', 
      color: 'black',
      width: 80,
      fontSize: '10px'
    },
  },
  {
    id: '8',
    type: 'default',
    position: { x: 250, y: 520 },
    data: { label: 'API Gateway' },
    style: { 
      backgroundColor: '#6366f1', 
      color: 'white',
      width: 120,
      fontSize: '12px'
    },
  },
  {
    id: '9',
    type: 'default',
    position: { x: 100, y: 620 },
    data: { label: 'Service 1' },
    style: { 
      backgroundColor: '#8b5cf6', 
      color: 'white',
      width: 80,
      fontSize: '10px'
    },
  },
  {
    id: '10',
    type: 'default',
    position: { x: 250, y: 620 },
    data: { label: 'Service 2' },
    style: { 
      backgroundColor: '#8b5cf6', 
      color: 'white',
      width: 80,
      fontSize: '10px'
    },
  },
  {
    id: '11',
    type: 'default',
    position: { x: 400, y: 620 },
    data: { label: 'Service 3' },
    style: { 
      backgroundColor: '#8b5cf6', 
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
  { id: 'e4-8', source: '4', target: '8', animated: true },
  { id: 'e8-9', source: '8', target: '9', animated: true },
  { id: 'e8-10', source: '8', target: '10', animated: true },
  { id: 'e8-11', source: '8', target: '11', animated: true },
];

export const MonolithicDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100%', height: '500px' }}>
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