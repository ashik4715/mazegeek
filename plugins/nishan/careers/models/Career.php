<?php namespace Nishan\Careers\Models;

use Model;

/**
 * Model
 */
class Career extends Model
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
    public $table = 'nishan_careers_';
    protected $jsonable = ['job_offer','job_list','job_details','job_summary','meta'];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
