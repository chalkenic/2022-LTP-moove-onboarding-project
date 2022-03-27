<?php

class Helpers
{
    public static function convert_status_id(int $id)
    {
        
        switch($id):
            case(1):
                return '';
                break;
            case(2):
                return 'pe';
                break;
            case(3):
                return 'po';
                break;
            default:
                return 'error';
            endswitch;
    }
}