using Microsoft.EntityFrameworkCore.Migrations;

namespace APIServer.Migrations
{
    public partial class migrate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imgUrl",
                table: "tbFaculty");

            migrationBuilder.DropColumn(
                name: "imgUrl",
                table: "tbFacility");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "imgUrl",
                table: "tbFaculty",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "imgUrl",
                table: "tbFacility",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);
        }
    }
}
