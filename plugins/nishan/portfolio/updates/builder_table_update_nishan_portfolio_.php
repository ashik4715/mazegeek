<?php namespace Nishan\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanPortfolio extends Migration
{
    public function up()
    {
        Schema::table('nishan_portfolio_', function($table)
        {
            $table->text('meta')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_portfolio_', function($table)
        {
            $table->dropColumn('meta');
        });
    }
}
