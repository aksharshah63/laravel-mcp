<?php

namespace App\Mcp\Servers;

use App\Mcp\Tools\AddExpenseTool;
use Laravel\Mcp\Server;
use Laravel\Mcp\Server\Attributes\Instructions;
use Laravel\Mcp\Server\Attributes\Name;
use Laravel\Mcp\Server\Attributes\Version;

#[Name('Expense Server')]
#[Version('0.0.1')]
#[Instructions('This MCP server is used to manage expenses. we can add expenses and using the tools available.')]
class ExpenseServer extends Server
{
    protected array $tools = [
        AddExpenseTool::class,
    ];

    protected array $resources = [
        //
    ];

    protected array $prompts = [
        //
    ];
}
