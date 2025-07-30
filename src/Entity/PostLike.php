<?php

namespace App\Entity;

use App\Repository\PostLikeRepository;
use Doctrine\DBAL\Types\Types;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PostLikeRepository::class)]
#[ORM\Table(name: 'post_like')]
#[ORM\UniqueConstraint(name:'post_like_complex_unique', columns: ['date_like', 'user_id', 'note_id'])]
#[UniqueEntity(fields: ['dateLike', 'user', 'note'], message: 'Une note a déjà été likée !')]
class PostLike
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'postLikes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'postLikes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Note $note = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $dateLike = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?User
    {
        return $this->user;
    }

    public function setUserId(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getNoteId(): ?Note
    {
        return $this->note;
    }

    public function setNoteId(?Note $note): static
    {
        $this->note = $note;

        return $this;
    }

    public function getDateLike(): ?\DateTimeImmutable
    {
        return $this->dateLike;
    }

    public function setDateLike(\DateTimeImmutable $dateLike): static
    {
        $this->dateLike = $dateLike;

        return $this;
    }
}
