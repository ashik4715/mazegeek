<?php namespace Nishan\Abouts\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNishanAbouts extends Migration
{
    public function up()
    {
        Schema::create('nishan_abouts_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('title')->nullable();
            $table->text('details')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('nishan_abouts_');
    }
}
