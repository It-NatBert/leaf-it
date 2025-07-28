<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class InscriptionConfirmController extends AbstractController
{
    #[Route('/inscription-confirm', name: 'app_inscription_confirm')]
    public function index(): Response
    {
        return $this->render('inscription_confirm/index.html.twig', [
            'controller_name' => 'InscriptionConfirmController',
        ]);
    }
}
