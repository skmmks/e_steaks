<?php
if(!function_exists('error_handler')) {
    function error_handler($error) {
        http_response_code(500);
        $output = [
            'success' => 'false',
            'error' => $error -> getMessage()
        ];
        $json_output = json_encode($output);
        print($json_output);
    }
}
?>
