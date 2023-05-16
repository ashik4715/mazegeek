<?php namespace Nishan\Expertise\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNishanExpertise extends Migration
{
    public function up()
    {
        Schema::create('nishan_expertise_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('description');
            $table->text('industries')->nullable();
            $table->text('technologies')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('nishan_expertise_');
    }
}
