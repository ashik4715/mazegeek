<?php namespace Nishan\Testimonials\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNishanTestimonials extends Migration
{
    public function up()
    {
        Schema::create('nishan_testimonials_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 191);
            $table->string('designation', 191);
            $table->string('website_link', 191);
            $table->text('description');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('nishan_testimonials_');
    }
}
