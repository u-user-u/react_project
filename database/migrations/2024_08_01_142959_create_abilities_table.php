<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('abilities', function (Blueprint $table) {
            $table->id();
            $table->integer('level');
            $table->string('state');
            $table->integer('max_HP');
            $table->integer('tmp_HP');
            $table->integer('max_MP');
            $table->integer('tmp_MP');
            $table->integer('attack');
            $table->integer('defence');
            $table->integer('speed');
            $table->integer('intelligence');
            $table->integer('totalEXP');
            $table->foreignId('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade'); //外部キー制約（更新や削除はカスケードされる）
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abilities');
    }
};
