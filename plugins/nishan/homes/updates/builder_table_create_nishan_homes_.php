<?php namespace Nishan\Homes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNishanHomes extends Migration
{
    public function up()
    {
        Schema::create('nishan_homes_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('slogan')->nullable();
            $table->text('blogs')->nullable();
            $table->text('partner')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('nishan_homes_');
    }
}
