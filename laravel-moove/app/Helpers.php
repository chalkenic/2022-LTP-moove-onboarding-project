<?php

if(!function_exists('convert_status_id')){
function convert_status_id(int $id)
    {
        
        switch($id):
            case(1):
                return '';
            case(2):
                return 'pe';
            case(3):
                return 'po';
            default:
                return 'error';
            endswitch;
    }
}