    <?php
        date_default_timezone_set("Europe/Vilnius");
        $datetime1 = new DateTime('1970-01-01 11:55:00');
        $datetime2 = new DateTime('2014-01-29 11:55:00');
        $interval = $datetime1->diff($datetime2);
        #echo $interval->format('%R%a days');
        print_r($interval);
    ?>
