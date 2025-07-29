<?php

namespace App\Enum;

enum NoteStatus: string 
{
    case POSTED = 'posted';
    case ARCHIVED = 'archived';
    case DELETED = 'deleted'; 
}