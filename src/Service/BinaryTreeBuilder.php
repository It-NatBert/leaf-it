<?php

namespace App\Service;

use App\Entity\NoteTEST;

class BinaryTreeBuilder
{
    public function buildTree(array $notes): ?array
    {
        $nodes = array_map(fn(NoteTEST $note) => [
            'id' => $note->getId(),
            'content' => $note->getContent()
        ], $notes);

        return $this->buildBinaryTree($nodes);
    }

    private function buildBinaryTree(array $nodes): ?array
    {
        if (count($nodes) === 0) return null;
        if (count($nodes) === 1) return $nodes[0];

        $parents = [];

        for ($i = 0; $i < count($nodes); $i += 2) {
            $left = $nodes[$i];
            $right = $nodes[$i + 1] ?? null;

            $parent = [
                'id' => uniqid("group-"),
                'content' => $right
                    ? "Branche entre : {$left['content']} et {$right['content']}"
                    : "Branche solo : {$left['content']}",
                'left' => $left,
                'right' => $right
            ];

            $parents[] = $parent;
        }

        return $this->buildBinaryTree($parents);
    }
}
