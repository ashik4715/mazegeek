<?php namespace Nishan\Services\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration106 extends Migration
{
    public function up()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->dropColumn('title');
            $table->dropColumn('subtitile');
        });
    }
    
    public function down()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->string('title', 191);
            $table->string('subtitile', 191)->nullable();
        });
    }
}