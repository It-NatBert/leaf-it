<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class NewLeafController extends AbstractController
{
    #[Route('/post', name: 'app_new_leaf')]
    public function index(): Response
    {
        return $this->render('new_leaf/index.html.twig', [
            'controller_name' => 'NewLeafController',
        ]);
    }
}
