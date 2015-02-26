<?php

if ( isset($_POST['welcome']) ) {
    
    $postItem = array();
    $postName = array();
    
    foreach( $_POST as $key => $value ) {
        $postItem[] = $value;
        $postName[] = $key;
    }
    
    print_r($postItem);
    print_r($postName);
}
else {
    ?>No Post Data!<?
}

?>
