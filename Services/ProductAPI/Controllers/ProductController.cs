using Microsoft.AspNetCore.Mvc;
using ProductAPI.Models;

namespace ProductAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
	private static readonly string[] Products = new[]
	{
		"Product1", "Product2", "Product3", "Product4", "Product5", "Product6", "Product7", "Product8", "Product9", "Product10"
	};

	private readonly ILogger<ProductController> _logger;

	public ProductController(ILogger<ProductController> logger)
	{
		_logger = logger;
	}

	[HttpGet(Name = "GetProducts")]
	public IEnumerable<ProductModel> Get()
	{
		return Enumerable.Range(1, 25).Select(index => new ProductModel
			{
				Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
				Id = index,
				ProductName = Products[Random.Shared.Next(Products.Length)]
			})
			.ToArray();
	}
}
