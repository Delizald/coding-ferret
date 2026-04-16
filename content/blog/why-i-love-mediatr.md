---
title: "Why I Love MediatR in .NET Projects"
date: "2026-04-16"
summary: "MediatR keeps controllers thin, decouples handlers from HTTP concerns, and makes CQRS feel natural. Here's how I use it and why I keep reaching for it."
tags: [".NET", "C#", "CQRS", "Architecture"]
---

## The Problem MediatR Solves

When a .NET project grows, controllers tend to become traffic cops — calling service A, then service B, then stitching results together. Before long, a single `POST /orders` endpoint is orchestrating five dependencies, and unit testing it requires mocking all of them.

MediatR fixes this by introducing a single mediator object between the controller and the logic. The controller sends a command or query; the mediator routes it to the right handler.

```csharp
// Controller stays thin
[HttpPost]
public async Task<IActionResult> CreateOrder(CreateOrderCommand command)
{
    var result = await _mediator.Send(command);
    return Ok(result);
}
```

## Handlers Are Easy to Test

Each handler is a self-contained class with a single `Handle` method. Mocking one dependency is straightforward.

```csharp
public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderDto>
{
    private readonly IOrderRepository _repo;

    public CreateOrderHandler(IOrderRepository repo) => _repo = repo;

    public async Task<OrderDto> Handle(CreateOrderCommand request, CancellationToken ct)
    {
        var order = new Order(request.CustomerId, request.Items);
        await _repo.AddAsync(order, ct);
        return OrderDto.From(order);
    }
}
```

## Pipeline Behaviors Are the Hidden Gem

You can add cross-cutting concerns — logging, validation, caching — as pipeline behaviors without touching any handler.

```csharp
public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken ct)
    {
        _logger.LogInformation("Handling {Request}", typeof(TRequest).Name);
        var response = await next();
        _logger.LogInformation("Handled {Request}", typeof(TRequest).Name);
        return response;
    }
}
```

Register once in `Program.cs`, and every request gets logged automatically.

## When Not to Use It

MediatR adds indirection. For simple CRUD APIs with no real business logic, it's overhead. The sweet spot is medium-to-large projects where you want clear CQRS boundaries and testable handlers without a heavyweight framework.
