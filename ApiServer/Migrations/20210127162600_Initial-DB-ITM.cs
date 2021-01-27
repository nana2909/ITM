using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace APIServer.Migrations
{
    public partial class InitialDBITM : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

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
                    isActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbDepartment", x => x.DepartmentID);
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
                    FbEmail = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    StudentName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FbContent = table.Column<string>(type: "text", nullable: true),
                    isResolve = table.Column<string>(type: "text", nullable: true),
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
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tbFaculty",
                columns: table => new
                {
                    FacultyID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DoB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Degree = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    isActive = table.Column<bool>(type: "bit", nullable: false),
                    DepartmentID = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    imgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
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

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(150)", nullable: true),
                    AdmissionID = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_tbAdmission_AdmissionID",
                        column: x => x.AdmissionID,
                        principalTable: "tbAdmission",
                        principalColumn: "AdmissionID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_AdmissionID",
                table: "AspNetUsers",
                column: "AdmissionID");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

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
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "tbCourse");

            migrationBuilder.DropTable(
                name: "tbFacility");

            migrationBuilder.DropTable(
                name: "tbFaculty");

            migrationBuilder.DropTable(
                name: "tbFeedback");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "tbDepartment");

            migrationBuilder.DropTable(
                name: "tbAdmission");

            migrationBuilder.DropTable(
                name: "tbAdmissionStatus");

            migrationBuilder.DropTable(
                name: "tbOpSubject");

            migrationBuilder.DropTable(
                name: "tbSpeSubject");

            migrationBuilder.DropTable(
                name: "tbField");

            migrationBuilder.DropTable(
                name: "tbStream");
        }
    }
}
