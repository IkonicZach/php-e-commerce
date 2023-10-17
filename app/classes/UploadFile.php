<?php

namespace App\Classes;

class UploadFile
{
    protected $filename;
    protected $maxSize = 2097152;

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

    public function getPath($file)
    {
        return $file->file->tmp_name;
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
                $filePath = $path . $name;
                return move_uploaded_file($file->file->tmp_name, $filePath);
            } else {
                return "File size limit exceeded!";
            }
        } else {
            return "Unacceptable file type!";
        }
    }
}
