<?php namespace Nishan\Services\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration103 extends Migration
{
    public function up()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->text('feature_list')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->dropColumn('feature_list');
        });
    }
}