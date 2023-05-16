<?php namespace Nishan\Services\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration102 extends Migration
{
   public function up()
{
    Schema::table('nishan_services_', function($table)
    {
        $table->dropColumn('title');
        $table->dropColumn('details');
        $table->dropColumn('subtitile');
        $table->dropColumn('features');
    });
}

public function down()
{
    Schema::table('nishan_services_', function($table)
    {
        $table->string('title', 191);
        $table->text('details')->nullable();
        $table->string('subtitile', 191)->nullable();
        $table->string('features', 191);
    });
}
}