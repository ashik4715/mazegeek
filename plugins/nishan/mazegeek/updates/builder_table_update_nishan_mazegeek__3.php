<?php namespace Nishan\Mazegeek\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanMazegeek3 extends Migration
{
    public function up()
    {
        Schema::table('nishan_mazegeek_', function($table)
        {
            $table->text('meta')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_mazegeek_', function($table)
        {
            $table->dropColumn('meta');
        });
    }
}
