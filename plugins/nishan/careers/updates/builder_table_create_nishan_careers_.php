<?php namespace Nishan\Careers\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNishanCareers extends Migration
{
    public function up()
    {
        Schema::create('nishan_careers_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('job_offer')->nullable();
            $table->text('job_list')->nullable();
            $table->text('job_details')->nullable();
            $table->text('job_summary')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('nishan_careers_');
    }
}
