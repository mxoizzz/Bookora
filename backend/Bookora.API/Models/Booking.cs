using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bookora.API.Models;

public class Booking
{
    [Key]
    public Guid Id { get; set; }

    public string BookingReference { get; set; } = string.Empty;

    [Required]
    public Guid OfferId { get; set; }

    [ForeignKey("OfferId")]
    public Offer Offer { get; set; } = null!;

    [Required]
    public Guid SlotId { get; set; }

    [ForeignKey("SlotId")]
    public OfferSlot Slot { get; set; } = null!;

    [Required]
    [MaxLength(100)]
    public string CustomerName { get; set; } = string.Empty;

    [Required]
    [MaxLength(15)]
    public string CustomerPhone { get; set; } = string.Empty;

    public string? CustomerEmail { get; set; }

    public int PeopleCount { get; set; }

    public string? SpecialNote { get; set; }

    public string Status { get; set; } = "Pending";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}