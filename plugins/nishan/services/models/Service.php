<?php namespace Nishan\Services\Models;

use Model;

/**
 * Model
 */
class Service extends Model
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
    public $table = 'nishan_services_';

    protected $jsonable = ['notes','feature_list','faq','cover','meta'];

    /*Relations*/
    public $attachOne = [
        'icon' => 'System\Models\File'
    ];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
