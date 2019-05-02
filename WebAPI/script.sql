
USE [UserDB]
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'1', N'Admin', N'Admin', N'Admin')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'2', N'Customer', N'Customer', N'Customer')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [Discriminator], [FullName]) VALUES (N'4a62ba65-efe1-406a-bfd5-bb140adc9366', N'5678', N'5678', N'customer@transme.com', N'CUSTOMER@TRANSME.COM', 0, N'AQAAAAEAACcQAAAAEK4kQtC1h2kxowN/MhNFS17KvdZmwavlRyFUjJLrpNsF3kH6edOOCQsYf4JUWE5Mcg==', N'HRIXL637QGE3D7V7Z6OD35RM73MWQLOF', N'a9c6f694-608a-4e88-9812-b004f3d0f02b', NULL, 0, 0, NULL, 1, 0, N'ApplicationUser', N'customer')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [Discriminator], [FullName]) VALUES (N'87d1beb8-a54a-4ca2-8ae3-53444b765ed2', N'1234', N'1234', N'admin@transme.com', N'ADMIN@TRANSME.COM', 0, N'AQAAAAEAACcQAAAAEHw3JeeZ5ITK3n9nt4KV2kO2+fKgRSnI1hA4Fje6EIAX3Y3uOGczzYza9BRVA4XP2Q==', N'3746XUXPXHJQGGC7T4YM2P3UCR4NEW5L', N'3a430f79-5591-40b5-a035-9e52e58385ef', NULL, 0, 0, NULL, 1, 0, N'ApplicationUser', N'admin ')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'87d1beb8-a54a-4ca2-8ae3-53444b765ed2', N'1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'4a62ba65-efe1-406a-bfd5-bb140adc9366', N'2')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'1', N'Tecnologia', N'#0069D9', N'primary')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'2', N'Deportes', N'#C82333', N'danger')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'3', N'Cine', N'#E2E6EA', N'light')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'4', N'Politico', N'#5A6268', N'secondary')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'5', N'Religioso', N'#E0A800', N'warning')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'6', N'Recreativo', N'#138496', N'info')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'7', N'Teatro', N'#23272B', N'dark')
INSERT [dbo].[Categoria] ([id], [Nombre], [color], [bsadd]) VALUES (N'8', N'Conferencia', N'#218838', N'success')
INSERT [dbo].[Eventos] ([id], [NombreEvento], [Descripcion], [CategoriaID], [Fecha], [Hora], [Lugar], [Estacion], [Costo]) VALUES (N'246d6ae3-90cd-4fd8-8fa6-36b027f05daa', N'Evento Deportivo 1', N'Breve Descripcion del Evento Deportivo 1', N'2', CAST(N'2019-05-15T17:00:00.0000000' AS DateTime2), CAST(N'12:00:00' AS Time), N'Parque Simon Bolivar', N'Salitre el Greco', CAST(0.00 AS Decimal(18, 2)))
INSERT [dbo].[Eventos] ([id], [NombreEvento], [Descripcion], [CategoriaID], [Fecha], [Hora], [Lugar], [Estacion], [Costo]) VALUES (N'6c0376b9-c61e-4fda-9314-83a8243e3a88', N'Evento Tecnológico 1', N'Breve descripción del evento de tecnología 1', N'1', CAST(N'2019-05-02T17:00:00.0000000' AS DateTime2), CAST(N'12:00:00' AS Time), N'COLNODO', N'Suba - Calle 95', CAST(0.00 AS Decimal(18, 2)))
