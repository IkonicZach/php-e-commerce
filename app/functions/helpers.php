<?php

use App\Classes\Session;
use Philo\Blade\Blade;
use Illuminate\Database\Capsule\Manager as Capsule;
use voku\helper\Paginator;
use Carbon\Carbon;

function view($path, $data = [])
{
    $view = APP_ROOT . "\\resources\\views\\";
    $cache = APP_ROOT . "\\bootstrap\\cache\\";

    $blade = new Blade($view, $cache);

    echo $blade->view()->make($path, $data)->render();
}

function make($filename, $data)
{
    extract($data);

    ob_start();

    require_once APP_ROOT . "/resources/views/mails/" . $filename . ".php";

    $content = ob_get_contents();

    ob_end_clean();

    return $content;
}

function beautify($data)
{
    echo "<pre>" . print_r($data, true) . "</pre>";
}

function asset($link)
{
    echo URL_ROOT . '/assets/' . $link;
}

function slug($value)
{
    $value = preg_replace('/[^' . preg_quote('_') . '\pL\pN\s]+/u', "", mb_strtolower($value));
    $value = preg_replace('/[ _]+/u', '-', $value);
    return $value;
}

function paginate($numOfRecords, $totalRecords, $object)
{
    $pages = new Paginator($numOfRecords, 'p');
    $categories =  $object->genPaginate($pages->get_limit());
    $pages->set_total($totalRecords);

    return [$categories, $pages->page_links()];
}
