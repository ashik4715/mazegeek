<?php namespace Nishan\Testimonials\Models;

use Model;

/**
 * Model
 */
class Testimonial extends Model
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
    public $table = 'nishan_testimonials_';
    protected $jsonable = ['description','meta'];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
