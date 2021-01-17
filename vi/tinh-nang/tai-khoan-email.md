# Tài khoản Email

[[toc]]

## Thêm tài khoản email.

Guest Post App hỗ trợ thêm tài khoản Gmail hoặc Gsuite của bạn vào để gửi email xin guest post theo chiến dịch. Để thêm mới tài khoản email, bạn hãy nhấn vào **Email Account** ở thanh công cụ trên cùng.

**Bước 1:** Điền **Tên người gửi** và **Địa chỉ email** để thêm.

**Bước 2:** Sau khi thêm tài khoản email, bạn cần tiến hành kết nối tài khoản này với Google để Guest Post App có thể gửi email dưới danh nghĩa của bạn.

![Thêm email account](./../../assets/img/add-email-account.png)

Nhấn nút **Connect Gmail Account**, sau đó chọn tài khoản Gmail trùng với email mà bạn đã tạo ở Guest Post App.

**Bước 3:** Cuối cùng là chấp nhận các quyền sau:

![Connect Google](./../../assets/img/connect-google.png)

## Tại sao tôi lại thấy màn hình "Google hasn't verified this app" khi kết nối toàn khoản email với Google.

Trước hết, bạn cần phải biết Guest Post App yều cầu quyền đọc email (*gmail.readonly*) khi bạn kết nối tài khoản Gmail hoặc Gsuite của bạn để ứng dụng có thể phát hiện các email nào đã được phản hồi và sẽ không gửi các [follow-up email](/vi/tinh-nang/chien-dich.html#buoc-2-soan-initial-email-va-follow-up-emails) tới các địa chỉ email đó nữa.

Tuy nhiên từ 10/2019, Google yêu cầu các ứng dụng truy cập quyền này phải [đóng một khoảng phí từ $15.000 - $75.000](https://cloud.google.com/blog/products/g-suite/elevating-user-trust-in-our-api-ecosystems), phí này gọi là *"security assessment"*. Hiện tại, Guest Post App là một startup chưa có đủ khả năng để chi trả khoản phí này, cho nên chúng tôi đưa ra 2 lựa chọn sau để bạn có thể lựa chọn. Xin lỗi vì sự bất tiện này.

### Lựa chọn 1: Chấp nhận cho Guest Post App truy cập quyền đọc email - khi này bạn sẽ sử dụng được tính năng follow-up tự động.

Để bỏ qua thông báo "Google hasn't verified this app" từ Google, bạn chỉ cấn nhấn vào **Advanced**, sau đó chọn **Go to Guest Post App**.

![Unverified App](./../../assets/img/unverified-app.png)

### Lựa chọn 2: Không chấp nhận cho Guest Post App truy cập quyền đọc email - bạn sẽ không sử dụng được tính năng follow-up tự động.

Bạn cần nhấn vào nút **Connect Gmail Account Without Read Scope** thay vì **Connect Gmail Account**, khi này Guest Post App sẽ không yêu cầu bạn cấp quyền truy cập đọc email và bạn sẽ không thấy thông báo "Google hasn't verified this app" từ Google.

![Gmail Buttons](./../../assets/img/gmail-buttons.png)

:::danger Lưu ý:
Nếu bạn chọn **lựa chọn 2** và các [chiến dịch email](/vi/tinh-nang/chien-dich.html) của bạn có thiết lập follow-up emails, vì ứng dụng không thể đọc email của bạn nên Guest Post App vẫn sẽ gửi các follow-up emails này cho dù thực tế bạn đã nhận được phản hồi từ chủ website.

Để có thể đánh dấu thủ công email đã được phản hồi, vui lòng làm theo hướng dẫn tại đây.
:::
