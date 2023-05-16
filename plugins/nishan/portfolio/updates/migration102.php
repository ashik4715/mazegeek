<?php namespace Nishan\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration102 extends Migration
{
    public function up()
    {
        Schema::create('nishan_portfolio_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 191);
            $table->text('description');
            $table->string('slug', 191)->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('nishan_portfolio_');
    }
}