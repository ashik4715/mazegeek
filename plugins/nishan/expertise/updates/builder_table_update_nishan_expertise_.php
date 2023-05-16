<?php namespace Nishan\Expertise\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanExpertise extends Migration
{
    public function up()
    {
        Schema::table('nishan_expertise_', function($table)
        {
            $table->text('meta')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_expertise_', function($table)
        {
            $table->dropColumn('meta');
        });
    }
}
