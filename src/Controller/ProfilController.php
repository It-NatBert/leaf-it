<?php

namespace App\Controller;

use App\Entity\Note;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class ProfilController extends AbstractController
{
    #[Route('/profil', name: 'app_profil')]
    public function index(EntityManagerInterface $em): Response
    {
        $user = $this->getUser();

        return $this->render('profil/index.html.twig', [
            'user' => $user ? [
                'id' => $user->getId()
            ] : null
        ]);
    }

    #[Route('/api/notes', name: 'api_notes')]
    public function notes(EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) {
            return $this->json(['error' => 'Unauthorized'], 401);
        }
        var_dump($user);
        $notes = $em->getRepository(Note::class)->findBy(['user' => $user]);

        $arrayNotes = array_map(fn($note) => [
            'id' => $note->getId(),
            'content' => $note->getContent(),
            'date' => $note->getCreatedAt()->format('Y-m-d'),
            'status' => $note->getStatus()->value, // si ENUM
            'isOnTheTree' => $note->isOnTheTree(),
        ], $notes);

        return $this->json($arrayNotes);
    }
}