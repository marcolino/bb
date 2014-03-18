<?php

  $slides = array(
    array(
      'ImageID' => 1,
      'Title' => 'Portovenere - Panoramica',
      'Summary' => 'This is summary of PP',
      'Path' => 'images/carousel-home/i.jpg'
    ),
  );

  header('Content-type: application/json');
  echo json_encode($slides); ?>
?>
