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

  public function getAccessControlAllow(/*string*/ $what) {
    return "Access-Control-Allow-${what}: " . $this->config["accessControlAllow"][$what];
  }
  public function setAccessControlHeader() {
    echo "$_SERVER[HTTP_HOST]" . "<br>\n";
    header("Access-Control-Allow-Origin" . ": " . "http://0.0.0.0:9000");
    header("Access-Control-Allow-Methods" . ": " . "GET, POST");
    header("Access-Control-Allow-Headers" . ": " . "accept, origin, content-type");
  }
  
  public function config() {
    set_error_handler(
      create_function(
        '$severity, $message, $file, $line',
        'throw new ErrorException($message, $severity, $severity, $file, $line);'
      )
    );
    try {
      $configJSON = @file_get_contents(CONFIG_FILE_PATH);
      if (($this->config = json_decode($configJSON, TRUE)) == NULL) {
        $this->lastError = "Can't decode JSON from config file '" . CONFIG_FILE_PATH . "': " . json_last_error();
        return FALSE;
      }
      return TRUE;
    }
    catch (Exception $e) {
      $this->lastError = "Can't read config file '" . CONFIG_FILE_PATH . "': " . $e->getMessage();
      return FALSE;
    }
  }
   
  public function error(/*string*/ $msg = null) {
    echo json_encode(array("error" => ($msg && $this->lastError ? $msg . "\n" : $msg) . $this->lastError));
    exit(-1);
  }
}

?>