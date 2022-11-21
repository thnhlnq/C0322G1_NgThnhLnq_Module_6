<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thanks Email</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.css" rel="stylesheet"/>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #DDD;
        }

        tr:hover {
            background-color: #D6EEEE;
        }
    </style>
</head>
<body>
<h2 style="text-align: center">Cảm Ơn Bạn Đã Đặt Hàng Tại Book Store</h2>
<h2>Xin chào</h2>
<p>BookStore đã nhận được yêu cầu đặt hàng của bạn và đang xử lý nhé. Bạn sẽ nhận được thông báo tiếp theo khi đơn hàng
    đã sẵn sàng được giao.</p>
<h2 style="text-align: center">Tình Trạng Đơn Hàng: </h2>
<p><strong><span style="color: #F44336">*</span>Lưu Ý Nhỏ Cho Bạn: </strong>
    Bạn chỉ nên nhận hàng khi trạng thái đơn hàng là
    <strong>Đang Giao Hàng</strong>
    và nhớ kiểm tra Mã đơn hàng, Thông tin người gửi và Mã vận đơn để nhận đúng kiện hàng nhé.</p>
<h3>Đơn Hàng Được Giao Đến: </h3>
<p>Tên: ${cart.customer.name}</p>
<p>Địa Chỉ: ${cart.customer.address}</p>
<p>Điện Thoại: ${cart.customer.phone}</p>
<p>Email: ${cart.customer.users.email}</p>
<h3>Chi Tiết Kiện Hàng</h3>
<table class="table table-striped">
    <thead>
    <tr style="width: 100%;">
        <th style="width: 5%;">#</th>
        <th style="width: 45%; text-align: center">Tên Sách</th>
        <th style="width: 25%; text-align: center">Số Lượng</th>
        <th style="width: 25%; text-align: center">Giá</th>
    </tr>
    </thead>
    <tbody>
    <#list CartDetail as item>
        <tr style="width: 100%;">
            <td style="width: 5%;"> ${item?index + 1}</td>
            <td style="width: 45%;">${item.book.name}</td>
            <td style="width: 25%; text-align: center">${item.quantity}</td>
            <td style="width: 25%; text-align: center">${item.book.price * item.quantity} <b>₫</b></td>
        </tr>
    </#list>
    <tr>
        <td style="width: 5%;"></td>
        <td style="width: 45%;"></td>
        <td style="width: 25%;text-align: right">Tổng Tiền:</td>
        <td style="width: 25%;color: #F44336; font-weight: bold">${sum} <b>₫</b></td>
    </tr>
    </tbody>
</table>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.js"></script>
</body>
</html>