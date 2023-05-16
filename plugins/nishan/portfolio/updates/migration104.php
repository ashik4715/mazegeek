<?php namespace Nishan\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration104 extends Migration
{
    public function up()
    {
        Schema::table('nishan_portfolio_', function($table)
        {
            $table->text('overview')->nullable();
            $table->text('function')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_portfolio_', function($table)
        {
            $table->dropColumn('overview');
            $table->dropColumn('function');
        });
    }
}