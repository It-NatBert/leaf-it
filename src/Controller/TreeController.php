<?php

namespace App\Controller;

use App\Repository\NoteTESTRepository;
use App\Service\BinaryTreeBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class TreeController extends AbstractController
{
    #[Route('/api/tree', name: 'api_tree')]
    public function getTree(NoteTESTRepository $repo, BinaryTreeBuilder $builder): JsonResponse
    {
        $notes = $repo->findBy(['important' => true]);
        $tree = $builder->buildTree($notes);

        return $this->json($tree);
    }

    #[Route('/api/note/{id}', name: 'api_note')]
    public function getNote($id, NoteTESTRepository $repo): JsonResponse
    {
        $note = $repo->find($id);
        if (!$note) return $this->json(['error' => 'Not found'], 404);

        return $this->json([
            'id' => $note->getId(),
            'content' => $note->getContent(),
            'important' => $note->isImportant()
        ]);
    }
}
