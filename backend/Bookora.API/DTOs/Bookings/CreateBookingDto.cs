namespace Bookora.API.DTOs.Booking;

public class CreateBookingDto
{
    public Guid OfferId { get; set; }

    public Guid SlotId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public string CustomerPhone { get; set; } = string.Empty;

    public string? CustomerEmail { get; set; }

    public int PeopleCount { get; set; }

    public string? SpecialNote { get; set; }

    public string Status { get; set; } = "Draft";

    public int MaxBookingPerCustomer { get; set; } = 1;
}