<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    return response()->json([
        'ok' => true,
        'service' => 'Little Genius Laravel API',
        'message' => 'Backend is running.',
    ]);
});

Route::post('/exam/check-answer', function (Request $request) {
    $validated = $request->validate([
        'selectedAnswer' => ['required', 'string'],
        'correctAnswer' => ['required', 'string'],
        'explanation' => ['nullable', 'string'],
    ]);

    $isCorrect = trim(strtolower($validated['selectedAnswer']))
        === trim(strtolower($validated['correctAnswer']));

    return response()->json([
        'correct' => $isCorrect,
        'selectedAnswer' => $validated['selectedAnswer'],
        'correctAnswer' => $validated['correctAnswer'],
        'explanation' => $validated['explanation']
            ?? 'Review the correct answer and explanation before continuing.',
    ]);
});