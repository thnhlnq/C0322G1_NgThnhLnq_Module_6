insert into `roles` (`name`, `status`)
values ('ROLE_ADMIN', 0),
       ('ROLE_USER', 0);

insert into `users` (email, `password`, `status`, username)
values ('admin@gmail.com', '$2a$10$AFDDl9JoG6mniECGmKvR3eg1YWyWPppzWweLeZ1doD2Wg3jJq3ukG', 0, 'admin'),
       ('nguyen@gmail.com', '$2a$10$AFDDl9JoG6mniECGmKvR3eg1YWyWPppzWweLeZ1doD2Wg3jJq3ukG', 0, 'usernguyen'),
       ('tran@gmail.com', '$2a$10$AFDDl9JoG6mniECGmKvR3eg1YWyWPppzWweLeZ1doD2Wg3jJq3ukG', 0, 'usertran'),
       ('hoang@gmail.com', '$2a$10$AFDDl9JoG6mniECGmKvR3eg1YWyWPppzWweLeZ1doD2Wg3jJq3ukG', 0, 'userhoang');

insert into `customer` (address, birthday, gender, `name`, phone, `status`, users_id)
values ('Quảng Nam', '1995-01-08', 'Nam', 'Nguyễn Admin', 0976482451, 0, 1),
       ('Đà Nẵng', '1995-10-11', 'Nam', 'Nguyễn User', 0901234785, 0, 2),
       ('Quảng Trị', '1999-10-10', 'Nam', 'Trần User', 090101010, 0, 3),
       ('Huế', '1995-10-11', 'Nam', 'Hoàng User', 0901020304, 0, 4);

insert into `user_role` (`status`, roles_id, users_id)
values (0, 1, 1),
       (0, 2, 1),
       (0, 2, 2),
       (0, 2, 3),
       (0, 2, 4);

insert into category (`name`)
values ('Văn Học Việt Nam'),
       ('Văn Học Nước Ngoài'),
       ('Thiếu Nhi'),
       ('Thời Sự - Chính Trị'),
       ('Khoa Học Tự Nhiên - Nhân Văn'),
       ('Sách Tham Khảo'),
       ('Sách Tái Bản'),
       ('Sách Kinh Tế');

insert into book (author, `code`, `description`, dimension, image, `name`, price, publisher, quantity, release_date,
                  `status`, total_pages, translator, category_id)
values ('Akira Toriyama, Toyotarou', 'MS00001', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872927.jpg',
        'Dragon Ball Super - Tập 13: Trên Từng Chiến Tuyến', 25000, 'Nhà Xuất Bản Văn Học', 20, '2020-10-19', false,
        192, 'Barbie Ayumi, Admin Kej', 1),
       ('Akira Toriyama, Toyotarou', 'MS00002', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865059.jpg',
        'Dragon Ball Super Tập 8: Dấu Hiệu Thức Tỉnh Của Son Goku', 25000, 'Nhà Xuất Bản Văn Học', 20, '2020-10-19',
        false, 192, 'Barbie Ayumi, Admin Kej', 1),
       ('Akira Toriyama, Toyotarou', 'MS00003', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872910.jpg',
        'Dragon Ball Super - Tập 12: Thân Phận Thực Sự Của Merus', 25000, 'Nhà Xuất Bản Kim Đồng', 30, '2020-10-19',
        false, 192, 'Barbie Ayumi, Admin Kej', 3),
       ('Akira Toriyama, Toyotarou', 'MS00004', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865080.jpg',
        'Dragon Ball Super - Tập 11: Cuộc Đại Vượt Ngục', 25000, 'Nhà Xuất Bản Thế Giới', 10, '2021-01-06', false,
        192,
        'Barbie Ayumi, Admin Kej', 4),
       ('Akira Toriyama, Toyotarou', 'MS00005', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865073.jpg',
        'Dragon Ball Super Tập 10: Điều Ước Của Moro', 25000, 'Nhà Xuất Bản Văn Học', 20, '2020-10-19', false, 192,
        'Barbie Ayumi, Admin Kej', 5),
       ('Akira Toriyama, Toyotarou', 'MS00006', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/d/r/dragon-ball-super---tap-9---tb-2022.jpg',
        'Dragon Ball Super Tập 9: Tàn Cuộc', 25000, 'Nhà Xuất Bản Kim Đồng', 30, '2020-10-19', false, 192,
        'Barbie Ayumi, Admin Kej', 7),
       ('Akira Toriyama, Toyotarou', 'MS00007', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/3/9/394080.jpg',
        'Dragon Ball Super Tập 7: Giải Đấu Sức Mạnh-Cuộc Đua Tranh Sống Còn', 25000, 'Nhà Xuất Bản Thế Giới', 10,
        '2021-01-06', false, 192, 'Barbie Ayumi, Admin Kej', 6),
       ('Akira Toriyama, Toyotarou', 'MS00008', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865035.jpg',
        'Dragon Ball Super Tập 6: Hỡi Các Siêu Chiến Binh, Hãy Tập Hợp!', 25000, 'Nhà Xuất Bản Văn Học', 20,
        '2020-10-19', false, 192, 'Barbie Ayumi, Admin Kej', 4),
       ('Akira Toriyama, Toyotarou', 'MS00009', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/d/r/dragon-ball-super---tap-5-_tai-ban-2022_.jpg',
        'Dragon Ball Super Tập 5: Tạm Biệt Nhé Trunks Lớn!', 25000, 'Nhà Xuất Bản Kim Đồng', 30, '2020-10-19',
        false, 192,
        'Barbie Ayumi, Admin Kej', 1),
       ('Akira Toriyama, Toyotarou', 'MS00010', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865011.jpg',
        'Dragon Ball Super Tập 4: Hi Vọng Cuối Cùng', 25000, 'Nhà Xuất Bản Thế Giới', 10, '2021-01-06', false, 192,
        'Barbie Ayumi, Admin Kej', 2),
       ('Akira Toriyama, Toyotarou', 'MS00011', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865004.jpg',
        'Dragon Ball Super Tập 3: Kế Hoạch Vô Nhân', 25000, 'Nhà Xuất Bản Văn Học', 20, '2020-10-19', false, 192,
        'Barbie Ayumi, Admin Kej', 3),
       ('Akira Toriyama, Toyotarou', 'MS00012', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864991.jpg',
        'Dragon Ball Super Tập 2: Vũ Trụ Nào Chiến Thắng?', 25000, 'Nhà Xuất Bản Kim Đồng', 30, '2020-10-19', false,
        192,
        'Barbie Ayumi, Admin Kej', 5),
       ('Akira Toriyama, Toyotarou', 'MS00013', 'Dragon Ball Super với cốt truyện của tác giả Akira Toriyama và nét vẽ đầy mới mẻ của họa sĩ Toyotarou là phần tiếp nối của bộ truyện Dragon Ball, kể tiếp câu chuyện
còn dang dở sau trận chiến với Ma Buu.
Sau khi Trái Đất lập lại hòa bình không lâu, có 2 kẻ lạ mặt xuất hiện dò tìm thông tin về Siêu Saiya Thần Thánh, nhưng Goku và nhóm bạn không ai hay biết gì về nhân vật này. Hai bên đã có một màn “đánh chào hỏi” nhưng phe Trái Đất đã thua chóng vánh trước 2 kẻ lạ mặt đó. Tất cả đều không khỏi sốc khi biết họ chính là Thần Hủy Diệt cùng cộng sự, người được cho là mạnh nhất toàn bộ vũ trụ.
Sự kiện này sau đó cũng mở ra 1 cốt truyện mới vô cùng mở với thế giới 7 viên ngọc rồng, có tận 12 vũ trụ cùng biết bao nhân vật, chiến binh mới. Goku cùng nhóm bạn lại bước vào hành trình chinh phục các giới hạn sức mạnh, chiến đấu với cái ác để bảo vệ những điều thân thương.',
        '17.6 x 11.3',
        'https://cdn0.fahasa.com/media/catalog/product/d/r/dragon-ball-super---tap-1-_-tai-ban-2022_.jpg',
        'Dragon Ball Super Tập 1: Các Chiến Binh Của Vũ Trụ Thứ 6', 25000, 'Nhà Xuất Bản Thế Giới', 10,
        '2021-01-06',
        false, 192, 'Barbie Ayumi, Admin Kej', 4),
       ('Akira Toriyama', 'MS00014', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_185991.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 42: Tạm Biệt Ngọc Rồng', 25000, 'Nhà Xuất Bản Văn Học', 20,
        '2020-10-19',
        false, 192, 'Nhiều Người Dịch', 5),
       ('Akira Toriyama', 'MS00015', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864946.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 39: Vĩnh Biệt Chiến Binh Kiêu Hãnh', 25000, 'Nhà Xuất Bản Kim Đồng', 30,
        '2020-10-19', false, 192, 'Nhiều Người Dịch', 6),
       ('Akira Toriyama', 'MS00016', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864939.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 38: Son Goku VS Vegeta, Cuộc Đối Đầu Định Mệnh', 25000,
        'Nhà Xuất Bản Thế Giới', 10, '2021-01-06', false, 192, 'Nhiều Người Dịch', 5),
       ('Akira Toriyama', 'MS00017', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864922.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 37: Khởi Động Kế Hoạch Tác Chiến', 25000, 'Nhà Xuất Bản Văn Học', 20,
        '2020-10-19', false, 192, 'Nhiều Người Dịch', 3),
       ('Akira Toriyama', 'MS00018', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864915.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 36: Thời Thế Tạo Anh Hùng', 25000, 'Nhà Xuất Bản Kim Đồng', 30,
        '2020-10-19',
        false, 192, 'Nhiều Người Dịch', 4),
       ('Akira Toriyama', 'MS00019', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864892.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 34: Người Kế Thừa Của Goku', 25000, 'Nhà Xuất Bản Văn Học', 20,
        '2020-10-19',
        false, 192, 'Nhiều Người Dịch', 2),
       ('Akira Toriyama', 'MS00020', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864847.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 29: Goku Đại Thất Bại', 25000, 'Nhà Xuất Bản Văn Học', 20, '2020-10-19',
        false, 192, 'Nhiều Người Dịch', 6),
       ('Akira Toriyama', 'MS00021', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864830.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 28: Cậu Thiếu Niên Đến Từ Tương Lai', 25000, 'Nhà Xuất Bản Văn Học', 10,
        '2020-10-19', false, 192, 'Nhiều Người Dịch', 1),
       ('Akira Toriyama', 'MS00022', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864823.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 27: Siêu Saiya, Chiến Binh Huyền Thoại', 25000, 'Nhà Xuất Bản Văn Học', 20,
        '2020-10-19', false, 192, 'Nhiều Người Dịch', 5),
       ('Akira Toriyama', 'MS00023', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864816.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 26: Son Goku Hồi Phục', 25000, 'Nhà Xuất Bản Văn Học', 20, '2020-10-19',
        false, 192, 'Nhiều Người Dịch', 3),
       ('Akira Toriyama', 'MS00024', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864755.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 20: Trời Long Đất Lở', 25000, 'Nhà Xuất Bản Văn Học', 20, '2020-10-19',
        false,
        192, 'Nhiều Người Dịch', 6),
       ('Akira Toriyama', 'MS00025', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864717.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 16: Kì Phùng Địch Thủ', 25000, 'Nhà Xuất Bản Kim Đồng', 10,
        '2019-11-11',
        false, 192, 'Nhiều Người Dịch', 4),
       ('Akira Toriyama', 'MS00026', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864656_1.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 10: Đại Hội Võ Thuật Lần Thứ 22', 25000, 'Nhà Xuất Bản Văn Học', 20,
        '2020-10-19', false, 192, 'Nhiều Người Dịch', 1),
       ('Akira Toriyama', 'MS00027', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864649.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 9: Bà Thầy Bói', 25000, 'Nhà Xuất Bản Thế Giới', 30, '1999-10-10',
        false, 192,
        'Nhiều Người Dịch', 8),
       ('Akira Toriyama', 'MS00028', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/d/r/dragon-ball---tap-8---tb-2022-.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 8: Son Goku Đột Kích', 25000, 'Nhà Xuất Bản Văn Học', 31, '1999-11-11',
        false,
        192, 'Nhiều Người Dịch', 2),
       ('Akira Toriyama', 'MS00029', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/d/r/dragon-ball---tap-7---tb-2022-.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 7: Theo Dấu Tướng Quân Blue', 25000, 'Nhà Xuất Bản Văn Học', 10,
        '2022-11-11',
        false, 192, 'Nhiều Người Dịch', 5),
       ('Akira Toriyama', 'MS00030', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864618.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 6: Sai Lầm Của Bulma', 25000, 'Nhà Xuất Bản Thế Giới', 20, '2022-11-11',
        false, 192, 'Nhiều Người Dịch', 2),
       ('Akira Toriyama', 'MS00033', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_185989.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 40: Vũ Khí Cuối Cùng Của Trái Đất', 19000, 'Nhà Xuất Bản Thế Giới', 10,
        '2019-10-11', false, 192, 'Nhiều Người Dịch', 1),
       ('Akira Toriyama', 'MS00034', 'Dragon Ball là bộ truyện tranh thiếu niên dài kì nổi tiếng của tác giả Toriyama Akira trên tuần san Weely Shonen Jump. Bộ truyện ra đời năm 1984 và kết thúc vào năm 1995 với tổng cộng 519 chương, chia thành 42 tập truyện rời do NXB Shueisha phát hành.
Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất.
Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ngọc rồng nữa, mà là bảo vệ chúng khỏi những kẻ xấu xa mang dã tâm lớn như: Tập đoàn Red Ribbon, Đại Ma Vương Piccolo, Frieza Đại Đế, Cell Bọ Hung, Ma Buu...
Dù đụng độ phải đối thủ mạnh hơn mình rất nhiều, Son Goku không hề nao núng, cậu luôn nỗ lực cải thiện sức mạnh của chính mình và coi kẻ thù giống như những thử thách thú vị cần vượt qua. Chính vì lí do đó mà xưa nay Son Goku vẫn luôn được độc giả xem như là biểu tượng của sự cố gắng không ngừng nghỉ.
Suốt chặng đường trừ gian diệt ác ấy, Goku còn có những người thầy, người bạn sẵn sàng ở bên giúp đỡ, thậm chí vào sinh ra tử cùng cậu. Tác giả Toriyama Akira đã khẳng định một điều rằng: ta sẽ chẳng làm nên điều gì lớn lao nếu như ở bên không có những người bạn tốt. Triết lí: tình bạn – nỗ lực làm nên chiến thắng từ đó đã trở thành tôn chỉ của hầu hết những bộ truyện tranh thiếu niên sau này của Shonen Jump.
Tuy Dragon Ball đã kết thúc nhưng sức hút của bộ truyện vẫn còn sôi sục cho tới tận ngày nay. Bên cạnh series 42 tập chính, Dragon Ball còn được tác giả Toriyama phát triển thành vũ trụ Dragon Ball thông qua các tác phẩm Anime, Movie, và mới đây là series Dragon Ball Super được NXB Kim Đồng mua bản quyền và phát hành gần như sát với Nhật Bản, mời quý vị độc giả đón đọc và ủng hộ.',
        '17.6 x 11.3', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244864946.jpg',
        'Dragon Ball-7 Viên Ngọc Rồng Tập 39: Vĩnh Biệt Chiến Binh Kiêu Hãnh', 25000, 'Nhà Xuất Bản Kim Đồng', 11,
        '2020-10-19', false, 192, 'Nhiều Người Dịch', 5);

insert into cart (create_date, `status`, customer_id)
values ('2022-11-02', false, 1),
       ('2022-11-03', false, 2),
       ('2022-11-04', false, 3),
       ('2022-11-05', false, 2),
       ('2022-11-06', false, 2),
       ('2022-11-07', false, 4),
       ('2022-11-08', false, 3),
       ('2022-11-09', false, 4),
       ('2022-11-09', false, 4),
       ('2022-11-09', false, 2),
       ('2022-11-06', false, 3);

insert into cart_detail (quantity, book_id, cart_id)
values (100, 1, 1),
       (201, 2, 2),
       (396, 4, 3),
       (123, 5, 4),
       (314, 17, 5),
       (343, 14, 6),
       (114, 11, 7),
       (314, 8, 9),
       (551, 24, 10),
       (114, 19, 11),
       (354, 21, 8);