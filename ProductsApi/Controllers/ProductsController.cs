
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Models;

[ApiController]
[Route("api/[controller]")]
[Authorize] 
public class ProductsController : ControllerBase
{
    private static List<Product> _products = new List<Product>
    {
        new Product { Id = 1, Name = "Volkswagen"},
        new Product { Id = 2, Name = "Honda"},
        new Product { Id = 2, Name = "Porsche"},
        new Product { Id = 2, Name = "McLaren"},
        new Product { Id = 2, Name = "Maserati"},
    };

    [HttpPost]
    public IActionResult Create(Product product)
    {
        product.Id = _products.Count + 1;
        _products.Add(product);
        return Ok(product);
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_products);
    }
}