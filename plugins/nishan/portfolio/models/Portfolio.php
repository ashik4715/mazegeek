<?php namespace Nishan\Portfolio\Models;

use Model;

/**
 * Model
 */
class Portfolio extends Model
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
    public $table = 'nishan_portfolio_';

    protected $jsonable = ['category','overview','function','meta'];

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
