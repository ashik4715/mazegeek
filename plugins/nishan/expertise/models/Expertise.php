<?php namespace Nishan\Expertise\Models;

use Model;

/**
 * Model
 */
class Expertise extends Model
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
    public $table = 'nishan_expertise_';

    protected $jsonable = ['industries','technologies','meta'];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
