<?php namespace Nishan\Mazegeek\Models;

use Model;

/**
 * Model
 */
class Mazegeek extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'nishan_mazegeek_';
    protected $jsonable = ['navigation','footer','meta'];

    /*Relations*/
    public $attachOne = [
        'mazegeek_logo' => 'System\Models\File',
        'footer_icon' => 'System\Models\File'
    ];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
