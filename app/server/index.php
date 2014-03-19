<?php

  $data = $_REQUEST; # 'data' => $data[user_id],
  $imagesPath = "../images/carousel-home/";

  $slides = array();

  if (is_dir($imagesPath)) {
    if ($dh = opendir($imagesPath)) {
      while (($file = readdir($dh)) !== false) {
        #echo "filename: ." . $file . "<br />";
        if ($file === "." || $file === "..") next;
        array_push($slides, [
          'image' => $imagesPath . $file, #'images/carousel-home/La vista sul mare.jpg',
          'text' => basename($file), #'Portovenere - B&B Gli Olivi - La vista sul mare',
          ]
        );
      }
      closedir($dh);
    }
  }

/*
  $slides = array(
    array(
      'image' => 'images/carousel-home/La vista sul mare.jpg',
      'text' => 'Portovenere - B&B Gli Olivi - La vista sul mare',
    ),
    array(
      'image' => 'images/carousel-home/PortoVenere - La Chiesa di San Pietro.jpg',
      'text' => 'Portovenere - La Chiesa di San Pietro',
    ),
  );
*/

  header('Content-type: application/json');
  header('Access-Control-Allow-Origin: *');
  echo json_encode($slides);
?>
