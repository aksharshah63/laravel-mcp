<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Laravel\Ai\Embeddings;

class DocumentController extends Controller
{
    public function store()
    {
        $content = 'VA can request time off from the Work and Attendance module.';

        $response = Embeddings::for([
            $content,
        ])->generate();

        Document::create([
            'title' => 'VA Time Off',
            'content' => $content,
            'embedding' => $response->embeddings[0],
        ]);

        return response()->json([
            'message' => 'Document created successfully',
        ]);
    }
}
