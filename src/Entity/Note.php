<?php

namespace App\Entity;

use App\Enum\NoteStatus;
use App\Repository\NoteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: NoteRepository::class)]
#[ORM\Table(name: 'note')]
#[ORM\UniqueConstraint(name:'note_complex_unique', columns: ['date_note', 'user_id'])]
#[UniqueEntity(fields: ['dateNote', 'user'], message: 'Une note a déjà été postée')]
class Note
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'notes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $dateNote = null;

    #[ORM\Column]
    private ?bool $isOnTheTree = null;

    #[ORM\Column(length: 512)]
    private ?string $content = null;

    #[ORM\Column(enumType: NoteStatus::class)]
    private ?NoteStatus $status = null;

    /**
     * @var Collection<int, PostLike>
     */
    #[ORM\OneToMany(targetEntity: PostLike::class, mappedBy: 'note_id')]
    private Collection $postLikes;

    public function __construct()
    {
        $this->postLikes = new ArrayCollection();
    }

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

    public function getDateNote(): ?\DateTimeImmutable
    {
        return $this->dateNote;
    }

    public function setDateNote(\DateTimeImmutable $dateNote): static
    {
        $this->dateNote = $dateNote;

        return $this;
    }

    public function isOnTheTree(): ?bool
    {
        return $this->isOnTheTree;
    }

    public function setIsOnTheTree(bool $isOnTheTree): static
    {
        $this->isOnTheTree = $isOnTheTree;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function getStatus(): ?NoteStatus
    {
        return $this->status;
    }

    public function setStatus(NoteStatus $status): static
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection<int, PostLike>
     */
    public function getPostLikes(): Collection
    {
        return $this->postLikes;
    }

    public function addPostLike(PostLike $postLike): static
    {
        if (!$this->postLikes->contains($postLike)) {
            $this->postLikes->add($postLike);
            $postLike->setNoteId($this);
        }

        return $this;
    }

    public function removePostLike(PostLike $postLike): static
    {
        if ($this->postLikes->removeElement($postLike)) {
            // set the owning side to null (unless already changed)
            if ($postLike->getNoteId() === $this) {
                $postLike->setNoteId(null);
            }
        }

        return $this;
    }
}
