<?php namespace Nishan\Services\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration105 extends Migration
{
    public function up()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->text('faq')->nullable();
            $table->text('cover');
        });
    }
    
    public function down()
    {
        Schema::table('nishan_services_', function($table)
        {
            $table->dropColumn('faq');
            $table->dropColumn('cover');
        });
    }
}