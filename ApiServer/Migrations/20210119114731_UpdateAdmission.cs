using Microsoft.EntityFrameworkCore.Migrations;

namespace APIServer.Migrations
{
    public partial class UpdateAdmission : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AdmissionID",
                table: "AspNetUsers",
                type: "nvarchar(50)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_AdmissionID",
                table: "AspNetUsers",
                column: "AdmissionID");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_tbAdmission_AdmissionID",
                table: "AspNetUsers",
                column: "AdmissionID",
                principalTable: "tbAdmission",
                principalColumn: "AdmissionID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_tbAdmission_AdmissionID",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_AdmissionID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AdmissionID",
                table: "AspNetUsers");
        }
    }
}
