<?php

namespace App\Classes;

class UploadFile
{
    protected $filename;
    protected $maxSize = 2097152;
    protected $path;

    public function getName($file, $name = "")
    {
        if ($name === "") {
            $name = pathinfo($file->file->tmp_name, PATHINFO_FILENAME);
        }

        $name = strtolower(str_replace(["_", " "], "-", $name));
        $hash = md5(microtime());
        $ex = pathinfo($file->file->name, PATHINFO_EXTENSION);
        return "{$name}-{$hash}.{$ex}";
    }

    public function getPath()
    {
        return $this->path;
    }

    public function checkSize($file)
    {
        return $file->file->size > $this->maxSize ? true : false;
    }

    public function isImage($file)
    {
        $ex = pathinfo($file->file->name, PATHINFO_EXTENSION);
        $valid = ["jpg", "jpeg", "png", "webp", "bmp", "git", "avif"];

        return in_array($ex, $valid);
    }

    public function move($file, $final_name = "")
    {
        $name = $this->getName($file);
        if ($this->isImage($file)) {
            if (!$this->checkSize($file)) {
                $path = APP_ROOT . "/public/assets/uploads/";
                if (!is_dir($path)) {
                    mkdir($path);
                }
                $this->path = URL_ROOT . "/assets/uploads/" . $name;
                $filePath = $path . $name;
                return move_uploaded_file($file->file->tmp_name, $filePath);
            } else {
                // return "File size limit exceeded!";
                return false;
            }
        } else {
            // return "Unacceptable file type!";
            return false;
        }
    }
}
