<?php namespace Nishan\Homes\Models;

use Model;

/**
 * Model
 */
class Home extends Model
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
    public $table = 'nishan_homes_';
    protected $jsonable = ['slogan','blogs','partner'];

    /*Relations*/
    public $attachOne = [
        'mazegeek_video' => 'System\Models\File'
    ];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
