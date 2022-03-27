if (! function_exists('convert_status_id')) {
    function convert_status_id($id) {
        switch($id)
            case(1):
                return '';
                break;
            case(2):
                return 'pe';
                break;
            case(3):
                return 'po';
                break;
    }
}