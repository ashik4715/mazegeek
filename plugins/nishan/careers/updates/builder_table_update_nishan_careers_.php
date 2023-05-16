<?php namespace Nishan\Careers\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanCareers extends Migration
{
    public function up()
    {
        Schema::table('nishan_careers_', function($table)
        {
            $table->text('meta')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_careers_', function($table)
        {
            $table->dropColumn('meta');
        });
    }
}
