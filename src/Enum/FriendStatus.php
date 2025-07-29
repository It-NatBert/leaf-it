<?php

namespace App\Enum;

enum FriendStatus: string 
{
    case PENDING = 'pending';
    case ACCEPTED = 'accepted';
    case DECLINED = 'declined'; 
    case BLOCKED = 'blocked';
}
