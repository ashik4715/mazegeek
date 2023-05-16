<?php namespace Nishan\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration105 extends Migration
{
    public function up()
    {
        Schema::table('nishan_portfolio_', function($table)
        {
            $table->string('function_header', 191);
        });
    }
    
    public function down()
    {
        Schema::table('nishan_portfolio_', function($table)
        {
            $table->dropColumn('function_header');
        });
    }
}