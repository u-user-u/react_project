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
        Schema::create('enemies_abilities', function (Blueprint $table) {
            $table->id();
            $table->integer('HP');
            $table->integer('MP');
            $table->integer('attack');
            $table->integer('defence');
            $table->integer('speed');
            $table->integer('intelligence');
            $table->integer('EXP');
            $table->foreignId('enemy_id')->constrained('enemies')->onUpdate('cascade')->onDelete('cascade'); //外部キー制約（更新や削除はカスケードされる）
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enemies_abilities');
    }
};
