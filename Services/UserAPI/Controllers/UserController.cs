using Microsoft.AspNetCore.Mvc;
using UserAPI.Models;

namespace UserAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
	[HttpGet(Name = "GetUsers")]
	public IEnumerable<UserModel> Get()
	{
		return Enumerable.Range(1, 15).Select(index => new UserModel
			{
				Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
				Name = "User_" + index,
				Id = index
			})
			.ToArray();
	}
}
