<?php

use App\Classes\Mail;
use App\Classes\Session;
use App\Classes\ValidateRequest;
use Whoops\Handler\PrettyPageHandler;
use Whoops\Run;

require_once "../bootstrap/init.php";

$validator = new ValidateRequest();
$con = $validator->mixed("email", "1231@@\$abcde" , "4");
var_dump($con);

// Session::remove("name");
// Session::add("name", "Pisi");
// Session::replace("name", "KOOKO");
// echo Session::get("name");
// Session::flash("success", "Created successfully");

// Session::flash("success");

// $mailer = new Mail();

// $content = "Laboris anim ex non irure consequat laboris deserunt commodo ullamco Lorem in laborum. Lorem officia quis do dolor anim veniam minim consequat velit deserunt ex culpa pariatur magna. Laboris veniam aliquip exercitation mollit consectetur. In reprehenderit aute excepteur duis fugiat in. Quis fugiat et ipsum id irure culpa reprehenderit.";
// $subject = "This is just testing. Hehe";

// $data = [
//     "to" => "testmail252003@gmail.com",
//     "to_name" => "HEHHEHEH",
//     "content" => $content,
//     "subject" => $subject,
//     "filename" => "welcome",
//     "img_link" => "https://files.cults3d.com/uploaders/17522621/illustration-file/bb2024ac-2fcf-4efe-8b55-2124adafc78e/IMG_0204.jpg"
// ];

// $mailer->send();

// if ($mailer->send($data)) {
//     echo "<h1>Sent successfully</h1>";
// } else {
//     echo "<h1>Sending Failed</h1>";
// }
