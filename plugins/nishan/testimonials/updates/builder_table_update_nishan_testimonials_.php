<?php namespace Nishan\Testimonials\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNishanTestimonials extends Migration
{
    public function up()
    {
        Schema::table('nishan_testimonials_', function($table)
        {
            $table->string('website_title', 191);
        });
    }
    
    public function down()
    {
        Schema::table('nishan_testimonials_', function($table)
        {
            $table->dropColumn('website_title');
        });
    }
}
