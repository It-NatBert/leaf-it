
import React, { useEffect, useState } from "react";
import PlantIcon from "./Plant/Plant";

type TreeNodeType = {
  id: number;
  content: string;
  left?: TreeNodeType;
  right?: TreeNodeType;
  x?: number;
  y?: number;
  depth?: number;
  rotation?:number;
};

type Note = {
  id: number;
  content: string;
  important: boolean;
};

function assignPositions(node: TreeNodeType | undefined, depth = 0, xOffset = { value: 0 }) 
{
  if (!node) return;

  const GAP_X = 30;
  const GAP_Y = 30;
  
  const randomOffset = (Math.random() - 0.6) *30;
  node.depth = depth;

  if (!node.left && !node.right) {
    node.x = xOffset.value * GAP_X;
    node.y = -depth * GAP_Y + randomOffset;
    xOffset.value++;
  } else {
    assignPositions(node.left, depth + 1, xOffset);
    assignPositions(node.right, depth + 1, xOffset);

    const leftX = node.left?.x ?? 0;
    const rightX = node.right?.x ?? leftX;
    node.x = (leftX + rightX) / 2;
    node.y = -depth * GAP_Y;
  }
  console.log(`Node ${node.content}: x=${node.x}, y=${node.y}`);
}

function TreeNode(
  { 
    node, 
    onSelect 
  }: 
  { 
    node: TreeNodeType;
    onSelect: (n: TreeNodeType) => void; 
  }) 
  {
  if (!node) return null;

  const isLeaf = !node.left && !node.right;
  const leafSize = 10;
  const strokeWidth = node.depth === 0 ? 2 : node.depth === 1 ? 2 : 1;
  node.rotation = Math.random() *  6 - 3;
  const centerX = node.x;
  const centerY = node.y! - 12;
  return (
    <>
      {node.depth==0 && (
        <line 
        x1={node.x}
        y1={node.y}
        x2={node.x}
        y2={node.y! + 100}
        stroke="green"
        strokeWidth={4}
      />
      )}
      {node.left && (
        <line
          x1={node.x}
          y1={node.y}
          x2={node.left.x}
          y2={node.left.y}
          stroke="green"
          strokeWidth={strokeWidth}
        />
      )}
      {node.right && (
        <line
          x1={node.x}
          y1={node.y}
          x2={node.right.x}
          y2={node.right.y}
          stroke="green"
          strokeWidth={strokeWidth}
        />
      )}
      {isLeaf &&(
        <g onClick={() => onSelect(node)} style={{ cursor: "pointer" }}>
          {}
          <path
            d={ `
              M ${centerX} ${centerY + 12}
              Q ${centerX! - 12} ${centerY}, ${centerX} ${centerY! - 12}
              Q ${centerX! + 12} ${centerY}, ${centerX} ${centerY + 12}
            `}
            fill="transparent"
            stroke="green"
            strokeWidth={1}
            transform={`rotate(${node.rotation} ${centerX} ${centerY})`}
          />
          {/* <line
            x1={node.x}
            y1={node.y}
            x2={node.x! + leafSize / 2}
            y2={node.y! - leafSize / 2}
            stroke="green"
            strokeWidth={1}
          /> */}
          <title>{node.content}</title>
        </g>
      )}

      {node.left && <TreeNode node={node.left} onSelect={onSelect} />}
      {node.right && <TreeNode node={node.right} onSelect={onSelect} />}
    </>
  );
}

function computeBoundingBox(node: TreeNodeType | undefined) {
  if (!node) return { minX: 0, minY: 0, maxX: 0, maxY: 0 };

  let minX = node.x ?? 0;
  let maxX = node.x ?? 0;
  let minY = node.y ?? 0;
  let maxY = node.y ?? 0;

  const recurse = (n: TreeNodeType | undefined) => {
    if (!n) return;
    if (n.x !== undefined && n.y !== undefined) {
      minX = Math.min(minX, n.x);
      maxX = Math.max(maxX, n.x);
      minY = Math.min(minY, n.y);
      maxY = Math.max(maxY, n.y);
    }
    recurse(n.left);
    recurse(n.right);
  };

  recurse(node);

  const padding = 40;
  return {
    minX: minX - padding,
    minY: minY - padding,
    width: maxX - minX + 2 * padding,
    height: maxY - minY + 2 * padding,
  };
}

export default function BinaryTree() {
  const [tree, setTree] = useState<TreeNodeType | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasLeaves = (node:any) : boolean => {
    if (!node) return false;
    if (!node.left && !node.right) return true;
    return hasLeaves(node.left) || hasLeaves(node.right);
  }
  useEffect(() => {
    fetch(`/api/tree`) 
      .then((res) => res.json())
      .then((data: TreeNodeType) => {
        console.log("Données récupérées:", data);
        assignPositions(data);
        setTree(data);
      })
      .catch((error) => console.error("Erreur lors de la récupération de l'arbre:", error));
  }, []);

  const handleSelect = (node: TreeNodeType) => {
    fetch(`/api/note/${node.id}`)
      .then((res) => res.json())
      .then((data) => setSelectedNote(data))
      .catch((error) => console.error("Erreur lors de la récupération de la note:", error));
  };

  const { viewBox, center } = React.useMemo(() => {
  if (!tree) {
    return {
      viewBox: "0 0 600 600",
      center: { x: 300, y: 300 },
    };
  }

  const box = computeBoundingBox(tree);
    return {
      viewBox: `${box.minX} ${box.minY} ${box.width} ${box.height}`,
      center: {
        x: box.minX + box.width! / 2,
        y: box.minY + box.height! / 2,
      },
    };
  }, [tree]);

  return (
    <>
      {tree && hasLeaves(tree) ? (
        <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
          <TreeNode node={tree} onSelect={handleSelect} />
        </svg>
      ) : (
        <svg viewBox="-25 -25 50 50">
          <PlantIcon scale={0.4} centered />
        </svg>
      )}
      {selectedNote && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: "left",
          zIndex: 1000,
        }}
          onClick={() => setSelectedNote(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              padding: '2rem',
              maxWidth: '90%',
              width: '400px',
              textAlign: 'center',
            }}
          >
            <h2>Jeudi 15 Juin 2025</h2>
            <h3>Vous avez dit :</h3>
            <div className="card-post">
              <p className="user"><strong>@</strong> {selectedNote.id}</p>
              <p className="message">{selectedNote.content}</p>
            </div>
            {/* <button onClick={() => setSelectedNote(null)} style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>Fermer</button> */}
          </div>
        </div>
      )}

      
    </>
  );
}
