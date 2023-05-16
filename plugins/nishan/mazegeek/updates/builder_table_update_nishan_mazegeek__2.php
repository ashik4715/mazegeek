<?php namespace Nishan\Mazegeek\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanMazegeek2 extends Migration
{
    public function up()
    {
        Schema::table('nishan_mazegeek_', function($table)
        {
            $table->text('navigation')->nullable();
            $table->dropColumn('header');
            $table->dropColumn('quick_links');
            $table->dropColumn('services_links');
            $table->dropColumn('technology_links');
        });
    }
    
    public function down()
    {
        Schema::table('nishan_mazegeek_', function($table)
        {
            $table->dropColumn('navigation');
            $table->text('header')->nullable();
            $table->text('quick_links')->nullable();
            $table->text('services_links')->nullable();
            $table->text('technology_links')->nullable();
        });
    }
}
