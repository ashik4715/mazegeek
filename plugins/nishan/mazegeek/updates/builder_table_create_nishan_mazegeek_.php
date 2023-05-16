<?php namespace Nishan\Mazegeek\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNishanMazegeek extends Migration
{
    public function up()
    {
        Schema::create('nishan_mazegeek_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('nav_title')->nullable();
            $table->text('quick_links')->nullable();
            $table->text('services_links')->nullable();
            $table->text('technology_links')->nullable();
            $table->text('footer')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('nishan_mazegeek_');
    }
}
