<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\ServeyQuestion;
use App\Models\ServeyAnswer;

class CreateServeyQuestionAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servey_question_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(ServeyQuestion::class,'servey_question_id');
            $table->foreignIdFor(ServeyAnswer::class,'servey_answer_id');
            $table->text('answer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servey_question_answers');
    }
}
