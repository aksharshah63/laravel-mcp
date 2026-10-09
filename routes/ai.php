<?php

use App\Mcp\Servers\ExpenseServer;
use Laravel\Mcp\Facades\Mcp;

// Mcp::web('/mcp/demo', \App\Mcp\Servers\PublicServer::class);
Mcp::web('/mcp/expense', ExpenseServer::class);
