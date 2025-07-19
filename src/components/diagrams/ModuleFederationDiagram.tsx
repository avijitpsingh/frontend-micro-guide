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
    position: { x: 200, y: 50 },
    data: { label: 'Shell Application' },
    style: { 
      backgroundColor: '#059669', 
      color: 'white',
      width: 200,
      height: 60,
      fontSize: '14px'
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 225, y: 140 },
    data: { label: 'Module Federation\nRuntime' },
    style: { 
      backgroundColor: '#dc2626', 
      color: 'white',
      width: 150,
      height: 60,
      fontSize: '12px'
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 50, y: 280 },
    data: { label: 'Remote 1\nHeader/Nav' },
    style: { 
      backgroundColor: '#3b82f6', 
      color: 'white',
      width: 100,
      height: 60,
      fontSize: '10px'
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 180, y: 280 },
    data: { label: 'Remote 2\nProduct\nCatalog' },
    style: { 
      backgroundColor: '#10b981', 
      color: 'white',
      width: 100,
      height: 60,
      fontSize: '10px'
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 310, y: 280 },
    data: { label: 'Remote 3\nUser\nDashboard' },
    style: { 
      backgroundColor: '#f59e0b', 
      color: 'white',
      width: 100,
      height: 60,
      fontSize: '10px'
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 440, y: 280 },
    data: { label: 'Remote 4\nCheckout' },
    style: { 
      backgroundColor: '#8b5cf6', 
      color: 'white',
      width: 100,
      height: 60,
      fontSize: '10px'
    },
  },
  {
    id: '7',
    type: 'default',
    position: { x: 50, y: 380 },
    data: { label: 'Webpack\nFed Host 1' },
    style: { 
      backgroundColor: '#6b7280', 
      color: 'white',
      width: 100,
      height: 50,
      fontSize: '10px'
    },
  },
  {
    id: '8',
    type: 'default',
    position: { x: 180, y: 380 },
    data: { label: 'Webpack\nFed Host 2' },
    style: { 
      backgroundColor: '#6b7280', 
      color: 'white',
      width: 100,
      height: 50,
      fontSize: '10px'
    },
  },
  {
    id: '9',
    type: 'default',
    position: { x: 310, y: 380 },
    data: { label: 'Webpack\nFed Host 3' },
    style: { 
      backgroundColor: '#6b7280', 
      color: 'white',
      width: 100,
      height: 50,
      fontSize: '10px'
    },
  },
  {
    id: '10',
    type: 'default',
    position: { x: 440, y: 380 },
    data: { label: 'Webpack\nFed Host 4' },
    style: { 
      backgroundColor: '#6b7280', 
      color: 'white',
      width: 100,
      height: 50,
      fontSize: '10px'
    },
  },
  {
    id: '11',
    type: 'default',
    position: { x: 50, y: 480 },
    data: { label: 'Exposes:\nNavigation' },
    style: { 
      backgroundColor: '#f3f4f6', 
      color: 'black',
      width: 100,
      height: 40,
      fontSize: '10px',
      border: '1px dashed #6b7280'
    },
  },
  {
    id: '12',
    type: 'default',
    position: { x: 180, y: 480 },
    data: { label: 'Exposes:\nProductList' },
    style: { 
      backgroundColor: '#f3f4f6', 
      color: 'black',
      width: 100,
      height: 40,
      fontSize: '10px',
      border: '1px dashed #6b7280'
    },
  },
  {
    id: '13',
    type: 'default',
    position: { x: 310, y: 480 },
    data: { label: 'Exposes:\nDashboard' },
    style: { 
      backgroundColor: '#f3f4f6', 
      color: 'black',
      width: 100,
      height: 40,
      fontSize: '10px',
      border: '1px dashed #6b7280'
    },
  },
  {
    id: '14',
    type: 'default',
    position: { x: 440, y: 480 },
    data: { label: 'Exposes:\nPayment' },
    style: { 
      backgroundColor: '#f3f4f6', 
      color: 'black',
      width: 100,
      height: 40,
      fontSize: '10px',
      border: '1px dashed #6b7280'
    },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#10b981' } },
  { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#f59e0b' } },
  { id: 'e2-6', source: '2', target: '6', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'e3-7', source: '3', target: '7' },
  { id: 'e4-8', source: '4', target: '8' },
  { id: 'e5-9', source: '5', target: '9' },
  { id: 'e6-10', source: '6', target: '10' },
  { id: 'e7-11', source: '7', target: '11', style: { strokeDasharray: '5,5' } },
  { id: 'e8-12', source: '8', target: '12', style: { strokeDasharray: '5,5' } },
  { id: 'e9-13', source: '9', target: '13', style: { strokeDasharray: '5,5' } },
  { id: 'e10-14', source: '10', target: '14', style: { strokeDasharray: '5,5' } },
];

export const ModuleFederationDiagram = () => {
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