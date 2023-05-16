<?php namespace Nishan\Mazegeek\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanMazegeek extends Migration
{
    public function up()
    {
        Schema::table('nishan_mazegeek_', function($table)
        {
            $table->renameColumn('nav_title', 'header');
        });
    }
    
    public function down()
    {
        Schema::table('nishan_mazegeek_', function($table)
        {
            $table->renameColumn('header', 'nav_title');
        });
    }
}
