using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace APIServer.Migrations
{
    public partial class updateDbSet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tbAdmissionStatus",
                columns: table => new
                {
                    StatusID = table.Column<int>(type: "int", nullable: false),
                    StatusContent = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbAdmissionStatus", x => x.StatusID);
                });

            migrationBuilder.CreateTable(
                name: "tbDepartment",
                columns: table => new
                {
                    DepartmentID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "text", maxLength: 500, nullable: false),
                    imgUrl = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbDepartment", x => x.DepartmentID);
                });

            migrationBuilder.CreateTable(
                name: "tbEvent",
                columns: table => new
                {
                    EventID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "text", maxLength: 500, nullable: false),
                    isActive = table.Column<bool>(type: "bit", nullable: false),
                    imgUrl = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbEvent", x => x.EventID);
                });

            migrationBuilder.CreateTable(
                name: "tbFacility",
                columns: table => new
                {
                    FacCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    FacName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    isActive = table.Column<bool>(type: "bit", nullable: false),
                    imgUrl = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbFacility", x => x.FacCode);
                });

            migrationBuilder.CreateTable(
                name: "tbFeedback",
                columns: table => new
                {
                    FbID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FbSubject = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    StudentName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FbContent = table.Column<string>(type: "text", nullable: true),
                    Date = table.Column<DateTime>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbFeedback", x => x.FbID);
                });

            migrationBuilder.CreateTable(
                name: "tbOpSubject",
                columns: table => new
                {
                    SubjectID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    SubjectName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbOpSubject", x => x.SubjectID);
                });

            migrationBuilder.CreateTable(
                name: "tbStream",
                columns: table => new
                {
                    StreamCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbStream", x => x.StreamCode);
                });

            migrationBuilder.CreateTable(
                name: "tbFaculty",
                columns: table => new
                {
                    FacultyID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DoB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Degree = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DepartmentID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    imgUrl = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    tbDepartmentDepartmentID = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbFaculty", x => x.FacultyID);
                    table.ForeignKey(
                        name: "FK_tbFaculty_tbDepartment_tbDepartmentDepartmentID",
                        column: x => x.tbDepartmentDepartmentID,
                        principalTable: "tbDepartment",
                        principalColumn: "DepartmentID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "tbField",
                columns: table => new
                {
                    FieldCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    StreamCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    tbStreamStreamCode = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbField", x => x.FieldCode);
                    table.ForeignKey(
                        name: "FK_tbField_tbStream_tbStreamStreamCode",
                        column: x => x.tbStreamStreamCode,
                        principalTable: "tbStream",
                        principalColumn: "StreamCode",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "tbCourse",
                columns: table => new
                {
                    CourseCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    CoureseName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "text", maxLength: 500, nullable: false),
                    StreamCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    FieldCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    isNew = table.Column<bool>(type: "bit", nullable: false),
                    imgUrl = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    tbFieldFieldCode = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    tbStreamStreamCode = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbCourse", x => x.CourseCode);
                    table.ForeignKey(
                        name: "FK_tbCourse_tbField_tbFieldFieldCode",
                        column: x => x.tbFieldFieldCode,
                        principalTable: "tbField",
                        principalColumn: "FieldCode",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tbCourse_tbStream_tbStreamStreamCode",
                        column: x => x.tbStreamStreamCode,
                        principalTable: "tbStream",
                        principalColumn: "StreamCode",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "tbSpeSubject",
                columns: table => new
                {
                    SubjectID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    SubjectName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FieldCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    tbFieldFieldCode = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbSpeSubject", x => x.SubjectID);
                    table.ForeignKey(
                        name: "FK_tbSpeSubject_tbField_tbFieldFieldCode",
                        column: x => x.tbFieldFieldCode,
                        principalTable: "tbField",
                        principalColumn: "FieldCode",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "tbAdmission",
                columns: table => new
                {
                    AdmissionID = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    StudentEmail = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    StudentName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FatherName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    MotherName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DoB = table.Column<DateTime>(type: "date", nullable: false),
                    Gender = table.Column<bool>(type: "bit", nullable: false),
                    ResidentialAddress = table.Column<string>(type: "text", nullable: false),
                    PermanentAddress = table.Column<string>(type: "text", nullable: false),
                    StreamCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    FieldCode = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    SportsDetails = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    StatusID = table.Column<int>(type: "int", nullable: false),
                    ExUniversity = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ExEnrollmentNumber = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    ExCenter = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ExStream = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ExField = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ExMarkSecured = table.Column<double>(type: "float", nullable: false),
                    OutOfDate = table.Column<DateTime>(type: "date", nullable: false),
                    ClassObtained = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: false),
                    SpecializedSubjectID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    OptionalSubjectID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    tbAdmissionStatusStatusID = table.Column<int>(type: "int", nullable: true),
                    tbFieldFieldCode = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    tbOpSubjectSubjectID = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    tbSpeSubjectSubjectID = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    tbStreamStreamCode = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbAdmission", x => x.AdmissionID);
                    table.ForeignKey(
                        name: "FK_tbAdmission_tbAdmissionStatus_tbAdmissionStatusStatusID",
                        column: x => x.tbAdmissionStatusStatusID,
                        principalTable: "tbAdmissionStatus",
                        principalColumn: "StatusID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tbAdmission_tbField_tbFieldFieldCode",
                        column: x => x.tbFieldFieldCode,
                        principalTable: "tbField",
                        principalColumn: "FieldCode",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tbAdmission_tbOpSubject_tbOpSubjectSubjectID",
                        column: x => x.tbOpSubjectSubjectID,
                        principalTable: "tbOpSubject",
                        principalColumn: "SubjectID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tbAdmission_tbSpeSubject_tbSpeSubjectSubjectID",
                        column: x => x.tbSpeSubjectSubjectID,
                        principalTable: "tbSpeSubject",
                        principalColumn: "SubjectID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tbAdmission_tbStream_tbStreamStreamCode",
                        column: x => x.tbStreamStreamCode,
                        principalTable: "tbStream",
                        principalColumn: "StreamCode",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tbAdmission_tbAdmissionStatusStatusID",
                table: "tbAdmission",
                column: "tbAdmissionStatusStatusID");

            migrationBuilder.CreateIndex(
                name: "IX_tbAdmission_tbFieldFieldCode",
                table: "tbAdmission",
                column: "tbFieldFieldCode");

            migrationBuilder.CreateIndex(
                name: "IX_tbAdmission_tbOpSubjectSubjectID",
                table: "tbAdmission",
                column: "tbOpSubjectSubjectID");

            migrationBuilder.CreateIndex(
                name: "IX_tbAdmission_tbSpeSubjectSubjectID",
                table: "tbAdmission",
                column: "tbSpeSubjectSubjectID");

            migrationBuilder.CreateIndex(
                name: "IX_tbAdmission_tbStreamStreamCode",
                table: "tbAdmission",
                column: "tbStreamStreamCode");

            migrationBuilder.CreateIndex(
                name: "IX_tbCourse_tbFieldFieldCode",
                table: "tbCourse",
                column: "tbFieldFieldCode");

            migrationBuilder.CreateIndex(
                name: "IX_tbCourse_tbStreamStreamCode",
                table: "tbCourse",
                column: "tbStreamStreamCode");

            migrationBuilder.CreateIndex(
                name: "IX_tbFaculty_tbDepartmentDepartmentID",
                table: "tbFaculty",
                column: "tbDepartmentDepartmentID");

            migrationBuilder.CreateIndex(
                name: "IX_tbField_tbStreamStreamCode",
                table: "tbField",
                column: "tbStreamStreamCode");

            migrationBuilder.CreateIndex(
                name: "IX_tbSpeSubject_tbFieldFieldCode",
                table: "tbSpeSubject",
                column: "tbFieldFieldCode");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tbAdmission");

            migrationBuilder.DropTable(
                name: "tbCourse");

            migrationBuilder.DropTable(
                name: "tbEvent");

            migrationBuilder.DropTable(
                name: "tbFacility");

            migrationBuilder.DropTable(
                name: "tbFaculty");

            migrationBuilder.DropTable(
                name: "tbFeedback");

            migrationBuilder.DropTable(
                name: "tbAdmissionStatus");

            migrationBuilder.DropTable(
                name: "tbOpSubject");

            migrationBuilder.DropTable(
                name: "tbSpeSubject");

            migrationBuilder.DropTable(
                name: "tbDepartment");

            migrationBuilder.DropTable(
                name: "tbField");

            migrationBuilder.DropTable(
                name: "tbStream");
        }
    }
}
