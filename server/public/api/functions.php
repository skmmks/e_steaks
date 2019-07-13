<?php
    function error_handler($error) {
        $output = array(
            'success' => 'false',
            'error' => $error -> getMessage()
        );
    }
?>
