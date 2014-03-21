<?php 

class BB {
  protected $imagesPath = "../images/carousel-home/";
  protected $slides = array();

  public function getSlides() {
    if (is_dir($this->imagesPath)) {
      if ($dh = opendir($this->imagesPath)) {
        while (($file = readdir($dh)) !== false) {
          if ($file === "." || $file === "..") {
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
   
  protected $books = array(
    0 => array( "Il vecchio e il mare", false ),
    1 => array( "Il capitale", false )
  );

  public function get_book_by_id(/*integer*/ $id = null) {
    if (is_integer($id) && $id >= 0 && $id < sizeof($this->books)) {
      return $this->books[$id];
    } else {
      return null;
    }
  }

  public function get_books() {
    return $this->books;
  }

  public function register_new_book(/*string*/ $book = null) {
    if ($book) {
      $this->books[] = $book;
      return true;
    } else {
      return false;      
    }
  }

  public function loan_book(/*integer*/ $id = null) {
    if (is_integer($id) && $id >= 0 && $id < sizeof($this->books)) {
      $this->books[$id][1] = true;
      return true;
    } else {
      return false;      
    }
  }

  public function delete_book(/*integer*/ $id = null) {
    if (is_integer($id) && $id >= 0 && $id < sizeof($this->books)) {
      unset($this->books[$id]);
      return true;
    } else {
      return false;      
    }
  }

}

?>