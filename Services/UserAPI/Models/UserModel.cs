namespace UserAPI.Models;

public class UserModel
{
	public int Id { get; set; }

	public string Name { get; set; } = null!;
	
	public DateOnly Date { get; set; }
}
