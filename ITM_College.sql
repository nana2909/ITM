USE [master]
GO
/****** Object:  Database [UserIdentityDB]    Script Date: 1/28/2021 1:17:26 AM ******/
CREATE DATABASE [UserIdentityDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'UserIdentityDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\UserIdentityDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'UserIdentityDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\UserIdentityDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [UserIdentityDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [UserIdentityDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [UserIdentityDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [UserIdentityDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [UserIdentityDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [UserIdentityDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [UserIdentityDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [UserIdentityDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [UserIdentityDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [UserIdentityDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [UserIdentityDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [UserIdentityDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [UserIdentityDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [UserIdentityDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [UserIdentityDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [UserIdentityDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [UserIdentityDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [UserIdentityDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [UserIdentityDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [UserIdentityDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [UserIdentityDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [UserIdentityDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [UserIdentityDB] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [UserIdentityDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [UserIdentityDB] SET RECOVERY FULL 
GO
ALTER DATABASE [UserIdentityDB] SET  MULTI_USER 
GO
ALTER DATABASE [UserIdentityDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [UserIdentityDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [UserIdentityDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [UserIdentityDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [UserIdentityDB] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'UserIdentityDB', N'ON'
GO
ALTER DATABASE [UserIdentityDB] SET QUERY_STORE = OFF
GO
USE [UserIdentityDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 1/28/2021 1:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 1/28/2021 1:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 1/28/2021 1:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[Discriminator] [nvarchar](max) NOT NULL,
	[FullName] [nvarchar](150) NULL,
	[AdmissionID] [nvarchar](50) NULL,
	[ImgUrl] [nvarchar](max) NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbAdmission]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbAdmission](
	[AdmissionID] [nvarchar](50) NOT NULL,
	[StudentEmail] [nvarchar](50) NOT NULL,
	[StudentName] [nvarchar](50) NOT NULL,
	[FatherName] [nvarchar](50) NOT NULL,
	[MotherName] [nvarchar](50) NOT NULL,
	[DoB] [date] NOT NULL,
	[Gender] [bit] NOT NULL,
	[ResidentialAddress] [text] NOT NULL,
	[PermanentAddress] [text] NOT NULL,
	[StreamCode] [nvarchar](30) NOT NULL,
	[FieldCode] [nvarchar](30) NOT NULL,
	[SportsDetails] [nvarchar](100) NULL,
	[StatusID] [int] NOT NULL,
	[ExUniversity] [nvarchar](50) NOT NULL,
	[ExEnrollmentNumber] [nvarchar](30) NOT NULL,
	[ExCenter] [nvarchar](50) NOT NULL,
	[ExStream] [nvarchar](50) NOT NULL,
	[ExField] [nvarchar](50) NOT NULL,
	[ExMarkSecured] [float] NOT NULL,
	[OutOfDate] [date] NOT NULL,
	[ClassObtained] [nvarchar](1) NOT NULL,
	[SpecializedSubjectID] [nvarchar](30) NULL,
	[OptionalSubjectID] [nvarchar](30) NULL,
	[tbAdmissionStatusStatusID] [int] NULL,
	[tbFieldFieldCode] [nvarchar](30) NULL,
	[tbOpSubjectSubjectID] [nvarchar](30) NULL,
	[tbSpeSubjectSubjectID] [nvarchar](30) NULL,
	[tbStreamStreamCode] [nvarchar](30) NULL,
 CONSTRAINT [PK_tbAdmission] PRIMARY KEY CLUSTERED 
(
	[AdmissionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbAdmissionStatus]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbAdmissionStatus](
	[StatusID] [int] NOT NULL,
	[StatusContent] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_tbAdmissionStatus] PRIMARY KEY CLUSTERED 
(
	[StatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbCourse]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbCourse](
	[CourseCode] [nvarchar](30) NOT NULL,
	[CoureseName] [nvarchar](50) NOT NULL,
	[Description] [text] NOT NULL,
	[StreamCode] [nvarchar](30) NOT NULL,
	[FieldCode] [nvarchar](30) NOT NULL,
	[isNew] [bit] NOT NULL,
	[imgUrl] [nvarchar](200) NULL,
	[tbFieldFieldCode] [nvarchar](30) NULL,
	[tbStreamStreamCode] [nvarchar](30) NULL,
 CONSTRAINT [PK_tbCourse] PRIMARY KEY CLUSTERED 
(
	[CourseCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbDepartment]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbDepartment](
	[DepartmentID] [nvarchar](30) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [text] NOT NULL,
	[imgUrl] [nvarchar](200) NOT NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_tbDepartment] PRIMARY KEY CLUSTERED 
(
	[DepartmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbEvent]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbEvent](
	[EventID] [nvarchar](30) NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[Description] [text] NOT NULL,
	[isActive] [bit] NOT NULL,
	[imgUrl] [nvarchar](200) NOT NULL,
 CONSTRAINT [PK_tbEvent] PRIMARY KEY CLUSTERED 
(
	[EventID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbFacility]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbFacility](
	[FacCode] [int] IDENTITY(1,1) NOT NULL,
	[FacName] [nvarchar](50) NOT NULL,
	[isActive] [bit] NOT NULL,
	[imgUrl] [nvarchar](200) NULL,
 CONSTRAINT [PK_tbFacility] PRIMARY KEY CLUSTERED 
(
	[FacCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbFaculty]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbFaculty](
	[FacultyID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[DoB] [datetime2](7) NOT NULL,
	[Degree] [nvarchar](100) NOT NULL,
	[DepartmentID] [nvarchar](30) NOT NULL,
	[imgUrl] [nvarchar](max) NULL,
	[tbDepartmentDepartmentID] [nvarchar](30) NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_tbFaculty] PRIMARY KEY CLUSTERED 
(
	[FacultyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbFeedback]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbFeedback](
	[FbID] [int] IDENTITY(1,1) NOT NULL,
	[FbSubject] [nvarchar](100) NULL,
	[StudentName] [nvarchar](50) NULL,
	[FbContent] [text] NULL,
	[Date] [date] NOT NULL,
	[isResolve] [text] NOT NULL,
	[FbEmail] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_tbFeedback] PRIMARY KEY CLUSTERED 
(
	[FbID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbField]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbField](
	[FieldCode] [nvarchar](30) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[StreamCode] [nvarchar](30) NULL,
	[tbStreamStreamCode] [nvarchar](30) NULL,
 CONSTRAINT [PK_tbField] PRIMARY KEY CLUSTERED 
(
	[FieldCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbOpSubject]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbOpSubject](
	[SubjectID] [nvarchar](30) NOT NULL,
	[SubjectName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_tbOpSubject] PRIMARY KEY CLUSTERED 
(
	[SubjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbSpeSubject]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbSpeSubject](
	[SubjectID] [nvarchar](30) NOT NULL,
	[SubjectName] [nvarchar](50) NOT NULL,
	[FieldCode] [nvarchar](30) NOT NULL,
	[tbFieldFieldCode] [nvarchar](30) NULL,
 CONSTRAINT [PK_tbSpeSubject] PRIMARY KEY CLUSTERED 
(
	[SubjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbStream]    Script Date: 1/28/2021 1:17:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbStream](
	[StreamCode] [nvarchar](30) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_tbStream] PRIMARY KEY CLUSTERED 
(
	[StreamCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210124222448_initial db', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210125124508_create isSolve in feedback', N'5.0.2')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'1', N'Admin', N'ADMIN', NULL)
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'2', N'Student', N'STUDENT', NULL)
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'8e88c83f-bc21-47d2-be15-8b44b55fe32f', N'1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'8f27285b-d910-40d1-a804-87bc53220ecb', N'2')
GO
INSERT [dbo].[AspNetUsers] ([Id], [Discriminator], [FullName], [AdmissionID], [ImgUrl], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'8e88c83f-bc21-47d2-be15-8b44b55fe32f', N'ApplicationUser', N'vu duc huy', N'STvqaK919', NULL, N'khoaimi', N'KHOAIMI', N'nguyenngophuoc@gmail.com', N'NGUYENNGOPHUOC@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEFQPNeiwR7vgpvltHUydc3C5EwO71Hw/E5V8EyN3+oMxP4b5bYLKlS9y4K02d0lpIA==', N'YXUCIMASSWWVVQUB7BSL2FCWDEH42LKK', N'e673af6e-6652-4edb-9988-405aee76021f', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [Discriminator], [FullName], [AdmissionID], [ImgUrl], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'8f27285b-d910-40d1-a804-87bc53220ecb', N'ApplicationUser', N'vu duc huy', NULL, NULL, N'huy', N'HUY', N'khoaimiday02@gmail.com', N'KHOAIMIDAY02@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEKe1GcLY8C5PGbxUsZWPMpoFqrXFHPQYNRf4XxQMoa2cyADobEtcLZfSnFR2I1YMzA==', N'SAGFRZH7YYO2NTWGXHVJARS37LWOBWVG', N'ab5b0efd-70cf-4bb2-be36-187c042a12de', NULL, 0, 0, NULL, 1, 0)
GO
INSERT [dbo].[tbAdmission] ([AdmissionID], [StudentEmail], [StudentName], [FatherName], [MotherName], [DoB], [Gender], [ResidentialAddress], [PermanentAddress], [StreamCode], [FieldCode], [SportsDetails], [StatusID], [ExUniversity], [ExEnrollmentNumber], [ExCenter], [ExStream], [ExField], [ExMarkSecured], [OutOfDate], [ClassObtained], [SpecializedSubjectID], [OptionalSubjectID], [tbAdmissionStatusStatusID], [tbFieldFieldCode], [tbOpSubjectSubjectID], [tbSpeSubjectSubjectID], [tbStreamStreamCode]) VALUES (N'S1qnswBRu', N'khoaimu@m.com', N'duc huy', N'chau nhuan phat', N'ho ngoc ha', CAST(N'1989-11-01' AS Date), 0, N'1', N'1', N'ST02', N'F06', N'1', 1, N'1', N'1', N'1', N'1', N'1', 1, CAST(N'1111-11-11' AS Date), N'B', N'none', N'', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tbAdmission] ([AdmissionID], [StudentEmail], [StudentName], [FatherName], [MotherName], [DoB], [Gender], [ResidentialAddress], [PermanentAddress], [StreamCode], [FieldCode], [SportsDetails], [StatusID], [ExUniversity], [ExEnrollmentNumber], [ExCenter], [ExStream], [ExField], [ExMarkSecured], [OutOfDate], [ClassObtained], [SpecializedSubjectID], [OptionalSubjectID], [tbAdmissionStatusStatusID], [tbFieldFieldCode], [tbOpSubjectSubjectID], [tbSpeSubjectSubjectID], [tbStreamStreamCode]) VALUES (N'S3kwvLXi9', N'huy@gmail.com', N'huy', N'huy', N'huy', CAST(N'2000-02-20' AS Date), 0, N'123', N'123', N'ST01', N'F02', N'123', 1, N'123', N'123', N'123', N'123', N'123', 6, CAST(N'2020-12-12' AS Date), N'C', N'none', N'', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tbAdmission] ([AdmissionID], [StudentEmail], [StudentName], [FatherName], [MotherName], [DoB], [Gender], [ResidentialAddress], [PermanentAddress], [StreamCode], [FieldCode], [SportsDetails], [StatusID], [ExUniversity], [ExEnrollmentNumber], [ExCenter], [ExStream], [ExField], [ExMarkSecured], [OutOfDate], [ClassObtained], [SpecializedSubjectID], [OptionalSubjectID], [tbAdmissionStatusStatusID], [tbFieldFieldCode], [tbOpSubjectSubjectID], [tbSpeSubjectSubjectID], [tbStreamStreamCode]) VALUES (N'STvqaK919', N'nguyenngophuoc@gmail.com', N'nguyen ngo phuoc', N'phuoc', N'nguyen', CAST(N'1960-08-08' AS Date), 1, N'590', N'590', N'ST06', N'F22', N'football', 1, N'KAPLAP', N'koicaca', N'coackaos', N'cccc', N'ccccc', 6, CAST(N'2025-12-12' AS Date), N'B', N'none', N'none', NULL, NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[tbAdmissionStatus] ([StatusID], [StatusContent]) VALUES (-1, N'Rejected')
INSERT [dbo].[tbAdmissionStatus] ([StatusID], [StatusContent]) VALUES (0, N'Waiting')
INSERT [dbo].[tbAdmissionStatus] ([StatusID], [StatusContent]) VALUES (1, N'Accepted')
GO
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU01', N'Co-08', N'Name: Computer Engineering. Start date : 10/12//2018. Duration : 4 Years. Fee : 40000USD', N'ST01', N'F01', 1, N'.././images/computer.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU02', N'Fn-03', N'Name: Finance. Start date : 12/12//2018. Duration : 4 Years. Fee : 45000USD', N'ST02', N'F07', 1, N'.././images/financy.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU03', N'Hi-05', N'Name: Higher Education. Start date : 01/12//2018. Duration : 3.5 Years. Fee : 40000USD', N'ST03', N'F11', 1, N'.././images/higherEducation.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU04', N'Au-04', N'Name: Automotive Engineering. Start date : 06/12//2018. Duration : 4.5 Years. Fee : 50000USD', N'ST04', N'F15', 1, N'.././images/fele-automotive-engineering.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU05', N'Ho-07', N'Name: Homeland Security. Start date : 09/12//2018. Duration : 4 Years. Fee : 40000USD', N'ST05', N'F18', 1, N'.././images/homeLand-Security.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU06', N'Nu-04', N'Name: Nursing. Start date : 03/12//2018. Duration : 4 Years. Fee : 40000USD', N'ST06', N'F20', 1, N'.././images/Nursing.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU07', N'Fi-02', N'Name: Film. Start date : 02/12//2018. Duration : 4 Years. Fee : 44000USD', N'ST07', N'F25', 1, N'.././images/film.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU08', N'Ma-03', N'Name: Marketing. Start date : 11/12//2018. Duration : 4 Years. Fee : 50000USD', N'ST02', N'F08', 1, N'.././images/marketing.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU09', N'So-02', N'Name: Software Engineering. Start date : 15/12//2018. Duration : 4 Years. Fee : 55000USD', N'ST01', N'F04', 1, N'.././images/Software.jpg', NULL, NULL)
INSERT [dbo].[tbCourse] ([CourseCode], [CoureseName], [Description], [StreamCode], [FieldCode], [isNew], [imgUrl], [tbFieldFieldCode], [tbStreamStreamCode]) VALUES (N'COU10', N'Ed-04', N'Name: Education. Start date : 19/12//2018. Duration : 4 Years. Fee : 42000USD', N'ST03', N'F10', 1, N'.././images/Education.jpg', NULL, NULL)
GO
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D01', N'Computers & Technology', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', N'.././images/department1.jpg', 1)
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D02', N'Business & Management', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', N'.././images/department2.jpg', 1)
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D03', N'Education & Teaching', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', N'.././images/department3.jpg', 1)
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D04', N'Science & Engineering', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', N'.././images/department4.jpg', 1)
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D05', N'Criminal Justice & Legal', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', N'.././images/department5.jpg', 1)
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D06', N'Nursing & Healthcare', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', N'.././images/department6.jpg', 1)
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D07', N'Art & Design', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', N'.././images/department7.jpg', 1)
INSERT [dbo].[tbDepartment] ([DepartmentID], [Name], [Description], [imgUrl], [isActive]) VALUES (N'D08', N'Sex', N'18++', N'.././images/department7.jpg', 0)
GO
INSERT [dbo].[tbEvent] ([EventID], [Title], [Description], [isActive], [imgUrl]) VALUES (N'E01', N'Firefly training in trauma-informed yoga', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', 1, N'.././images/event-1.jpg')
INSERT [dbo].[tbEvent] ([EventID], [Title], [Description], [isActive], [imgUrl]) VALUES (N'E02', N'Research seminar in clinical science.', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', 1, N'.././images/event-2.jpg')
INSERT [dbo].[tbEvent] ([EventID], [Title], [Description], [isActive], [imgUrl]) VALUES (N'E03', N'Toward a public philosophy of justice', N'Some quick example text to build on the card title and make up the bulk of the card''s content.', 0, N'.././images/event-3.jpg')
GO
SET IDENTITY_INSERT [dbo].[tbFacility] ON 

INSERT [dbo].[tbFacility] ([FacCode], [FacName], [isActive], [imgUrl]) VALUES (1, N'Canteen', 1, N'.././images/facility1.jpg')
INSERT [dbo].[tbFacility] ([FacCode], [FacName], [isActive], [imgUrl]) VALUES (2, N'Hostel', 1, N'.././images/facility2.jpg')
INSERT [dbo].[tbFacility] ([FacCode], [FacName], [isActive], [imgUrl]) VALUES (3, N'Gyms', 1, N'.././images/facility3.jpg')
INSERT [dbo].[tbFacility] ([FacCode], [FacName], [isActive], [imgUrl]) VALUES (4, N'Administrator Office', 1, N'.././images/facility4.jpg')
INSERT [dbo].[tbFacility] ([FacCode], [FacName], [isActive], [imgUrl]) VALUES (5, N'Libraries', 1, N'.././images/facility5.jpg')
SET IDENTITY_INSERT [dbo].[tbFacility] OFF
GO
SET IDENTITY_INSERT [dbo].[tbFaculty] ON 

INSERT [dbo].[tbFaculty] ([FacultyID], [Name], [DoB], [Degree], [DepartmentID], [imgUrl], [tbDepartmentDepartmentID], [isActive]) VALUES (1, N'Jacke Masito', CAST(N'1964-05-18T00:00:00.0000000' AS DateTime2), N'Advisor', N'D02', N'.././images/faculty1.jpg', NULL, 1)
INSERT [dbo].[tbFaculty] ([FacultyID], [Name], [DoB], [Degree], [DepartmentID], [imgUrl], [tbDepartmentDepartmentID], [isActive]) VALUES (2, N'Clark Malik', CAST(N'1875-09-25T00:00:00.0000000' AS DateTime2), N'Advisor', N'D01', N'.././images/faculty2.jpg', NULL, 1)
INSERT [dbo].[tbFaculty] ([FacultyID], [Name], [DoB], [Degree], [DepartmentID], [imgUrl], [tbDepartmentDepartmentID], [isActive]) VALUES (3, N'Martin', CAST(N'1977-03-04T00:00:00.0000000' AS DateTime2), N'Master', N'D07', N'.././images/faculty8.jpg', NULL, 1)
SET IDENTITY_INSERT [dbo].[tbFaculty] OFF
GO
SET IDENTITY_INSERT [dbo].[tbFeedback] ON 

INSERT [dbo].[tbFeedback] ([FbID], [FbSubject], [StudentName], [FbContent], [Date], [isResolve], [FbEmail]) VALUES (40, N'string', N'string', N'string', CAST(N'2021-01-27' AS Date), N'string', N'khoaimiday@gmail.com')
INSERT [dbo].[tbFeedback] ([FbID], [FbSubject], [StudentName], [FbContent], [Date], [isResolve], [FbEmail]) VALUES (41, N'to cha adm', N'huy', N'cha m? mai', CAST(N'2021-01-27' AS Date), N'', N'khoaimiday@gmail.com')
SET IDENTITY_INSERT [dbo].[tbFeedback] OFF
GO
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F01', N'Computer Engineering', N'ST01', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F02', N'Mobile Developement', N'ST01', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F03', N'Information Technology', N'ST01', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F04', N'Software Engineering', N'ST01', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F05', N'Business Administration', N'ST02', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F06', N'Economics', N'ST02', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F07', N'Finance', N'ST02', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F08', N'Marketing', N'ST02', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F09', N'Child Developement', N'ST03', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F10', N'Education', N'ST03', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F11', N'Higher Education', N'ST03', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F12', N'Online Teaching', N'ST03', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F13', N'Biomedical Engineering', N'ST04', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F14', N'Engineering Management', N'ST04', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F15', N'Automotive Engineering', N'ST04', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F16', N'Criminal Justice', N'ST05', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F17', N'Cyber Security', N'ST05', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F18', N'Homeland Security', N'ST05', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F19', N'Legal Studies', N'ST05', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F20', N'Nursing', N'ST06', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F21', N'Human Services', N'ST06', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F22', N'Public Heath', N'ST06', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F23', N'Health Education', N'ST06', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F24', N'Art & Art History', N'ST07', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F25', N'Film', N'ST07', NULL)
INSERT [dbo].[tbField] ([FieldCode], [Name], [StreamCode], [tbStreamStreamCode]) VALUES (N'F26', N'Multimedia Design', N'ST07', NULL)
GO
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Ba01', N'Basketball')
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Bb01', N'Baseball')
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Cp01', N'C++')
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Dc01', N'Dancing')
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Ei01', N'English')
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Kt01', N'Karatedo')
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Mi01', N'Music Basic')
INSERT [dbo].[tbOpSubject] ([SubjectID], [SubjectName]) VALUES (N'Sw01', N'Swimming')
GO
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AA01', N'Art History', N'F24', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AA02', N'Art Practice ', N'F24', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AA03', N'Design', N'F24', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AA04', N'Film and Media Studies', N'F24', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AA05', N'Film Production', N'F24', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE01', N'Machine Design and Industrial Drafting', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE02', N'Electrical Machines and Electronics', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE03', N'Material Science', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE04', N'Manufacturing Process', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE05', N'Fluid Mechanics', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE06', N'Dynamics of Machines', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE07', N'Control Engineering', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE08', N'Component Design', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE09', N'Alternative Fuels and Engines', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'AE10', N'Vehicle Dynamics Controller', N'F15', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA01', N'Contemporary Management', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA02', N'Marketing Management', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA03', N'Accounting and Financial Management', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA04', N'Strategic Management', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA05', N'Entrepreneurship Project.', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA06', N'Business Economics', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA07', N'Corporate Finance', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA08', N'Human Resource Management', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA09', N'Leadership - A Critical Perspective', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BA10', N'Project Management OR ITC505 Project Management', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE01', N'Mathematics and Physics of Biomedical Engineering', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE02', N'Basic Mechanics for Biomedical Engineering', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE03', N'Bio-fluid Mechanics', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE04', N'Strength of Materials for Biomedical Engineering', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE05', N'Thermodynamics for Biomedical Engineering', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE06', N'Medical Aspects of Electromagnetic Theory', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE07', N'Electrical and Electronic Circuits', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE08', N'Medical Molecular Biology', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'BE09', N'Basic Biology', N'F13', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD01', N'Education and Society', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD02', N'The Languages of Children', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD03', N'The Practice of Early Childhood Teaching', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD04', N'The Institutions of Childhood', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD05', N'People Under Three', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD06', N'Relationships and the Practice of Teaching', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD07', N'Living Curriculum', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CD08', N' Politics, Policy, and the Profession', N'F09', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE01', N'Engineering Drawing', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE02', N'Physics', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE03', N'Chemistry', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE04', N'Maths', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE05', N'Basic of Electical', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE06', N'Basic of Electronics', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE07', N'Basic of Computers', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE08', N'.NET framework', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE09', N'Computer Graphics', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CE10', N'Multimedia and System Design', N'F01', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ01', N'Biology', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ02', N'Chemistry', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ03', N'Physics', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ04', N'Psychology', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ05', N'Related Articles', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ06', N'Sociology', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ07', N'Government', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CJ08', N'Civics', N'F16', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CS01', N'Computer Forensics', N'F17', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CS02', N'Cyber Law', N'F17', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CS03', N'Introduction to Data Mining', N'F17', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CS04', N'Telecommunication Systems', N'F17', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CS05', N'Secure Software Design', N'F17', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'CS06', N'Risk Analysis', N'F17', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC01', N'Trade Economics ', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC02', N'Money and banking', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC03', N'Market Function', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC04', N'Public finance ', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC05', N'Private finance', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC06', N'Welfare Economics', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC07', N'Labor Economics', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC08', N'Development Economics', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC09', N'Statistics', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EC10', N'Business Studies', N'F06', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED01', N'Senior English', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED02', N'Maths A', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED03', N'Agricultural Science', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED04', N'Biology', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED05', N'Chemistry', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED06', N'Earth Science', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED07', N'Physics', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED08', N'Psychology', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'ED09', N'Marine Science', N'F10', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM01', N'Basic Mechanics for Biomedical Engineering', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM02', N'Computer Science', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM03', N'Mathematics', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM04', N'Managerial Science', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM05', N'Marketing', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM06', N'Physics and Chemistry', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM07', N'Systems Engineering', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'EM08', N'Materials Handling and Plant Layout', N'F14', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL01', N'Film 20 (Film & Media Cultures)', N'F25', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL02', N'Film 25A (History of Film I)', N'F25', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL03', N'Film 25B (History of Film II)', N'F25', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL04', N'Film 128 (Documentary Film)', N'F25', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL05', N'Film 129 (Avant-Garde Film)', N'F25', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL06', N'Film 108 (Genre)', N'F25', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL07', N'Film 151 (Auteur)', N'F25', NULL)
GO
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FL08', N'Film 160 (National Cinema)', N'F25', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FN01', N'Mathematics', N'F07', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FN02', N'Accounting', N'F07', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FN03', N'Economics', N'F07', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FN04', N'Psychology', N'F07', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FN05', N'Technical Writing', N'F07', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FN06', N'Communications', N'F07', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'FN07', N'Computer Course', N'F07', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC01', N'Healthcare Introduction', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC02', N'Psychology and Health', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC03', N'Business and Professional Writing', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC04', N'Physical Science', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC05', N'Computer Applications in Health Education', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC06', N'Statistics', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC07', N'Children’s Health', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HC08', N'Health and Disease', N'F23', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HE01', N'Education', N'F11', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HE02', N'Physical', N'F11', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HE03', N'Life Sciences', N'F11', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HE04', N'Humanities', N'F11', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HE05', N'Social Sciences ', N'F11', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HE06', N'Mathematics', N'F11', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HM01', N'Introduction to Psychology', N'F21', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HM02', N'Developmental Psychology', N'F21', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HM03', N'Case Management', N'F21', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HM04', N'Grant Writing', N'F21', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HM05', N'Lifespan Development', N'F21', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HS01', N'Criminology', N'F18', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HS02', N'Criminal justice', N'F18', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HS03', N'Police science', N'F18', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HS04', N'Emergency management', N'F18', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HS05', N'Homeland security', N'F18', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HS06', N'Sociology', N'F18', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'HS07', N'Forensic psychology', N'F18', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT01', N'Engineering Mathematics', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT02', N'Communication Skills', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT03', N'Engineering Physics', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT04', N'Engineering Graphics', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT05', N'Programming in C Language', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT06', N'Object Oriented Programming using C++', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT07', N'Logic Design and Structure', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT08', N'Database Management System', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT09', N'Mechanics of Solids', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'IT10', N'Data Structure', N'F03', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'LS01', N'American politics', N'F19', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'LS02', N'Social theory', N'F19', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'LS03', N'Legal systems in American society', N'F19', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'LS04', N'Constitutional and business law', N'F19', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'LS05', N'Legal ethics', N'F19', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'LS06', N'Legal writing and research', N'F19', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD01', N'Java Basic', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD02', N'C# Basic', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD03', N'C++ Basic', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD04', N'Html5 Programming', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD05', N'Graphics Design', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD06', N'UI-Design', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD07', N'Android developement', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD08', N'Objective-C and C++ programming', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD09', N'Mobile media marketing & deployment', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MD10', N'Game & simulation programming', N'F02', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK01', N'Managerial Communications', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK02', N'Macroeconomics', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK03', N'Public Relations', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK04', N'Principles of Marketing', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK05', N'Quantitative Methods', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK06', N'Principles of Finance', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK07', N'Business to Business Marketing', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MK08', N'Global Marketing', N'F08', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM01', N'Multimedia Standards', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM02', N'Business of Graphics', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM03', N'Engineering Multimedia Technologies', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM04', N'Visual Design Fundamentals', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM05', N'Advanced Design and  Rapid Visualization', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM06', N'Digital Imaging Fundamentals', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM07', N'Information Design', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM08', N'Web Design', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM09', N'Web Animation', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM10 ', N'Advanced Web Design', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM11', N'Responsive Web Design', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'MM12', N'Media Porfolio', N'F26', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'NS01', N'Anatomy', N'F20', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'NS02', N'Microbiology', N'F20', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'NS03', N'Chemistry', N'F20', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'NS04', N'Nutrition', N'F20', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'NS05', N'Psychology', N'F20', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'NS06', N'Nursing practice and theory', N'F20', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'OT01', N'Internet Resources', N'F12', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'OT02', N'Computer Skills', N'F12', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'OT03', N'Group Work', N'F12', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'OT04', N'Online Assessment', N'F12', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'OT05', N'Copyrighted Materials', N'F12', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'OT06', N'Course Mapping', N'F12', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'OT07', N'Primary Knowledge', N'F12', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'PH01', N'Biology', N'F22', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'PH02', N'Calculus', N'F22', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'PH03', N'English', N'F22', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'PH04', N'Environmental health', N'F22', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'PH05', N'Health policy and management', N'F22', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'PH06', N'Biostatistics', N'F22', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE01', N'Computer Programming', N'F04', NULL)
GO
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE02', N'Program design', N'F04', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE03', N'Computer Systems analysis', N'F04', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE04', N'Mathematics for Computing', N'F04', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE05', N'Introduction to Software Engineering', N'F04', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE06', N'Software Requirements & Modeling', N'F04', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE07', N'Software Design & Construction', N'F04', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE08', N'Software Testing, Verification, and Validation', N'F05', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE09', N'Fundamentals of Programming', N'F04', NULL)
INSERT [dbo].[tbSpeSubject] ([SubjectID], [SubjectName], [FieldCode], [tbFieldFieldCode]) VALUES (N'SE10', N'Programming Languages', N'F04', NULL)
GO
INSERT [dbo].[tbStream] ([StreamCode], [Name]) VALUES (N'ST01', N'Computers & Technology')
INSERT [dbo].[tbStream] ([StreamCode], [Name]) VALUES (N'ST02', N'Business & Management')
INSERT [dbo].[tbStream] ([StreamCode], [Name]) VALUES (N'ST03', N'Education & Teaching')
INSERT [dbo].[tbStream] ([StreamCode], [Name]) VALUES (N'ST04', N'Science & Engineering')
INSERT [dbo].[tbStream] ([StreamCode], [Name]) VALUES (N'ST05', N'Criminal Justice & Legal')
INSERT [dbo].[tbStream] ([StreamCode], [Name]) VALUES (N'ST06', N'Nursing & Healthcare')
INSERT [dbo].[tbStream] ([StreamCode], [Name]) VALUES (N'ST07', N'Art & Design')
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[NormalizedName] ASC
)
WHERE ([NormalizedName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUsers_AdmissionID]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUsers_AdmissionID] ON [dbo].[AspNetUsers]
(
	[AdmissionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_tbAdmission_tbAdmissionStatusStatusID]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbAdmission_tbAdmissionStatusStatusID] ON [dbo].[tbAdmission]
(
	[tbAdmissionStatusStatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbAdmission_tbFieldFieldCode]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbAdmission_tbFieldFieldCode] ON [dbo].[tbAdmission]
(
	[tbFieldFieldCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbAdmission_tbOpSubjectSubjectID]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbAdmission_tbOpSubjectSubjectID] ON [dbo].[tbAdmission]
(
	[tbOpSubjectSubjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbAdmission_tbSpeSubjectSubjectID]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbAdmission_tbSpeSubjectSubjectID] ON [dbo].[tbAdmission]
(
	[tbSpeSubjectSubjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbAdmission_tbStreamStreamCode]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbAdmission_tbStreamStreamCode] ON [dbo].[tbAdmission]
(
	[tbStreamStreamCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbCourse_tbFieldFieldCode]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbCourse_tbFieldFieldCode] ON [dbo].[tbCourse]
(
	[tbFieldFieldCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbCourse_tbStreamStreamCode]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbCourse_tbStreamStreamCode] ON [dbo].[tbCourse]
(
	[tbStreamStreamCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbFaculty_tbDepartmentDepartmentID]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbFaculty_tbDepartmentDepartmentID] ON [dbo].[tbFaculty]
(
	[tbDepartmentDepartmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbField_tbStreamStreamCode]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbField_tbStreamStreamCode] ON [dbo].[tbField]
(
	[tbStreamStreamCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_tbSpeSubject_tbFieldFieldCode]    Script Date: 1/28/2021 1:17:27 AM ******/
CREATE NONCLUSTERED INDEX [IX_tbSpeSubject_tbFieldFieldCode] ON [dbo].[tbSpeSubject]
(
	[tbFieldFieldCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tbFeedback] ADD  DEFAULT ('') FOR [isResolve]
GO
ALTER TABLE [dbo].[tbFeedback] ADD  DEFAULT ('khoaimiday@gmail.com') FOR [FbEmail]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUsers]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUsers_tbAdmission_AdmissionID] FOREIGN KEY([AdmissionID])
REFERENCES [dbo].[tbAdmission] ([AdmissionID])
GO
ALTER TABLE [dbo].[AspNetUsers] CHECK CONSTRAINT [FK_AspNetUsers_tbAdmission_AdmissionID]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[tbAdmission]  WITH CHECK ADD  CONSTRAINT [FK_tbAdmission_tbAdmissionStatus_tbAdmissionStatusStatusID] FOREIGN KEY([tbAdmissionStatusStatusID])
REFERENCES [dbo].[tbAdmissionStatus] ([StatusID])
GO
ALTER TABLE [dbo].[tbAdmission] CHECK CONSTRAINT [FK_tbAdmission_tbAdmissionStatus_tbAdmissionStatusStatusID]
GO
ALTER TABLE [dbo].[tbAdmission]  WITH CHECK ADD  CONSTRAINT [FK_tbAdmission_tbField_tbFieldFieldCode] FOREIGN KEY([tbFieldFieldCode])
REFERENCES [dbo].[tbField] ([FieldCode])
GO
ALTER TABLE [dbo].[tbAdmission] CHECK CONSTRAINT [FK_tbAdmission_tbField_tbFieldFieldCode]
GO
ALTER TABLE [dbo].[tbAdmission]  WITH CHECK ADD  CONSTRAINT [FK_tbAdmission_tbOpSubject_tbOpSubjectSubjectID] FOREIGN KEY([tbOpSubjectSubjectID])
REFERENCES [dbo].[tbOpSubject] ([SubjectID])
GO
ALTER TABLE [dbo].[tbAdmission] CHECK CONSTRAINT [FK_tbAdmission_tbOpSubject_tbOpSubjectSubjectID]
GO
ALTER TABLE [dbo].[tbAdmission]  WITH CHECK ADD  CONSTRAINT [FK_tbAdmission_tbSpeSubject_tbSpeSubjectSubjectID] FOREIGN KEY([tbSpeSubjectSubjectID])
REFERENCES [dbo].[tbSpeSubject] ([SubjectID])
GO
ALTER TABLE [dbo].[tbAdmission] CHECK CONSTRAINT [FK_tbAdmission_tbSpeSubject_tbSpeSubjectSubjectID]
GO
ALTER TABLE [dbo].[tbAdmission]  WITH CHECK ADD  CONSTRAINT [FK_tbAdmission_tbStream_tbStreamStreamCode] FOREIGN KEY([tbStreamStreamCode])
REFERENCES [dbo].[tbStream] ([StreamCode])
GO
ALTER TABLE [dbo].[tbAdmission] CHECK CONSTRAINT [FK_tbAdmission_tbStream_tbStreamStreamCode]
GO
ALTER TABLE [dbo].[tbCourse]  WITH CHECK ADD  CONSTRAINT [FK_tbCourse_tbField_tbFieldFieldCode] FOREIGN KEY([tbFieldFieldCode])
REFERENCES [dbo].[tbField] ([FieldCode])
GO
ALTER TABLE [dbo].[tbCourse] CHECK CONSTRAINT [FK_tbCourse_tbField_tbFieldFieldCode]
GO
ALTER TABLE [dbo].[tbCourse]  WITH CHECK ADD  CONSTRAINT [FK_tbCourse_tbStream_tbStreamStreamCode] FOREIGN KEY([tbStreamStreamCode])
REFERENCES [dbo].[tbStream] ([StreamCode])
GO
ALTER TABLE [dbo].[tbCourse] CHECK CONSTRAINT [FK_tbCourse_tbStream_tbStreamStreamCode]
GO
ALTER TABLE [dbo].[tbFaculty]  WITH CHECK ADD  CONSTRAINT [FK_tbFaculty_tbDepartment_tbDepartmentDepartmentID] FOREIGN KEY([tbDepartmentDepartmentID])
REFERENCES [dbo].[tbDepartment] ([DepartmentID])
GO
ALTER TABLE [dbo].[tbFaculty] CHECK CONSTRAINT [FK_tbFaculty_tbDepartment_tbDepartmentDepartmentID]
GO
ALTER TABLE [dbo].[tbField]  WITH CHECK ADD  CONSTRAINT [FK_tbField_tbStream_tbStreamStreamCode] FOREIGN KEY([tbStreamStreamCode])
REFERENCES [dbo].[tbStream] ([StreamCode])
GO
ALTER TABLE [dbo].[tbField] CHECK CONSTRAINT [FK_tbField_tbStream_tbStreamStreamCode]
GO
ALTER TABLE [dbo].[tbSpeSubject]  WITH CHECK ADD  CONSTRAINT [FK_tbSpeSubject_tbField_tbFieldFieldCode] FOREIGN KEY([tbFieldFieldCode])
REFERENCES [dbo].[tbField] ([FieldCode])
GO
ALTER TABLE [dbo].[tbSpeSubject] CHECK CONSTRAINT [FK_tbSpeSubject_tbField_tbFieldFieldCode]
GO
USE [master]
GO
ALTER DATABASE [UserIdentityDB] SET  READ_WRITE 
GO
