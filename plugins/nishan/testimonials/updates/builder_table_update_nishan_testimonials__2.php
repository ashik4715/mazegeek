<?php namespace Nishan\Testimonials\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanTestimonials2 extends Migration
{
    public function up()
    {
        Schema::table('nishan_testimonials_', function($table)
        {
            $table->text('meta')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('nishan_testimonials_', function($table)
        {
            $table->dropColumn('meta');
        });
    }
}
