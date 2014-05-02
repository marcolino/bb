<?php 

define("CONFIG_FILE_PATH",  "../scripts/config.json");

class BB {
  private $config = NULL;
  private $lastError = NULL;
  protected $slides = array();

  public function __construct() {
  }
   
  public function getSlides() {
    if (is_dir($this->config["carouselImagesPath"])) {
      if ($dh = opendir($this->config["carouselImagesPath"])) {
        while (($file = readdir($dh)) !== false) {
          if ($file === "." || $file === "..") {
            continue;
          }
          if (exif_imagetype($this->config["carouselImagesPath"] . "/" . $file) === FALSE) {
            continue;
          }
          array_push($this->slides, array(
            'image' => $this->config["carouselImagesPath"] . $file,
            'text' => basename($file) . ' '
          ));
        }
        closedir($dh);
      }
    }
    return $this->slides;
  }

  public function getSlide(/*integer*/ $id = null) {
    $id = intval($id);
    if (is_integer($id) && $id >= 0) {
      $this->getSlides();
      if ($id < sizeof($this->slides)) {
        return $this->slides[$id];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }



  public function __construct(/*...*/) {
  }
   
}

?>