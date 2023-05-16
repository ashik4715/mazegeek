<?php namespace Nishan\Abouts\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanAbouts extends Migration
{
    public function up()
    {
        Schema::table('nishan_abouts_', function($table)
        {
            $table->text('meta')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_abouts_', function($table)
        {
            $table->dropColumn('meta');
        });
    }
}
