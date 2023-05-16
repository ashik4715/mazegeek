<?php namespace Nishan\Services\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanServices extends Migration
{
    public function up()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->text('meta')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->dropColumn('meta');
        });
    }
}
