<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class SalutController extends AbstractController
{
    #[Route('/', name: 'app_salut')]
    public function index(): Response
    {
        return $this->render('salut/index.html.twig', [
            'controller_name' => 'SalutController',
        ]);
    }
}
