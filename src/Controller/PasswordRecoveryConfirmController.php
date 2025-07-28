<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PasswordRecoveryConfirmController extends AbstractController
{
    #[Route('/password-recovery-confirmed', name: 'app_password_recovery_confirm')]
    public function index(): Response
    {
        return $this->render('password_recovery_confirm/index.html.twig', [
            'controller_name' => 'PasswordRecoveryConfirmController',
        ]);
    }
}
