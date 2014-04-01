<?php 

class BB {
  public $accessControlAllowOrigin = "http://192.168.10.30:9000";
  protected $imagesPath = "../images/carousel-home/";
  protected $slides = array();

  public function getAccessControlAllowOrigin() {
    return $this->accessControlAllowOrigin;
  }
  
  public function getSlides() {
    if (is_dir($this->imagesPath)) {
      if ($dh = opendir($this->imagesPath)) {
        while (($file = readdir($dh)) !== false) {
          if ($file === "." || $file === "..") {
            continue;
          }
          if (exif_imagetype($this->imagesPath . "/" . $file) === FALSE) {
            continue;
          }
          array_push($this->slides, array(
            'image' => $this->imagesPath . $file,
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