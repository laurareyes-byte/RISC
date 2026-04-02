namespace RISC.Models;

public class Guide
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Category { get; set; } = "";
    public string Steps { get; set; } = "[]";
    public string Icon { get; set; } = "";
}
