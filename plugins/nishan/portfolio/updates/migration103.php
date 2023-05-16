<?php namespace Nishan\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration103 extends Migration
{
    public function up()
{
    Schema::table('nishan_portfolio_', function($table)
    {
        $table->string('category', 191);
    });
}

public function down()
{
    Schema::table('nishan_portfolio_', function($table)
    {
        $table->dropColumn('category');
    });
}
}