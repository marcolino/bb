<?php

  $imagesPath = "../images/carousel-home/";

  $slides = array();

  if (is_dir($imagesPath)) {
    if ($dh = opendir($imagesPath)) {
      while (($file = readdir($dh)) !== false) {
        #echo "filename: ." . $file . "<br />";
        if ($file === "." || $file === "..") {
          continue;
        }
        array_push($slides, array(
          'image' => $imagesPath . $file, #'images/carousel-home/La vista sul mare.jpg',
          'text' => basename($file), #'Portovenere - B&B Gli Olivi - La vista sul mare',
          )
        );
      }
      closedir($dh);
    }
  }

  header('Content-type: application/json');
  header('Access-Control-Allow-Origin: *');
  echo json_encode($slides);
?>
