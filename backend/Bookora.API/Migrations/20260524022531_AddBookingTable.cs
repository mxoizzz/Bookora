using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bookora.API.Migrations
{
    /// <inheritdoc />
    public partial class AddBookingTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BookedCount",
                table: "OfferSlots",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "OfferSlots",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "MaxBookingPerCustomer",
                table: "Offers",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Offers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    BookingReference = table.Column<string>(type: "text", nullable: false),
                    OfferId = table.Column<Guid>(type: "uuid", nullable: false),
                    SlotId = table.Column<Guid>(type: "uuid", nullable: false),
                    CustomerName = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    CustomerPhone = table.Column<string>(type: "character varying(15)", maxLength: 15, nullable: false),
                    CustomerEmail = table.Column<string>(type: "text", nullable: true),
                    PeopleCount = table.Column<int>(type: "integer", nullable: false),
                    SpecialNote = table.Column<string>(type: "text", nullable: true),
                    Status = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Bookings_OfferSlots_SlotId",
                        column: x => x.SlotId,
                        principalTable: "OfferSlots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Bookings_Offers_OfferId",
                        column: x => x.OfferId,
                        principalTable: "Offers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_OfferId",
                table: "Bookings",
                column: "OfferId");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_SlotId",
                table: "Bookings",
                column: "SlotId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropColumn(
                name: "BookedCount",
                table: "OfferSlots");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "OfferSlots");

            migrationBuilder.DropColumn(
                name: "MaxBookingPerCustomer",
                table: "Offers");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Offers");
        }
    }
}
