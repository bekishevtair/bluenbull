<template>
  <!-- Page Content Starts -->
  <div class="policy_page page_content">
    <div class="container">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-12 text-center">
          <div class="title_section page_content_title mobile_bg_white">
            <h2 class="main_title mb-0">
              Bán lẻ<span class="title_span">Thỏa thuận khách hàng</span>
            </h2>
            <p class="py-3 py-md-5 mb-0 text-primary">
              <strong>Ghi chú:</strong> Bản tiếng Anh của thỏa thuận này là
              phiên bản điều chỉnh và sẽ được áp dụng khi có bất kỳ sự khác biệt
              giữa phiên bản tiếng Anh và các phiên bản khác.
            </p>
            <p class="fw-bold text-primary">
              Thỏa thuận khách hàng này, cùng với bất kỳ (các) Danh mục và các
              tài liệu kèm theo, theo thời gian sửa đổi, (sau đây gọi là “Thỏa
              thuận”) quy định các điều khoản của hợp đồng giữa bạn, Khách hàng
              và chúng tôi – Công ty. Bằng cách ký kết thỏa thuận này, bạn sẽ
              được đảm bảo rằng bạn đã đọc, hiểu và đồng ý với tất cả các điều
              khoản của Thỏa thuận này.
            </p>
          </div>
        </div>
        <!-- Page Main Title Ends -->
      </div>

      <!-- Terms Index Section-->
      <div class="row bg-white">
        <div class="col-12">
          <div class="terms_index_sec">
            <a
              @click="
                scrollIntoViewWithOffset('#definitions-interpretations', 120)
              "
              >1. Định nghĩa và Giải thích</a
            >
            <a @click="scrollIntoViewWithOffset('#introduction', 120)"
              >2. Giới thiệu</a
            >
            <a @click="scrollIntoViewWithOffset('#general', 120)"
              >3. Tổng quát</a
            >
            <a @click="scrollIntoViewWithOffset('#regulation', 120)"
              >4. Quy chế</a
            >
            <a @click="scrollIntoViewWithOffset('#costs-payments', 120)"
              >5. Chi phí, khoản thanh toán và phí</a
            >

            <a @click="scrollIntoViewWithOffset('#right-cancel', 120)"
              >6. Quyền Hủy Bỏ</a
            >
            <a @click="scrollIntoViewWithOffset('#non-advised', 120)"
              >7. Không tư vấn</a
            >
            <a @click="scrollIntoViewWithOffset('#customer-accounts', 120)"
              >8. Tài khoản khách hàng và tiền gửi ban đầu</a
            >
            <a @click="scrollIntoViewWithOffset('#trading-policies', 120)"
              >9. Chính sách và Thủ tục Thương mại</a
            >
            <a @click="scrollIntoViewWithOffset('#electronic-trading', 120)"
              >10. Điều khoản giao dịch điện tử</a
            >

            <a @click="scrollIntoViewWithOffset('#no-trading', 120)"
              >11. Kỳ hạn “Không Giao dịch” – Điều khoản chung “One Touch”</a
            >
            <a @click="scrollIntoViewWithOffset('#margining-arrangements', 120)"
              >12. Thoả thuận dàn xếp</a
            >
            <a @click="scrollIntoViewWithOffset('#client-funds', 120)"
              >13. Quỹ Khách Hàng</a
            >
            <a
              @click="
                scrollIntoViewWithOffset('#representations-waranties', 120)
              "
              >14. Đại diện, Bảo đảm và Giao ước</a
            >
            <a @click="scrollIntoViewWithOffset('#event-default', 120)"
              >15. Sự kiện Mặc định</a
            >

            <a @click="scrollIntoViewWithOffset('#netting', 120)">16. Lưới</a>
            <a @click="scrollIntoViewWithOffset('#rights-default', 120)"
              >17. Quyền Mặc định</a
            >
            <a @click="scrollIntoViewWithOffset('#termination-default', 120)"
              >18. Chấm dứt mà không có Giá trị Mặc định</a
            >
            <a @click="scrollIntoViewWithOffset('#exclusions-limitations', 120)"
              >19. Loại trừ, Hạn chế và Bồi thường</a
            >
            <a @click="scrollIntoViewWithOffset('#miscellaneous', 120)"
              >20. Các khoản khác</a
            >

            <a @click="scrollIntoViewWithOffset('#governing-law', 120)"
              >21. Luật pháp và thẩm quyền</a
            >
          </div>
        </div>
      </div>
      <!-- Terms Index Section Ends-->

      <!-- Terms and Conditions Text-->
      <div class="row terms_texts_sec bg-white">
        <div class="col-12">
          <!-- 1 -->
          <div>
            <p>
              <span id="definitions-interpretations"
                ><strong>1. ĐỊNH NGHĨA VÀ GIẢI THÍCH</strong></span
              >
            </p>
            <p><strong>Trong Hợp đồng này:</strong></p>
            <p>
              <strong>“Tài khoản”</strong> có nghĩa là tài khoản giao dịch mà
              bạn giữ với chúng tôi và chỉ định với một số tài khoản duy nhất.
            </p>
            <p>
              <strong>“Thỏa thuận”</strong> có nghĩa là các Điều khoản và Điều
              kiện đối với các Dịch vụ do Công ty cung cấp.
            </p>
            <p>
              <strong>“Liên kết”</strong> có nghĩa là một cam kết trong cùng một
              nhóm với chúng tôi, đại diện mà chúng tôi hoặc một cam kết trong
              cùng một nhóm với chúng tôi chỉ định hoặc bất kỳ người nào khác mà
              chúng tôi có mối quan hệ hợp lý có thể làm tăng cộng đồng quan tâm
              giữa chúng tôi và họ.
            </p>
            <p>
              <strong>“Đơn vị tiền tệ cơ bản”</strong> có nghĩa là Đô la Mỹ.
            </p>
            <p>
              <strong>“Số dư”</strong> nghĩa là số tiền được giữ thay mặt Khách
              hàng trên Tài khoản của khách hàng trong bất kỳ khoảng thời gian
              nào.
            </p>
            <p>
              <strong>“Chi tiết Tài khoản Ngân hàng”</strong> có nghĩa là các
              chi tiết của tài khoản ngân hàng của bạn, trong đó Blue Sun Capital Ltd sẽ ghi nhận khoản lợi nhuận bị thu hồi và / hoặc bất kỳ
              khoản tiền nào từ yêu cầu rút tiền và / hoặc bất kỳ khoản tiền nào
              còn lại trong tài khoản giao dịch và / Cần được trả lại cho bạn.
            </p>
            <p>
              <strong>“Ngày làm việc”</strong> có nghĩa là ngày không phải là
              Thứ Bảy hoặc Chủ Nhật hoặc một ngày lễ công ở St. Vincent và khi
              nào các ngân hàng mở cửa kinh doanh tại St. Vincent.
            </p>
            <p>
              <strong>“Vị trí Đóng”</strong> nghĩa là giao dịch mua (bán) được
              mua bán trái ngược với hợp đồng.
            </p>
            <p>
              <strong>“Hợp đồng cho sự khác biệt”</strong> hoặc
              <strong>“CFD”</strong> có nghĩa là công cụ tài chính giữa một nhà
              đầu tư Blue Sun Capital Ltd. Khi kết thúc hợp đồng, các bên trao
              đổi sự chênh lệch giữa giá mở cửa và giá đóng của một công cụ tài
              chính cụ thể, bao gồm cổ phiếu hoặc hàng hóa. “Nhà cung cấp Dịch
              vụ Hỗ trợ Tín dụng” có nghĩa là bất kỳ người nào ký hợp đồng bảo
              đảm, thỏa thuận, thỏa thuận, ký quỹ hoặc thỏa thuận an ninh theo
              yêu cầu của chúng tôi đối với các nghĩa vụ của bạn theo Hợp đồng
              này.
            </p>
            <p>
              <strong>“FSA”</strong> là chữ viết tắt cho “St Vincent &amp; The
              Grenadines Financial Services Authority”.
            </p>
            <p>
              <strong>“Dịch vụ điện tử”</strong> là dịch vụ do chúng tôi cung
              cấp, ví dụ như dịch vụ giao dịch trực tuyến cung cấp cho khách
              hàng quyền truy cập thông tin và các cơ sở kinh doanh thông qua
              dịch vụ internet, dịch vụ WAP và / hoặc hệ thống định tuyến điện
              tử.
            </p>
            <p>
              <strong>“Sự kiện Mặc định”</strong> nghĩa là bất kỳ sự kiện nào vi
              phạm quy định tại Khoản 15.1 đến khoản 15.9 của Điều 14.1 (Các Sự
              kiện Mặc định).
            </p>
            <p>
              <strong>“Thực hiện”</strong> là việc hoàn thành các lệnh của khách
              hàng trên nền tảng giao dịch của Công ty, trong đó Công ty hoạt
              động như Địa điểm thực hiện giao dịch của khách hàng.
            </p>
            <p>
              <strong>“FFI”</strong> là chữ viết tắt của Tổ chức Tài chính Nước
              ngoài.
            </p>
            <p>
              <strong>“Công cụ tài chính”</strong> là bất kỳ công cụ tài chính
              nào do Blue Sun Capital Ltd cung cấp và được định nghĩa như vậy
              theo Luật hoặc Quy định hiện hành. Theo giấy phép của Blue Sun Capital Ltd là:
            </p>
            <p>i. Chứng khoán chuyển nhượng</p>
            <p>ii. Công cụ thị trường tiền tệ</p>
            <p>iii. Các đơn vị trong các cơ sở đầu tư tập thể</p>
            <p>
              iv. Các hợp đồng kỳ hạn và các hợp đồng phái sinh khác có liên
              quan đến chứng khoán, tiền tệ, lãi suất hoặc năng suất, hoặc các
              công cụ phái sinh khác, chỉ số tài chính hoặc các biện pháp tài
              chính có thể được giải quyết bằng cơ thể hoặc tiền mặt.
            </p>
            <p>
              v. Các lựa chọn, hợp đồng tương lai, hợp đồng hoán đổi lãi suất,
              hợp đồng kỳ hạn và các hợp đồng phái sinh khác có liên quan đến
              hàng hoá phải được thanh toán bằng tiền mặt hoặc có thể được thanh
              toán bằng tiền mặt theo lựa chọn của một trong các bên (trừ trường
              hợp không trả được nợ biến cố).
            </p>
            <p>
              vi. Tùy chọn, hợp đồng tương lai, hoán đổi, và bất kỳ hợp đồng
              phái sinh nào khác có liên quan đến các mặt hàng có thể được định
              giá về thể chất với điều kiện là chúng được giao dịch trên thị
              trường được điều chỉnh và / hoặc một MTF.
            </p>
            <p>
              vii. Tùy chọn, hợp đồng tương lai, hoán đổi, chuyển tiếp và bất kỳ
              hợp đồng phái sinh khác có liên quan đến hàng hoá có thể được giải
              quyết về mặt vật lý nếu không được đề cập đến ở điểm (vi) ở trên
              và không nhằm vào mục đích thương mại có đặc điểm của các công cụ
              tài chính phái sinh khác, Cho dù chúng được thanh toán và thanh
              toán thông qua các trung gian thanh toán được công nhận hay phải
              thực hiện các cuộc gọi ký quỹ định kỳ.
            </p>
            <p>viii.Các công cụ chuyển đổi rủi ro tín dụng.</p>
            <p>ix. Hợp đồng tài chính cho sự khác biệt.</p>
            <p>
              x. Tùy chọn, hợp đồng tương lai, hoán đổi, hợp đồng kỳ hạn và bất
              kỳ hợp đồng phái sinh nào khác liên quan đến các biến đổi khí hậu,
              giá cước vận chuyển, trợ cấp khí thải hoặc tỷ lệ lạm phát hoặc các
              số liệu thống kê kinh tế chính thức khác phải được giải quyết bằng
              tiền mặt hoặc có thể thanh toán bằng tiền mặt theo lựa chọn của
              một trong Các bên liên quan (trừ trường hợp không trả được nợ hoặc
              một sự kiện chấm dứt hợp đồng khác), cũng như các hợp đồng phái
              sinh khác có liên quan đến tài sản, quyền, nghĩa vụ, chỉ số và các
              biện pháp không được đề cập trong Phần này, có đặc điểm của các
              công cụ tài chính phái sinh khác,liên quan đến việc liệu chúng
              được giao dịch trên thị trường được điều chỉnh hay MTF, sẽ được
              thanh toán và thanh toán thông qua các trung gian thanh toán được
              công nhận hoặc phải thực hiện các cuộc gọi ký quỹ thường xuyên.
            </p>
            <p>
              <strong>“Hợp đồng ngoại hối”</strong> là hợp đồng giữa Blue Sun Capital Ltd và Khách hàng của mình để đổi hai loại tiền tệ theo
              tỷ giá đã thoả thuận.
            </p>
            <p>
              <strong>“Đơn đặt hàng”</strong> có nghĩa là yêu cầu / chỉ dẫn được
              đưa ra bởi Khách hàng cho Công ty trong Tài khoản của Khách hàng.
            </p>
            <p>
              <strong>“OTC”</strong> có nghĩa là ‘over the counter’ và đề cập
              đến các giao dịch được tiến hành khác với trao đổi.
            </p>
            <p>
              <strong>“ Bàn giao dịch hạn chế Blue Sun Capital Ltd</strong> có
              nghĩa là bàn giao dịch do chúng tôi điều hành tại trụ sở của chúng
              tôi Trụ sở chính của Blue Sun Capital Ltd First Floor, First St
              Vincent Bank Ltd Building, James Street, Kingstown, St. Vincent
              and the Grenadines.
            </p>
            <p>
              <strong
                >“ Blue Sun Capital Ltd Hệ thống Thương mại Trực tuyến hạn
                chế”</strong
              >
              có nghĩa là hệ thống kinh doanh dựa trên internet có sẵn tại trang
              web của chúng tôi cho phép bạn cung cấp cho chúng tôi với hướng
              dẫn.
            </p>
            <p>
              <strong>“Các nghĩa vụ có bảo đảm”</strong> nghĩa là nghĩa vụ ròng
              mà bạn phải trả cho chúng tôi sau khi áp dụng khoản tạm ngừng theo
              khoản 13 (Quỹ khách hàng) trong khoản có quyền (Đặt mặc định).
            </p>
            <p>
              <strong>“Dịch vụ”</strong> nghĩa là các dịch vụ đầu tư sẽ được
              cung cấp bởi Công ty cho khách hàng và được điều chỉnh bởi Thỏa
              thuận này vì chúng được mô tả trong tài liệu này.
            </p>
            <p>
              <strong>“Hệ thống”</strong> có nghĩa là tất cả các phần cứng máy
              tính và phần mềm, thiết bị, cơ sở mạng và các nguồn lực khác và
              các tiện nghi cần thiết để bạn có thể sử dụng Dịch vụ Điện tử.
            </p>
            <p>
              <strong>“Giao dịch”</strong> có nghĩa là bất kỳ loại hình giao
              dịch nào phải tuân theo Hiệp định này và bao gồm một hợp đồng CFD,
              giao ngay hay chuyển tiếp dưới bất kỳ hình thức nào, tương lai,
              quyền chọn hoặc hợp đồng phái sinh khác có liên quan đến bất kỳ
              hàng hoá, công cụ tài chính , Chỉ mục hoặc bất kỳ sự kết hợp nào
              của chúng và bất kỳ giao dịch hoặc công cụ tài chính nào khác mà
              chúng tôi được ủy quyền theo thời gian mà cả hai chúng tôi đồng ý
              sẽ là một Giao dịch.
            </p>
          </div>
          <!-- 2 -->
          <div>
            <p>
              <span id="introduction"><strong>2. GIỚI THIỆU</strong></span>
            </p>
            <p><strong>Phạm vi của Thỏa thuận này</strong></p>
            <p>
              Thỏa thuận này đưa ra cơ sở để chúng tôi cung cấp dịch vụ cho bạn.
              Thỏa thuận này chi phối mỗi Giao dịch đã ký kết hoặc chưa thanh
              toán giữa chúng tôi trong hoặc sau khi thực hiện Thỏa thuận này.
            </p>
            <p><strong>Bắt đầu</strong></p>
            <p>
              Thỏa thuận này thay thế bất kỳ thoả thuận nào trước đó giữa bạn và
              chúng tôi về cùng một chủ đề và có hiệu lực khi bạn cho biết chấp
              nhận của bạn thông qua trang web của chúng tôi. Thỏa thuận này sẽ
              áp dụng cho tất cả các Giao dịch dự tính theo Hợp đồng này.
            </p>
            <p>
              Mối quan hệ giữa Khách hàng và Blue Sun Capital Ltd sẽ được điều
              chỉnh bởi Thỏa thuận này. Trong trường hợp bạn – Khách hàng, muốn
              có một Thỏa thuận đã ký, Khách hàng phải in và gửi 2 (hai) bản cho
              Blue Sun Capital Ltd, trong đó Blue Sun Capital Ltd sẽ ký và đóng
              các Thỏa thuận và gửi bản sao cho Khách hàng.
            </p>
            <p>
              Chúng tôi bảo lưu quyền thay đổi Thỏa thuận này bất cứ lúc nào và
              thông báo cho bạn về bất kỳ sự thay đổi như vậy qua email hoặc qua
              trang web Blue Sun Capital Ltd. Bất kỳ thay đổi nào đối với Thỏa
              thuận sẽ không áp dụng cho các giao dịch được thực hiện trước ngày
              mà các thay đổi có hiệu lực trừ khi có sự đồng ý cụ thể khác.
              Trong trường hợp bạn không đồng ý với những thay đổi, bạn có thể
              chấm dứt Thỏa thuận theo Khoản 18 ở đây.
            </p>
          </div>
          <!-- 3 -->
          <div>
            <p>
              <span id="general"><strong>3. CHUNG</strong></span>
            </p>
            <p><strong>Thông tin về chúng tôi</strong></p>
            <p>
              Blue Sun Capital Ltd (“licensed” được uỷ quyền và được điều chỉnh
              bởi Ủy ban Dịch vụ Tài chính St. Vincent được cấp phép bởi St
              Vincent &amp; The Grenadines Financial Services Authority (“FSA”)
              với Giấy phép số 450 LLC 2020 Văn phòng đăng ký của chúng tôi là
              First Floor, First St Vincent Bank Ltd Building, James Street,
              Kingstown, St. Vincent and the Grenadines. Quy định tại Khoản 20
              (Các khoản thanh toán khác) dưới tiêu đề “Thông báo” Blue Sun Capital Ltd là nhà môi giới cho CFD và Spot FX Contracts Blue Sun Capital Ltd hoạt động các trang web, nền tảng giao dịch và tên thương
              hiệu như được chỉ ra trong trang web Blue Sun Capital Ltd hoạt
              động thông qua các trang web này cho phép kinh doanh trực tuyến.
            </p>
            <p><strong>Ngôn ngữ</strong></p>
            <p>
              Thỏa thuận này được cung cấp cho bạn bằng tiếng Anh và chúng tôi
              sẽ tiếp tục giao tiếp với bạn bằng tiếng Anh trong suốt thời gian
              của Thỏa thuận này. Tuy nhiên, nếu có thể, chúng tôi sẽ liên lạc
              với bạn bằng các ngôn ngữ khác ngoài tiếng Anh.
            </p>
            <p><strong>Liên lạc với chúng tôi</strong></p>
            <p>
              Bạn có thể liên lạc với chúng tôi bằng văn bản (bao gồm cả fax),
              qua email hoặc các phương tiện điện tử khác, hoặc bằng miệng (kể
              cả qua điện thoại). Chi tiết liên lạc của chúng tôi được nêu trong
              khoản 19 (Các khoản phụ) dưới tiêu đề “Thông báo”. Ngôn ngữ giao
              tiếp phải là tiếng Anh, và bạn sẽ nhận được tài liệu và thông tin
              khác từ chúng tôi bằng tiếng Anh. Tuy nhiên, khi thích hợp và để
              thuận tiện cho bạn, chúng tôi sẽ cố gắng liên lạc với bạn bằng các
              ngôn ngữ khác. Trang web của chúng tôi có thêm thông tin chi tiết
              về chúng tôi và các dịch vụ của chúng tôi và các thông tin khác có
              liên quan đến Thỏa thuận này. Trong trường hợp có mâu thuẫn giữa
              các điều khoản của Thỏa thuận này với trang web của chúng tôi,
              Thỏa thuận này sẽ được áp dụng.
            </p>
            <p>
              Blue Sun Capital Ltd giám sát truyền thông của bạn để đánh giá
              chất lượng dịch vụ mà bạn nhận được, sự tuân thủ của bạn đối với
              Thỏa thuận này, tính bảo mật của trang web hoặc vì các lý do khác.
              Bạn đồng ý rằng các hoạt động giám sát như vậy sẽ không cho phép
              bạn có bất kỳ hành động hoặc quyền nào khác liên quan đến cách mà
              Blue Sun Capital Ltd giám sát các thông tin của bạn.
            </p>
            <p><strong>Tuổi hợp pháp</strong></p>
            <p>
              Các dịch vụ và sản phẩm của Công ty chỉ được cung cấp cho những cá
              nhân có độ tuổi từ 18 trở lên (và ít nhất là độ tuổi pháp lý theo
              thẩm quyền của bạn). Bạn đại diện và đảm bảo rằng nếu bạn là một
              cá nhân, bạn đã có từ 18 tuổi trở lên và có độ tuổi pháp định
              trong thẩm quyền của bạn để tạo thành một hợp đồng ràng buộc và
              tất cả các thông tin đăng ký bạn gửi là chính xác và trung thực.
              Công ty có quyền yêu cầu bạn chứng minh tuổi của bạn và tài khoản
              của bạn có thể bị tạm ngưng cho đến khi có đủ bằng chứng về độ
              tuổi. Công ty có thể, theo ý riêng của mình, từ chối cung cấp sản
              phẩm và dịch vụ của mình cho bất kỳ cá nhân hoặc tổ chức nào và
              thay đổi tiêu chuẩn đủ điều kiện vào bất kỳ lúc nào.
            </p>
            <p><strong>Khả Năng</strong></p>
            <p>
              Chúng tôi đóng vai trò là một chủ, chứ không phải là đại lý thay
              cho bạn và bạn ký kết Hợp đồng này với tư cách là chủ chứ không
              phải là đại lý (hay người ủy thác) nhân danh người khác. Chúng tôi
              sẽ coi bạn là khách hàng bán lẻ vì mục đích của Quy tắc FSA và các
              Quy định áp dụng. Bạn có quyền yêu cầu phân loại khách hàng khác.
              Tuy nhiên, nếu bạn yêu cầu phân loại như vậy và chúng tôi đồng ý
              phân loại như vậy, bảo vệ theo quy tắc FSA nhất định và các Quy
              định áp dụng khác có thể bị giảm. Điều này có thể bao gồm, nhưng
              không giới hạn ở:
            </p>
            <p>
              1. Yêu cầu để chúng tôi hành động phù hợp với lợi ích tốt nhất của
              bạn;
            </p>
            <p>
              2. Nghĩa vụ cung cấp thông tin thích hợp cho bạn trước khi cung
              cấp dịch vụ;
            </p>
            <p>
              3. Sự hạn chế trong việc thanh toán hoặc nhận của chúng tôi bất kỳ
              sự khuyến khích nào;
            </p>
            <p>
              4. Nghĩa vụ của chúng tôi để đạt được sự thực hiện tốt nhất đối
              với đơn hàng của bạn;
            </p>
            <p>
              5. Yêu cầu để thực hiện các thủ tục và sắp xếp cung cấp cho việc
              thực hiện nhanh chóng, công bằng và nhanh chóng các đơn hàng của
              bạn; Và
            </p>
            <p>
              7. Yêu cầu bạn nhận được từ chúng tôi các báo cáo đầy đủ về các
              dịch vụ cung cấp cho bạn.
            </p>
            <p><strong>Bị Cấm / Không được phép</strong></p>
            <p>
              Công ty có quyền và có quyền vào bất kỳ lúc nào, và theo ý riêng
              của mình, để hạn chế cung cấp dịch vụ của mình cho các khu vực
              nhất định và xem chúng là những quốc gia bị cấm liên quan đến các
              khách hàng tiềm năng. Hiện tại Công ty không chấp nhận khách hàng
              mới và / hoặc việc mở tài khoản mới từ các khu vực pháp lý sau:
            </p>
            <p>
              <strong>Bỉ, Liên minh châu u, Canada, Hoa Kỳ và Israel.</strong>
            </p>
            <p>
              Danh sách các quốc gia bị cấm, có thể thay đổi vào bất kỳ lúc nào
              Công ty cho rằng tùy theo quyết định của mình mà không cần thông
              báo trước.
            </p>
            <p>
              Khách hàng bằng văn bản này xác nhận rằng bằng cách đồng ý với
              Thỏa thuận này, anh ta không phải là người cư trú tại một trong
              các quốc gia được đề cập trong danh sách và các giao ước nói trên
              để thông báo cho Công ty về tình hình của anh ta trong bất kỳ hình
              thức nào. Công ty có quyền yêu cầu bất kỳ thông tin bổ sung nào
              xét thấy cần thiết để xác minh sự tuân thủ điều khoản này.
            </p>
            <p><strong>Giải thích chung</strong></p>
            <p>
              Một tham chiếu trong Thỏa thuận này có “khoản” hoặc “Lịch trình”
              sẽ được hiểu là một tham chiếu, tương ứng, một khoản hoặc Lịch
              biểu của Thỏa thuận này, trừ khi ngữ cảnh yêu cầu khác. Các tài
              liệu tham khảo trong Hợp đồng này với bất kỳ đạo luật hay công cụ
              pháp định nào hoặc Quy định áp dụng bao gồm bất kỳ sửa đổi, sửa
              đổi, gia hạn hay tái áp dụng. Một tài liệu tham khảo trong Thỏa
              thuận này đối với “tài liệu” sẽ được hiểu là bao gồm bất kỳ tài
              liệu điện tử nào. Nam tính bao gồm nữ tính và người dị tính và số
              ít bao gồm số nhiều và ngược lại theo ngữ cảnh thừa nhận hoặc yêu
              cầu. Các từ và cụm từ được định nghĩa trong Quy tắc của FSA và các
              Quy định áp dụng có cùng ý nghĩa trong Thỏa thuận này trừ khi được
              quy định rõ ràng trong Thỏa thuận này.
            </p>
            <p><strong>Thời gian biểu</strong></p>
            <p>
              Các điều khoản trong thời gian biểu kèm theo (được sửa đổi theo
              từng thời điểm) sẽ được áp dụng. Đôi khi chúng tôi có thể gửi cho
              bạn thêm thời gian biểu cho các giao dịch. Trong trường hợp mâu
              thuẫn giữa các điều khoản của bất kỳ thời gian biểu và Thỏa thuận
              này, các điều khoản của thời gian biểu sẽ được áp dụng. Việc một
              khoản được liệt kê cụ thể trong một Lịch trình đối với một Giao
              dịch sẽ không ngăn cản một khoản tương tự được thể hiện hoặc hàm ý
              liên quan đến bất kỳ Giao dịch khác. Bạn thừa nhận đã đọc, hiểu và
              đồng ý với Lịch trình của Thỏa thuận này.
            </p>
            <p><strong>Tiêu đề</strong></p>
            <p>
              Các tiêu đề chỉ nhằm mục đích tham khảo và không phải là một phần
              của Hợp đồng này
            </p>
          </div>
          <!-- 4 -->
          <div>
            <p>
              <span id="regulation"><strong>4. QUY ĐỊNH</strong></span>
            </p>
            <p><strong>Theo các quy định áp dụng</strong></p>
            <p>
              Thỏa thuận này và tất cả các Giao dịch tuân theo các Quy định có
              thể áp dụng để:
            </p>
            <p>
              1. Không có điều khoản nào trong Thỏa thuận này sẽ loại trừ hoặc
              hạn chế bất kỳ nghĩa vụ nào mà chúng tôi có đối với bạn theo Các
              Quy định Có thể áp dụng;
            </p>
            <p>
              2. Chúng tôi có thể mất hoặc bỏ qua để thực hiện bất kỳ hành động
              nào mà chúng tôi cho là cần thiết để đảm bảo tuân thủ các Quy định
              áp dụng;
            </p>
            <p>
              3. Tất cả các quy định áp dụng và bất cứ điều gì chúng tôi làm
              hoặc không làm để tuân thủ chúng sẽ ràng buộc bạn; Và
            </p>
            <p>
              4. Hành động mà chúng tôi thực hiện hoặc không thực hiện vì mục
              đích tuân thủ bất kỳ Quy định áp dụng nào sẽ không làm cho chúng
              tôi hoặc bất kỳ giám đốc, cán bộ, nhân viên hoặc đại lý của chúng
              tôi chịu trách nhiệm.
            </p>
            <p><strong>Hành động của cơ quan quản lý</strong></p>
            <p>
              Nếu một cơ quan quản lý thực hiện bất kỳ hành động nào ảnh hưởng
              đến Giao dịch, thì chúng tôi có thể thực hiện bất kỳ hành động nào
              mà chúng tôi quyết định cân nhắc hợp lý với hành động đó hoặc để
              giảm bất kỳ tổn thất phát sinh do hành động đó. Mọi hành động như
              vậy sẽ ràng buộc bạn. Nếu một cơ quan quản lý yêu cầu bất kỳ giao
              dịch nào của bạn, bạn đồng ý hợp tác với chúng tôi và cung cấp kịp
              thời các thông tin được yêu cầu liên quan đến cuộc điều tra.
            </p>
          </div>
          <!-- 5 -->
          <div>
            <p>
              <span id="costs-payments"
                ><strong>5. CHI PHÍ VÀ THANH TOÁN</strong></span
              >
            </p>
            <p><strong>Chi phí bổ sung</strong></p>
            <p>
              Bạn nên biết về khả năng các loại thuế hoặc chi phí khác có thể
              tồn tại mà chúng tôi không phải trả hoặc áp đặt. Trong trường hợp
              có bất kỳ khoản thuế giá trị gia tăng hoặc bất kỳ nghĩa vụ thuế
              khác phát sinh liên quan đến một giao dịch được thực hiện thay mặt
              bạn hoặc bất kỳ hành động nào khác được thực hiện theo Hợp đồng
              này cho bạn, khoản tiền mà bạn phải chịu hoàn toàn và trong trường
              hợp này bạn phải trả Blue Sun Capital Ltd Khi được yêu cầu và
              Blue Sun Capital Ltd có đầy đủ quyền ghi nợ tài khoản của bạn với
              số tiền chưa thanh toán để được giải quyết (không bao gồm thuế
              phải nộp của Blue Sun Capital Ltd liên quan đến thu nhập hoặc lợi
              nhuận của Blue Sun Capital Ltd).
            </p>
            <p><strong>Thanh toán</strong></p>
            <p>
              Tất cả các khoản thanh toán cho chúng tôi theo Thỏa thuận này sẽ
              được thực hiện bằng tiền tệ như chúng tôi theo thời gian xác định
              đối với tài khoản ngân hàng do chúng tôi chỉ định cho các mục đích
              đó. Tất cả các khoản thanh toán đó do bạn thực hiện mà không có
              khoản khấu trừ hoặc khấu trừ.
            </p>
            <p><strong>Thù lao và chia sẻ phí</strong></p>
            <p>
              Chúng tôi có thể chia sẻ khoản phí với các đối tác, chi nhánh,
              giới thiệu kinh doanh và các đại lý liên quan đến Giao dịch được
              thực hiện thay mặt bạn. Nếu bạn cần thêm thông tin về phí và hoa
              hồng mà chúng tôi trả cho giới thiệu kinh doanh và các chi nhánh
              khác, hãy thông báo cho chúng tôi và chúng tôi sẽ cung cấp cho bạn
              thêm thông tin.
            </p>
            <p><strong>Rollovers, Lãi suất</strong></p>
            <p>
              Chi phí tài chính hàng ngày có thể áp dụng cho mỗi vị trí mở FX /
              CFD vào thời điểm đóng cửa ngày giao dịch của Blue Sun Capital Ltd
              đối với FX / CFD đó. Nếu tính phí tài chính này được áp dụng,
              khách hàng phải thanh toán trực tiếp cho Blue Sun Capital Ltd hoặc
              sẽ được thanh toán bởi Blue Sun Capital Ltd cho Khách hàng, tùy
              thuộc vào loại FX / CFD và tính chất của vị trí Khách hàng nắm
              giữ. Phương pháp tính phí tài chính thay đổi theo loại FX / CFD mà
              nó áp dụng. Hơn nữa, số tiền phí tài trợ sẽ thay đổi do nó liên
              quan đến lãi suất hiện tại (chẳng hạn như LIBOR). Phí tài chính sẽ
              được ghi có hoặc ghi nợ (khi thích hợp) vào tài khoản của Khách
              hàng vào ngày giao dịch kế tiếp sau ngày mà nó liên quan.
            </p>
            <p>
              Blue Sun Capital Ltd có quyền thay đổi phương pháp tính khoản phí
              tài chính, tỷ lệ tài trợ và / hoặc các loại FX / CFD mà tính phí
              tài chính được áp dụng. Đối với một số loại FX / CFDs, Khách Hàng
              phải trả một khoản hoa hồng để mở và đóng các vị trí FX / CFD.
              Khoản tiền hoa hồng phải trả sẽ được ghi nợ từ tài khoản của Khách
              hàng vào cùng thời điểm với Blue Sun Capital Ltd mở ra hoặc đóng
              FX / CFD có liên quan. Thay đổi lãi suất hoán đổi và tính toán của
              chúng tôi sẽ theo ý của chúng tôi và không có thông báo. Khách
              hàng cần luôn luôn kiểm tra trang web của chúng tôi về các mức phí
              hiện tại tính phí. Giá có thể thay đổi nhanh chóng do điều kiện
              thị trường (thay đổi về lãi suất, biến động, thanh khoản …) và do
              nhiều vấn đề liên quan đến rủi ro theo ý của công ty.
            </p>
            <p><strong>Đối với nền tảng MT4:</strong></p>
            <p>
              Hợp đồng tương lai mà dựa trên CFD có thời hạn, và khách hàng sẽ
              có thể đóng các vị trí CFD của họ cho đến ngày này. Để bảo đảm các
              điều kiện giao dịch liên tục cho khách hàng, khi một hợp đồng
              trong tương lai mà một CFD dựa trên sẽ đến hạn, tài sản cơ bản của
              CFD đó sẽ được chuyển sang kỳ hạn tiếp theo của hợp đồng tương
              lai. Một lịch của đáo hạn như vậy được đề cập trên trang web của
              công ty, phần “Tài liệu / Tiêu chuẩn thông số kỹ thuật”. Vì lợi
              ích tốt nhất của khách hàng, việc đáo hạn cũng sẽ được thông báo
              trong phần “tin nội bộ” của trang web, ít nhất 5 giờ trước khi
              cuộn qua. Phí bảo hiểm sẽ được cộng hoặc trừ từ tài khoản của
              khách hàng, dựa trên sự khác biệt về giá cả giữa hai hợp đồng
              tương lai.
            </p>
            <p>
              Bất kỳ giao dịch FX/CFD mở nào được Khách hàng thực hiện vào cuối
              ngày giao dịch được xác định bởi Blue Sun Capital Ltd<br />
              hoặc vào cuối tuần, sẽ tự động được chuyển sang ngày làm việc tiếp
              theo để tránh đóng tự động và xử lý giao dịch tự động. Khách hàng
              hiểu nhận rằng khi chuyển giao các giao dịch đó sang ngày làm việc
              tiếp theo, phí có thể được thêm hoặc trừ từ tài khoản của Khách
              hàng đối với giao dịch đó. Nền tảng MT4 tính toán chuyển đổi giao
              dịch qua đêm lúc 21:00 GMT và phí chuyển đổi được ghi nợ hoặc trừ
              vào từ tài khoản giao dịch. Ví dụ: Nếu bạn bán 1 lot EUR/USD, bạn
              sẽ trả chi phí chuyển đổi trên 100.000 Euro, với mức phí hiện tại
              sẽ là 0,017 đô la. Tỷ lệ này có thể thay đổi theo thời gian, để
              biết mức phí thực tế, vui lòng kiểm tra “Thông số kỹ Tiêu chuẩn”
              trên trang web của chúng tôi.
            </p>
            <p>
              Vào thứ Tư lúc 21:00 GMT, phí chuyển đổi qua đêm được nhân với ba
              (x3) để bù vào cuối tuần sắp tới. Tiền phí sẽ được xác định theo
              Blue Sun Capital Ltd theo thời gian, theo quyết định tuyệt đối
              của<br />
              Blue Sun Capital Ltd. Khách hàng ủy quyền cho Blue Sun Capital Ltd
              để thêm hoặc trừ phí vào hoặc từ tài khoản của Khách hàng cho bất
              kỳ giao dịch mở nào đã tích lũy phí, theo tỷ lệ áp dụng, mỗi ngày
              tại thời điểm thu tiền được chỉ định trên nền tảng giao dịch cho
              mỗi công cụ riêng lẻ có liên quan.
            </p>
          </div>
          <!-- 6 -->
          <div>
            <p>
              <span id="right-cancel"><strong>6. QUYỀN HỦY BỎ</strong></span>
            </p>
            <p>
              Bạn có quyền hủy bỏ Thỏa thuận này trong thời hạn mười bốn ngày
              bắt đầu vào ngày kết thúc Thỏa thuận này hoặc ngày bạn nhận được
              Thỏa thuận này (tùy vào thời điểm nào sau đó) (“Thời hạn Hủy”).
              Nếu bạn muốn hủy Hợp đồng này trong Thời hạn Hủy, bạn nên gửi
              thông báo bằng văn bản tới địa chỉ sau: Blue Sun Capital Ltd,
              First Floor, First St Vincent Bank Ltd Building, James Street,
              Kingstown, St. Vincent and the Grenadines hoặc thư điện tử tới địa
              chỉ email sau:<br />
              . Hủy Thỏa thuận này trong Thời hạn Hủy sẽ không hủy bất kỳ Giao
              dịch nào do bạn ký trong thời gian Hủy. Nếu bạn không huỷ bỏ Thỏa
              thuận này trong Thời hạn Hủy, bạn sẽ bị ràng buộc bởi các điều
              khoản của nó nhưng bạn có thể chấm dứt Thỏa thuận này theo khoản
              18 (Chấm dứt mà không có Mặc định).
            </p>
          </div>
          <!-- 7 -->
          <div>
            <p>
              <span id="non-advised"
                ><strong>7. KHÔNG ĐƯỢC TƯ VẤN</strong></span
              >
            </p>
            <p><strong>Chỉ thi hành</strong></p>
            <p>
              Blue Sun Capital Ltd chỉ giao dịch dựa trên cơ sở thực hiện và
              không tư vấn về giá trị của các Giao dịch cụ thể hoặc hậu quả về
              thuế của chúng.
            </p>
            <p><strong>Tự đánh giá và tính phù hợp</strong></p>
            <p>
              Không làm ảnh hưởng đến các nghĩa vụ đã nói ở trên của chúng tôi,
              khi yêu cầu chúng tôi tham gia vào bất kỳ Giao dịch nào, bạn tuyên
              bố rằng bạn đã tự chịu trách nhiệm về việc thẩm định và điều tra
              độc lập của mình về rủi ro của Giao dịch. Bạn tuyên bố rằng bạn có
              kiến ​​thức đầy đủ, sự tinh tế về thị trường, lời khuyên chuyên
              môn và kinh nghiệm để tự đánh giá về thành tích và rủi ro của giao
              dịch và bạn đã đọc và chấp nhận Bản tuyên bố tiết lộ rủi ro và các
              hướng dẫn liên quan đến các công cụ tài chính và thị trường có sẵn
              trong các trang web của chúng tôi. Chúng tôi không bảo đảm cho bạn
              sự phù hợp của sản phẩm được giao dịch theo Hợp đồng này và không
              có nghĩa vụ ủy thác trong quan hệ của chúng tôi với bạn.
            </p>
            <p>
              Bạn chịu hoàn toàn trách nhiệm về bất kỳ chiến lược đầu tư, giao
              dịch hoặc đầu tư nào, chi phí thuế và bất kỳ hậu quả nào gây ra từ
              bất kỳ giao dịch nào mà bạn thực hiện và Blue Sun Capital Ltd sẽ
              không chịu trách nhiệm và bạn cũng không phải dựa vào Công ty cho
              những điều nói trên.
            </p>
            <p><strong>Thông tin ngẫu nhiên và nghiên cứu đầu tư</strong></p>
            <p>
              Chúng tôi cung cấp các khuyến nghị thương mại chung, bình luận thị
              trường hoặc các thông tin khác trong bản tin và / hoặc trang web
              của chúng tôi:
            </p>
            <p>
              1. Đây là sự tình cờ liên quan đến mối quan hệ giao dịch của bạn
              với chúng tôi. Nó được cung cấp chỉ để cho phép bạn đưa ra quyết
              định đầu tư của riêng mình và không phải là tư vấn đầu tư;
            </p>
            <p>
              2. Khi thông tin dưới hình thức một tài liệu có chứa một giới hạn
              đối với người hoặc loại người mà người đó có tài liệu đó hoặc
              người được phân phối, bạn đồng ý rằng bạn sẽ không chuyển nó cho
              bất kỳ người nào khác;
            </p>
            <p>
              3. Chúng tôi không đại diện, bảo hành hoặc đảm bảo về tính chính
              xác hoặc đầy đủ của thông tin đó hoặc về những hậu quả về thuế của
              bất kỳ giao dịch nào;
            </p>
            <p>
              4. Bạn chấp nhận rằng trước khi gửi đi, chúng tôi có thể đã tự
              mình thực hiện hoặc đã sử dụng thông tin trên đó. Chúng tôi không
              đại diện cho thời gian bạn nhận được và không thể đảm bảo rằng bạn
              sẽ nhận được thông tin đó cùng lúc với các khách hàng khác. Bất kỳ
              báo cáo hoặc khuyến nghị nghiên cứu nào xuất bản có thể xuất hiện
              trong một hoặc nhiều dịch vụ thông tin màn hình.
            </p>
            <p><strong>Xung đột chính sách lãi suất</strong></p>
            <p>
              Theo các quy định áp dụng, Công ty Blue Sun Capital Ltd phải có
              các thoả thuận để quản lý mâu thuẫn quyền lợi giữa Blue Sun Capital Ltd và Khách hàng của mình và giữa các Khách hàng khác. Về mặt
              này, Blue Sun Capital Ltd sẽ có những nỗ lực hợp lý để tránh xung
              đột lợi ích; Khi họ không thể tránh được Blue Sun Capital Ltd sẽ
              đảm bảo rằng bạn được đối xử công bằng và ở mức cao nhất của sự
              toàn vẹn và rằng lợi ích của bạn được bảo vệ ở tất cả các lần.
            </p>
            <p>
              Bạn thừa nhận và chấp nhận rằng bạn đã đọc và chấp nhận Chính sách
              Xung đột Lợi ích đã được cung cấp cho bạn trong quá trình đăng ký
              và được tải lên trên trang web chính thức của Blue Sun Capital Ltd.
            </p>
          </div>
          <!-- 8 -->
          <div>
            <p>
              <span id="customer-accounts"
                ><strong
                  >8. TÀI KHOẢN CỦA KHÁCH HÀNG VÀ KHOẢN TIỀN ĐẦU TIÊN</strong
                ></span
              >
            </p>
            <p>
              Khách hàng xác nhận và chấp nhận rằng Công ty có quyền bảo lưu
              quyền thông báo bằng văn bản để đóng băng bất kỳ tài khoản giao
              dịch nào theo bất kỳ yêu cầu pháp lý và / hoặc quy định nào.
            </p>
            <p><strong>Các tài liệu</strong></p>
            <p>
              Khi bạn đăng ký Dịch vụ, Blue Sun Capital Ltd sẽ yêu cầu bạn cung
              cấp một số thông tin nhận dạng nhất định, như là một phần của thủ
              tục mở tài khoản sẽ cho phép chúng tôi xác định bạn và phân loại
              bạn theo “Chính sách phân loại khách hàng” của Blue Sun Capital Ltd.
            </p>
            <p>
              Bạn thừa nhận ý muốn chia sẻ với Blue Sun Capital Ltd một số thông
              tin cá nhân mà chúng tôi sử dụng để xác nhận danh tính của bạn và
              xếp loại bạn theo “Chính sách Phân loại Khách hàng”. Thông tin này
              được thu thập theo thủ tục xác minh nghiêm ngặt của chúng tôi được
              sử dụng để ngăn chặn các hoạt động rửa tiền quốc tế và đảm bảo an
              toàn cho hoạt động kinh doanh của khách hàng của chúng tôi trong
              suốt thời gian hợp tác và phải tuân theo “Chính sách Bảo mật” của
              Công ty.
            </p>
            <p>
              Bạn được yêu cầu cung cấp chi tiết tài khoản ngân hàng của bạn
              trước khi mở tài khoản giao dịch của bạn để Blue Sun Capital Ltd
              có thể hoàn trả bất kỳ khoản tiền nào có liên quan đến tài khoản
              giao dịch của bạn.
            </p>
            <p>
              Nếu bạn đăng ký là một pháp nhân, dưới đây tuyên bố rằng bạn có
              thẩm quyền ràng buộc tổ chức đó với Thỏa thuận này. Blue Sun Capital Ltd sẽ xử lý cẩn thận thông tin mà bạn ủy thác cho Blue Sun Capital Ltd, phù hợp với các thông tin tiết lộ mà tổ chức đó
              cung cấp trong quá trình đăng ký và trong Chính sách bảo mật của
              tổ chức đó.
            </p>
            <p>
              Trước khi bạn có thể giao dịch với Blue Sun Capital Ltd, bạn phải
              đọc và chấp nhận Thỏa thuận này, bao gồm tuyên bố tiết lộ rủi ro,
              chính sách và thủ tục giao dịch được liệt kê trong khoản 9 dưới
              đây và tất cả các bổ sung liên quan, bạn phải gửi đủ tiền vào tài
              khoản của bạn, mẫu đăng ký khách hàng của bạn và tất cả các tài
              liệu đi kèm phải được chấp thuận bởi Blue Sun Capital Ltd. Khi phê
              duyệt đăng ký của bạn, bạn sẽ được thông báo qua e-mail. Blue Sun Capital Ltd có thể theo ý riêng của mình, yêu cầu ngoài việc
              chấp nhận trực tuyến Hợp Đồng này, Khách hàng phải hoàn thành và
              nộp bất kỳ tài liệu đã ký nào theo yêu cầu của Blue Sun Capital Ltd, bao gồm nhưng không giới hạn ở Thỏa thuận này và báo cáo
              về sự tiết lộ rủi ro.
            </p>
            <p><strong>Tiền tệ của tài khoản</strong></p>
            <p>
              Bạn có thể mở tài khoản giao dịch bằng USD, EUR, GBP hoặc bất kỳ
              loại tiền nào mà Blue Sun Capital Ltd có thể cung cấp. Số dư tài
              khoản sẽ được tính và báo cáo cho bạn theo loại tiền tệ mà Tài
              khoản được duy trì.
            </p>
            <p><strong>Tài khoản Chung</strong></p>
            <p>
              Ngoài các điều kiện được liệt kê trong Khoản 9 trong phần “Quyền”
              đối với Chủ Tài khoản chung, áp dụng các điều kiện bổ sung sau
              đây.
            </p>
            <p>
              Trường hợp tài khoản giao dịch của bạn được giữ với Blue Sun Capital Ltd, được cùng sở hữu bởi hai hoặc nhiều người thụ hưởng:
            </p>
            <p>
              1. Mỗi chủ tài khoản chung sẽ phải chịu trách nhiệm liên đới và
              riêng biệt đối với tất cả các nghĩa vụ đối với Blue Sun Capital Ltd phát sinh đối với Tài khoản giao dịch chung của bạn.
            </p>
            <p>
              2. Mỗi bạn chịu trách nhiệm riêng biệt về việc tuân thủ các điều
              khoản của Thỏa thuận này.
            </p>
            <p>
              3. Nếu có tranh chấp giữa bạn mà chúng tôi biết, chúng tôi có thể
              yêu cầu cả hai hoặc tất cả các bạn ủy quyền cho các hướng dẫn bằng
              văn bản cho chúng tôi.
            </p>
            <p>
              4. Nếu một trong hai người chết, người sống sót có thể tiếp tục
              vận hành Tài khoản giao dịch và nếu có nhiều hơn một người sống
              sót, các quy định của khoản này sẽ tiếp tục áp dụng cho Tài khoản
              giao dịch.
            </p>
            <p>
              5. Nếu bạn cung cấp thông tin cá nhân và thông tin tài chính liên
              quan đến các chủ Tài khoản chung khác cho mục đích mở hoặc quản lý
              Tài khoản giao dịch của bạn, bạn xác nhận rằng bạn có sự đồng ý
              của họ hoặc có quyền cung cấp thông tin này cho chúng tôi và chúng
              tôi sử dụng nó theo Với Thỏa thuận này.
            </p>
            <p>
              6. Bất kỳ ai trong số các bạn có thể yêu cầu đóng tài khoản và
              chuyển số dư, trừ khi có những trường hợp yêu cầu chúng tôi phải
              có sự cho phép của tất cả các bạn.
            </p>
            <p>
              7. Chỉ mỗi bạn sẽ được tiếp cận duy nhất với số tiền ban đầu được
              gửi bởi bạn trong Tài khoản giao dịch chung của bạn. Nếu bạn muốn
              rút các khoản tiền này khỏi Tài khoản giao dịch của mình, bạn sẽ
              được yêu cầu điền và ký vào một biểu mẫu rút tiền hoặc biểu mẫu
              rút tiền điện tử, khi nhận được mẫu rút tiền đã hoàn tất, bạn sẽ
              được Blue Sun Capital Ltd cho phép rút tiền lên đến Số dư tài
              khoản có sẵn, với điều kiện phải đáp ứng các điều kiện rút tiền
              quy định tại khoản 9. Blue Sun Capital Ltd sẽ ghi có số tiền rút
              ra trong cùng một tài khoản ngân hàng, thẻ tín dụng / thẻ ghi nợ
              hoặc phương thức thanh toán khác từ nơi nó đã được ghi nợ ban đầu.
            </p>
            <p>
              8. Trong trường hợp rút tiền từ tài khoản giao dịch chung, nếu bất
              kỳ người thụ hưởng tài khoản nào muốn rút tiền từ Tài khoản giao
              dịch chung, bạn sẽ phải điền và ký vào một biểu mẫu thu hồi hoặc
              mẫu rút tiền điện tử, với điều kiện là Thu hồi quy định tại khoản
              9. Khi nhận được đơn rút tiền đã hoàn tất, bạn sẽ được Blue Sun Capital Ltd cho phép rút bất kỳ khoản tiền nào từ Tài khoản giao
              dịch chung. Blue Sun Capital Ltd sẽ ghi có số tiền rút tiền trong
              cùng một tài khoản ngân hàng, thẻ tín dụng / thẻ ghi nợ hoặc
              phương thức thanh toán khác từ nơi nó đã được ghi nợ ban đầu.
            </p>
            <p>
              9. Để Hợp đồng này có hiệu lực và bắt buộc, tất cả Chủ Tài khoản
              Hợp đồng phải ký kết Hợp đồng và trong trường hợp bất kỳ Chủ Tài
              khoản nào muốn chấm dứt Hợp đồng này và đóng tài khoản giao dịch
              chung được tổ chức với Công ty, Của tất cả Chủ tài khoản được lấy
              theo các quy định tại khoản 17 của Hiệp định này.
            </p>
            <p><strong>Tài khoản Hồi giáo</strong></p>
            <p>
              Trong trường hợp khách hàng do tuân thủ tín ngưỡng tôn giáo Hồi
              giáo không thể nhận hoặc trả lãi, khách hàng đó có thể lựa chọn
              theo cách được cung cấp bởi Công ty vì điều này có thể thay đổi
              theo thời gian, tài khoản giao dịch của họ sẽ là Một tài khoản
              hoán đổi miễn phí không bị tính phí hoặc có quyền, phí bảo hiểm và
              / hoặc trả lại và / hoặc lợi ích (“Tài khoản Hồi giáo”). Khách
              hàng xác nhận và / hoặc chấp nhận và / hoặc tuyên bố rằng yêu cầu
              làm tài khoản của họ là Hồi giáo sẽ chỉ được thực hiện vì những
              tín ngưỡng tôn giáo Hồi giáo nói trên và vì lý do nào khác. Công
              ty có quyền từ chối chấp nhận yêu cầu của một khách hàng để chỉ
              định tài khoản của họ như là một Tài khoản Hồi giáo, theo quyết
              định duy nhất và tuyệt đối của nó sẽ được quyết định và không thể
              tranh cãi đối với khách hàng.
            </p>
            <p>
              Trong trường hợp Công ty nghi ngờ rằng khách hàng lợi dụng quyền
              được giao cho họ bằng cách phân loại tài khoản đó làm Tài khoản
              Hồi giáo, Công ty có quyền, không cần thông báo trước, tiến hành
              một hoặc nhiều điều sau đây:
            </p>
            <p>
              Công ty có thể cộng thêm hoa hồng cho mỗi một trong những nghiệp
              vụ được thực hiện trên Tài khoản Hồi giáo; Và / hoặc
            </p>
            <p>
              Công ty có thể hủy bỏ các quyền và / hoặc điều kiện đặc biệt được
              cấp cho Tài khoản do phân loại như Tài khoản Hồi giáo, nhớ lại
              việc chỉ định Tài khoản là Tài khoản Hồi giáo và làm cho nó là Tài
              khoản Giao dịch thông thường; Và / hoặc
            </p>
            <p>
              Công ty có thể hạn chế và / hoặc ngăn cấm khách hàng ngăn ngừa các
              vị trí của họ; Và / hoặc
            </p>
            <p>
              Công ty có thể, theo ý riêng của mình, đóng bất kỳ vị trí mở và
              khôi phục lại chúng theo giá thị trường thực. Khách hàng bằng văn
              bản này, thừa nhận rằng họ phải chịu tất cả các chi phí có được từ
              hành động nói trên, bao gồm nhưng không giới hạn, chi phí thay đổi
              sự lây lan.
            </p>
          </div>
          <!-- 9 -->
          <div>
            <p>
              <span id="trading-policies"
                ><strong
                  >9. Tiền thưởng – Các điều khoản và điều kiện</strong
                ></span
              ><br />
              <strong><br /> </strong>
            </p>
            <ol>
              <li>
                Công ty ComfyFX khuyến khích khách hàng của mình thông qua
                chương trình tặng tiền thưởng cho khách. Các điều khoản và điệu
                kiện liên quan đến chương trình được trình bày trong tài liệu
                này.
              </li>
              <li>
                Khi mở tài khoản giao dịch và đề nghị tham gia chương trình này,
                khách hàng phải thừa nhận rằng đã đọc và đồng ý không những với
                các điều khoản và điều kiện của chương trình mà còn cả với các
                điều khoản thương mại của công ty ComfyFX cái mà có thể tìm thấy
                ở trên trang web của công ty.
              </li>
              <li>
                Chương trình này chỉ dành cho các khách hàng mở tài khoản thông
                qua trang https://comfyfc.com/, ComfyFX có quyền tự cho phép
                mình ngừng chương trình tại bất kỳ quốc gia hay các khu vực nào
                nếu cần thiết.
              </li>
              <li>
                Để tham gia chương trình, khách hàng phải thỏa mãn các yêu cầu
                sau đây:
              </li>
            </ol>
            <p>
              4.1 Khách hàng cần phải trung thực khi đăng ký tham gia vào chương
              trình.
            </p>
            <p>4.2 Chương trình này chỉ dành cho các khách hàng của ComfyFX</p>
            <p>
              4.3 Khách hàng cần phải cung cấp các thông tin và chi tiết đúng
              dắn và chuẩn xác liên quan đến chương trình này, bao gồm cả thông
              tin chi tiết về liên lạc điện thoại của khách hàng
            </p>
            <p>
              4.5 Khách hàng không được phép là nhân viên hay là đối tác của
              ComfyFX
            </p>
            <p>
              4.6 Khách hàng phải là người chưa bao giờ tham gia vào mục „Hành
              vi lạm dụng“ (được định nghĩa ở đoạn 5 dưới đây) liên quan đến bất
              kỳ các chương trình khuyến khích khác của ComfyFX
            </p>
            <p>
              4.7 Khách không được phép liên đới tới bất kỳ cá nhân nào người mà
              có liên quan đến mục „Hành vi làm dụng“ (được định nghĩa ở đoạn 5
              dưới đây) hay liên quan đến bất kỳ các chương trình khuyến khích
              khác của ComfyFX
            </p>
            <ol start="5">
              <li>
                Để được phép tiếp tục duy trì tham gia vào chương trình này,
                khách hàng cần phải luôn tuân theo các điều khoản thương mại và
                các điều kiện ComfyFX của công ty cũng như các điều kiện liệt kê
                sau đây:
              </li>
            </ol>
            <p>
              5.1 Khách hàng phải tỏ ra trung thực khi tham gia vào chương
              trình.
            </p>
            <p>
              5.2 Khách hàng không được phép dính líu đến bất kỳ các hành vi sai
              trái, lạm dụng liên quan đến chương trình này hoặc bất kỳ các
              chương trình khác tương tự trước đây.
            </p>
            <p>5.3 Hành vi lạm dụng bao gồm những hành vi như sau:</p>
            <p>
              5.3.1 thay mặt khách hàng đưa ra những chỉ dẫn không thích đáng,
              không đúng thẩm quyền; Các khách hàng mới: là những khách hàng lần
              đầu tiên mở tài khoản tại ComfyFX và đăng ký tham gia chương trình
              này của công ty ComfyFX
            </p>
            <p>
              5.3.2 liên tục không trả lời email hay điện thoại trong vòng 15
              ngày hoặc hơn thế;
            </p>
            <p>
              5.3.3 Khách hàng, tự mình hoặc liên kết với những người khác thiết
              lập các chiến lược đầu tư nhằm mục đích thu được các lợi nhuận tạo
              ra từ Tiền Thưởng mà không phải chịu các rủi ro kinh tế, bao gồm,
              nhưng không giới hạn, việc thua lỗ của Tiền Thưởng hoặc vốn của
              khách hàng (hay vốn của những người khác có liên quan);
            </p>
            <p>
              5.3.4 Khách hàng, tự mình hoặc liên kết với những người khác, sở
              hữu môt hay nhiều tài khoản trong đó Tiền Thưởng được tích lũy từ
              các chương trình khuyến khích khác lớn hơn lượng tiền đã có thể
              được tích luỹ kể cả khi khách hàng và những người liên quan đã
              tuân thủ các điều khoản và điều kiện của chương trình này cũng như
              các chương trình khác dựa trên cơ sở của một hay nhiều chương
              trình khuyến khích cụ thể nào đó trong dó khách hàng đã và đang
              tham gia;
            </p>
            <p>
              5.3.5 Khách hàng tìm cách giảm thiểu rủi ro cho các hoạt động đầu
              cơ hay bán khống của mình bao gồm, nhưng không giới hạn, thông qua
              việc tiến hành các hoạt động mua bán trái ngược với các hoạt động
              đầu cơ hay bán khống của khách hàng, hoặc chỉ với mục đích tượng
              trưng thông qua việc sử dụng một hay nhiều tiền tệ tương quan tại
              một thời điểm cho trước (sử dụng tài khoản giao dịch mở tại công
              ty ComfyFX, hoặc sử dụng các tài khoản giao dịch được mở tại các
              nhà môi giới khác);
            </p>
            <ol start="6">
              <li>
                Tùy theo các điều khoản thương mại và điều kiện của công ty
                ComfyFX cũng như của chương trình này, mọi khách hàng ngoại trừ
                khách hàng đã được đề cập ở đoạn 3 kể trên hoặc khách hàng không
                thỏa mãn các điều kiện ở đoạn 5 bên trên sẽ được phép nhận tiền
                thưởng. Chương trình này chỉ áp dụng cho từng khách hàng và sẽ
                không bị ảnh hưởng bởi số lượng tài khoản khách hàng nắm giữ tại
                công ty ComfyFX. Tiền Thưởng không thể được rút dưới dạng tiền
                mặt từ tài khoản Tiền Thưởng của khách hàng (xem đoạn 13 để biết
                thêm chi tiết).
              </li>
              <li>
                Tùy theo các điều kiện của chương trình, tài khoản của khách
                hàng mặc dù đạt tiêu chuẩn sẽ vẫn không được phép tham gia tiếp
                vào chương trình này trong các tháng kế tiếp. Thêm vào đó khách
                hàng phải ý thức được rằng công ty sẽ không cho phép bất kỳ sự
                chuyển nhượng nội bộ của Tiền Thưởng giữa các tài khoản đạt tiêu
                chuẩn của khách hàng được mở tại ComfyFX.
              </li>
              <li>
                Khách hàng sẽ không được phép tham gia chương trình này nếu sử
                dụng các phần mềm tư vấn giao dịch cho khách hàng (Expert
                Advisors) hay là các chương trình máy tính khác.
              </li>
              <li>
                Nếu các điều khoản và điều kiện kể trên được thỏa mãn, Tiền
                Thưởng sẽ được gửi vào tài khoản đạt tiêu chuẩn của khách hàng
                dưới dạng tiền ảo. Tiền Thưởng sẽ không được coi như là khoản nợ
                của công ty ComfyFX đối với khách hàng và công ty có quyền đơn
                phương khấu trừ, hủy bỏ hay xóa sổ khoản Tiền Thưởng đó khỏi tài
                khoản của khách hàng bất cứ lúc nào theo quyết định của ComfyFX
                cũng như các điều khoản ở đoạn 19 dưới đây.
              </li>
              <li>
                Để kích hoạt Tiền Thưởng, khách hàng cần phải mở tài khoản tại
                ComfyFX và sau đó gửi yêu cầu thông qua người quản lý tài khoản
                của khách hàng.
              </li>
              <li>
                Sau khi nhận được Tiền Thưởng, khách hàng được phép yêu cầu một
                lệnh rút tiền từ tài khoản của mình nếu hoàn thành 1 lot (giao
                dich) trên mỗi 10 USD Tiền Thưởng rút ra. Chỉ áp dụng cho các
                giao dịch ngoại hối, hàng hóa và chỉ số (quyền chọn nhị phân).
                (Bất kỳ mọi giao dịch cổ phiếu hay chứng khoán sẽ không được bao
                gồm).
              </li>
            </ol>
            <p>
              Số lượng liên quan đến khối lượng giao dịch bao gồm các giao dịch
              đã được hoàn tất của khách hàng có thể được xác minh thông qua mục
              Lịch sử tài khoản (Account History) trong giao diện MT4.
            </p>
            <p>
              Để có thể đặt lệnh yêu cầu rút tiền, khách hàng cần phải giao dịch
              tổng số Tiền Thưởng khách hàng có trong tài khoản.
            </p>
            <p>Công ty ComfyFX vì thế có thể :</p>
            <p>
              11.1. Trước khi hoàn thành yêu cầu rút tiền, công ty có thể đơn
              phương khấu trừ khoản tiền tương đương với khoản Tiền Thưởng khách
              hàng đã nhận được ra khỏi tài khoản của khách hàng. Trong trường
              hợp số tiền còn lại trong tài khoản của khách hàng ít hơn khoản
              Tiền Thưởng, công ty ComfyFX có quyền khấu trừ tất cả khoản tiền
              có trong tài khoản đó của khách hàng.
            </p>
            <ol start="12">
              <li>
                Dưới đây là các ví dụ về việc các lệnh rút tiền sẽ được sử lý
                như thế nào:
              </li>
            </ol>
            <p>Ví dụ A</p>
            <p>Tiền Thưởng= US$ 3000</p>
            <p>Giao dịch= 2 Lots</p>
            <p>Lợi nhuận= US$ 100</p>
            <p>Cán cân tài khoản= US$ 3100</p>
            <p>Lượng tiền có thể rút: US$ 100</p>
            <p>Ví dụ B</p>
            <p>Tiền Thưởng: = US$ 1500 nhận trước và 1500 nhận sau</p>
            <p>Giao dịch= 170 Lots</p>
            <p>Lợi nhuận= US$ 100</p>
            <p>Cán cân tài khoản= US$ 3100</p>
            <p>Lượng tiền có thể rút: US$ 100</p>
            <p>Ví dụ C</p>
            <p>Tiền Thưởng: = US$ 3000</p>
            <p>Giao dịch= 300 Lots</p>
            <p>Lợi nhuận= US$ 0</p>
            <p>Cán cân tài khoản= US$ 3000</p>
            <p>Lượng tiền có thể rút: US$ 3000</p>
            <p>
              13 như dã nêu trên, những hành động như thế sẽ không gây ra bất kỳ
              trách nhiệm pháp lý hay bồi thường pháp lý đối với công ty và cũng
              sẽ không gây ra bất kỳ lý do nào được chấp nhận trong luật pháp
              nhằm mục đích tiến hành các hành động pháp lý chống lại công ty
              ComfyFX.
            </p>
            <ol start="14">
              <li>
                Khách hàng cần phải nhận thức được rằng giao dịch ngoại hối
                (Forex) và giao dịch chênh lệch giá (CFDs) là các sản phẩm đầu
                tư liên quan đến việc vay mượn tiền cái mà có thể mang lại rủi
                ro cao cho khách hàng. Khi tiến hành giao dịch với các sản phẩm
                đầu tư đó, khách hàng phải hiểu rằng khách hàng có thể sẽ bị
                thua lỗ hết các khoản tiền vốn của mình. Các sản phẩm đầu tư tài
                chính này có thể không phù hợp với mọi cá nhân và khách hàng nên
                chắc chắn rằng mình đã hiểu những rủi ro có thể phải gánh chịu.
                Trong trường hợp cần thiết khách hàng có thể xin tư vấn từ các
                tổ chức tư vấn độc lập.
              </li>
              <li>
                Khách hàng chỉ có quyền nhận được Tiền Thưởng một lần (bất chấp
                số lượng tài khoản khách hàng có).
              </li>
              <li>
                Chương trình khuyến khích khách hàng này của công ty, cái mà đã
                được định nghĩa, giải thích chi tiết trong đoạn 4 ở trên, là
                hoàn toàn độc lập và không có ảnh hưởng gì đến bất kỳ các chương
                trình khuyến khích khách hàng nào bởi ComfyFX được thực hiên
                trước đây bởi công ty ComfyFX. Khách hàng nên liên hệ các nhà
                quản lý tài khoản của mình trong trường hợp có bất kỳ những thắc
                mắc hay yêu cầu nào đó liên quan đến chương trình này hoặc các
                chương trình khuyến khích khách hàng trước đây của công ty.
              </li>
              <li></li>
              <li>
                Công ty ComfyFX có quyền thu phí quản lý đối với khách hàng và
                phí được thu có thể ngang bằng với giá trị của Tiền Thưởng với
                mục địch để trang trải cho bất kỳ những chi phí mà ComfyFX phát
                sinh trong quá trình liên hệ khách hàng, xác nhận hay điều tra
                thông tin do khách hàng cung cấp cho công ty ComfyFX.
              </li>
              <li>
                Công ty ComfyFX có thể yêu cầu khách hàng cung cấp đầy đủ hồ sơ
                nếu công ty cho rằng nó là phù hợp và cần thiết cho việc xác
                minh thông tin cá nhân của khách hàng trước khi cấp khoản Tiền
                Thưởng cho họ.
              </li>
              <li>
                Các điều khoản và điều kiện này được trình bày bằng tiếng Anh.
                Bất kỳ việc dịch thuật bằng ngôn ngữ khác chỉ nhằm mục dích giúp
                cho việc hiểu vấn đề được thuận tiện hơn. Trong trường hợp có
                điều gì không chắc chắn hay không nhất quán giữa văn bản gốc
                tiếng Anh và bản dịch của nó bằng bất kỳ ngôn ngữ nào khác, bản
                gốc bằng tiếng Anh sẽ mang tính quyết định và có hiệu lực.
              </li>
            </ol>
            <p><strong>Đưa ra các chỉ thị/Đặt Lệnh</strong></p>
            <p>
              Quý khách có thể đưa ra các chỉ thị ở dạng điện tử cho chúng tôi
              thông qua Hệ thống giao dịch trực tuyến của Công ty Blue Sun Capital Ltd. Trong trường hợp chúng tôi nhận được bất kỳ chỉ thị nào
              qua điện thoại, máy tính hoặc phương tiện khác, chúng tôi có thể
              yêu cầu Quý khách xác nhận lại các chỉ thị này bằng văn bản. Chúng
              tôi sẽ vẫn được phép làm theo các chỉ thị này cho dù Quý khách
              không xác nhận bằng văn bản. Trong Thỏa thuận này, “chỉ thị” và
              “lệnh” sẽ được hiểu với nghĩa tương đương.
            </p>
            <p><strong>Các loại Lệnh được chấp nhận</strong></p>
            <p>
              Công ty Blue Sun Capital Ltd chúng tôi chấp nhận các loại Lệnh bao
              gồm, nhưng không giới hạn như sau:
            </p>
            <p>
              a) Lệnh tồn tại cho đến khi bị hủy (“GTC”) – Đây là một loại Lệnh
              (không phải là Lệnh Thị trường) duy trì hiệu lực cho đến khi Khách
              hàng cho chấp hành hoặc hủy bỏ. Lệnh GTC sẽ không được tự động hủy
              vào cuối Ngày giao dịch mà chúng được đặt.
            </p>
            <p>
              b) Lệnh Giới hạn (Lệnh chờ Limit) – Đây là một loại Lệnh (không
              phải là Lệnh Thị trường) dùng để thực hiện một giao dịch mua hoặc
              bán được chỉ định, tại một mức giá xác định. Tác vụ tiến hành mua
              theo Lệnh Giới hạn thường sẽ được thực hiện khi giá Ask bằng hoặc
              giảm xuống dưới mức giá Bid mà Quý khách đã chỉ định trong Lệnh
              Giới hạn. Tác vụ tiến hành bán theo Lệnh Giới hạn thường sẽ được
              thực hiện khi giá Bid bằng hoặc vượt quá giá Ask mà Quý khách chỉ
              định trong lệnh giới hạn.
            </p>
            <p>
              c) Lệnh Thị trường – Đây là loại Lệnh dùng để thực hiện một giao
              dịch mua hoặc bán được chỉ định, tại mức giá thị trường hiện hành
              do Công ty Blue Sun Capital Ltd cung cấp thông qua Hệ thống giao
              dịch trực tuyến. Một lệnh mua sẽ được thực hiện theo giá Ask hiện
              hành của thị trường và lệnh bán được thực hiện theo giá Bid của
              hiện hành của thị trường.
            </p>
            <p>
              d) Lệnh này hủy lệnh kia (“OCO”) – Đây là loại Lệnh được liên kết
              với các Lệnh khác khác. Nếu một trong các Lệnh được thực thi, lệnh
              còn lại sẽ tự động bị hủy.
            </p>
            <p>
              e) Dừng lỗ – Lệnh Dừng lỗ là một chỉ thị để thực hiện một giao
              dịch mua hoặc bán xác định, ở mức giá thấp hơn giá mở của một vị
              thế (giao dịch) đã được mở (hoặc thấp hơn mức giá hiện hành khi áp
              dụng lệnh dừng lỗ cho vị thế (giao dịch) đã được mở). Lệnh Dừng lỗ
              có thể được sử dụng để giúp Quý khách phòng chống tổn thất. Xin
              Quý khách lưu ý rằng do có chênh lệch thị trường nên mức giá khả
              dụng tốt nhất có thể đạt được trong thực tế sẽ có thể khác biệt
              lớn so với mức giá đã đặt trên Lệnh Dừng lỗ, chính bởi vậy mà
              chúng tôi không đảm bảo việc Lệnh Dừng lỗ sẽ có hiệu lực đúng với
              mức giá mà Quý khách đã đặt.
            </p>
            <p>
              f) Lệnh cắt lỗ dưới – Lệnh cắt lỗ dưới tương tự như Lệnh Dừng lỗ
              với sự khác biệt duy nhất là, thay vì đặt một mức giá kích hoạt
              Lệnh cố định, thì Lệnh cắt lỗ dưới sẽ được kích hoạt với một
              khoảng cách cố định so với giá thị trường. Ví dụ: nếu Khách hàng
              đã mua một vị thế mở trường và giá Ask trên thị trường tăng lên,
              mức Giá cắt lỗ dưới cũng sẽ tăng theo và sẽ duy trì một khoảng
              cách cố định so với mức giá Ask trên thị trường, theo đúng như
              Khách hàng đặt ra. Nếu sau đó mức giá Ask trên thị trường giảm,
              mức Giá cắt lỗ dưới sẽ vẫn cố định ở vị trí cuối cùng (vị trí cao
              nhất) chứ không giảm theo giá Ask. Và nếu như mức giá Ask trên thị
              trường giảm tới mức bằng với giá Giá cắt lỗ dưới thì Lệnh cắt lỗ
              dưới sẽ được thực hiện. Xin Quý khách lưu ý rằng do có chênh lệch
              thị trường nên mức giá khả dụng tốt nhất có thể đạt được trong
              thực tế sẽ có thể khác biệt lớn so với mức giá đã đặt trên Lệnh
              Cắt lỗ dưới, chính bởi vậy mà chúng tôi không đảm bảo việc Lệnh
              Cắt lỗ dưới sẽ có hiệu lực đúng với mức khoảng cách mà Quý khách
              đã đặt. Sau khi gửi Lệnh, Quý khách có trách nhiệm luôn trong
              trạng thái sãn sàng để xác nhận Lệnh và thực thi, cũng như các
              thông tin liên quan khác về Tài khoản của Quý khách cho đến khi
              tất cả các Lệnh mở được hoàn thành. Sau đó, Quý khách phải theo
              dõi Tài khoản của mình thường xuyên khi Quý khách có các vị thế
              (giao dịch) mở trong Tài khoản.<br />
              Lệnh của Quý khách sẽ được thi hành đúng theo loại Lệnh và thời
              gian đã đặt, như đã được chỉ định. Nếu thời gian hiệu lực hoặc
              ngày/thời gian đáo hạn của Lệnh không được chỉ định thì Lệnh này
              sẽ có hiệu lực trong một khoảng thời gian không xác định.
            </p>
            <p>
              g) Khoảng trống giá Gap – là sự chênh lệch giữa các mức giá xảy ra
              khi giá của một tài sản có sự biến động tăng hoặc giảm mạnh mà
              trong đó không có giao dịch nào xảy ra. Chênh lệch Gap có thể được
              tạo ra bởi rất nhiều yếu tố, trong đó bao gồm áp lực mua hoặc bán
              thường xuyên, báo cáo kết quả (lợi nhuận) kinh doanh hoặc bất kỳ
              loại tin tức mới nào khác được công bố. Nếu xuất hiện Gap trên thị
              trường thì tất cả các Lệnh sẽ được khớp trên Cơ sở nỗ lực tốt nhất
              ở mức giá sẵn có đầu tiên chứ không phải theo mức Lệnh).
            </p>
            <p><strong>Loại tiền tệ giao dịch</strong></p>
            <p>
              Trừ khi có quy định khác của Công ty Blue Sun Capital Ltd, tất cả
              các giao dịch sẽ được thực hiện bằng đồng Đô la Mỹ (USD).
            </p>
            <p><strong>Điều khoản Chấp nhận Lệnh</strong></p>
            <p>
              Quý khách có thể đặt Lệnh thông qua Nền tảng giao dịch của Công ty
              Blue Sun Capital Ltd chúng tôi. Sau khi Công ty chúng tôi nhận
              được các Chỉ thị hoặc Lệnh của Quý khách bởi Công ty Blue Sun Capital Ltd thì chúng sẽ không thể thu hồi, trừ trường hợp có sự đồng
              ý bằng văn bản, do một và chỉ một Công ty Blue Sun Capital Ltd đưa
              ra, theo phán đoán của riêng Công ty Blue Sun Capital Ltd. Công ty
              Blue Sun Capital Ltd sẽ không chịu trách nhiệm đối với việc không
              thực hiện được các Lệnh. Công ty Blue Sun Capital Ltd sẽ có quyền,
              nhưng không có nghĩa vụ, từ chối toàn bộ hoặc một phần của Lệnh
              trước khi thực hiện, hoặc hủy bất kỳ Lệnh nào trong trường hợp Tài
              khoản của Quý khách không đủ số dư để thực hiện toàn bộ giá trị
              của Lệnh, hoặc khi Lệnh này là bất hợp pháp hoặc không đúng quy
              cách.
            </p>
            <p>
              Trong một số trường hợp, Công ty Blue Sun Capital Ltd có thể chấp
              nhận các chỉ thị qua điện thoại, được gửi thông qua Phòng Giao
              dịch của Công ty Blue Sun Capital Ltd, với điều kiện Công ty
              Blue Sun Capital Ltd, nắm toàn bộ quyền tự quyết, cảm thấy Công ty
              Blue Sun Capital Ltd đã xác định được danh tính của Quý khách và
              sau đó làm rõ được yêu cầu của các chỉ thị được đưa ra. Trong
              trường hợp Công ty Blue Sun Capital Ltd nhận được Lệnh thông qua
              bất kỳ phương tiện nào khác ngoài Nền tảng giao dịch, Công ty
              Blue Sun Capital Ltd sẽ chuyển Lệnh này đến Nền tảng giao dịch và
              tiến hành xử lý như thể Lệnh này được nhận thông qua Nền tảng giao
              dịch. Lệnh của Quý khách sẽ không bị ảnh hưởng trong quá trình
              chuyển đối này.
            </p>
            <p>
              Công ty Blue Sun Capital Ltd có quyền tiến hành bất cứ phương thức
              nào cần thiết nếu muốn xác nhận lại bất kỳ Chỉ thị và/hoặc Lệnh
              và/hoặc thông tin trao đổi nào đã được gửi qua điện thoại. Quý
              khách chấp nhận rằng luôn tồn tại rủi ro mà các Chỉ thị hoặc Lệnh
              gửi qua điện thoại sẽ bị hiểu sai hoặc xuất hiện sai sót, gây ra
              bởi bất kỳ lý do nào, bao gồm nhưng không<br />
              chỉ giới hạn trong các lỗi kỹ thuật.
            </p>
            <p><strong>Chính sách Thực thi</strong></p>
            <p>
              Chúng tôi được yêu cầu phải xây dựng Chính sách Thực thi và cung
              cấp cho Khách hàng thông tin phù hợp liên quan đến Chính sách Thực
              thi của mình. Công ty Blue Sun Capital Ltd đã tiến hành mọi bước
              đi hợp lý nhằm mang đến cho Khách hàng kết quả tốt nhất có thể.
              Chính sách Thực thi tốt nhất của Công ty Blue Sun Capital Ltd đưa
              ra cái nhìn tổng quan chung về cách thực thi các Lệnh cũng như các
              yếu tố khác có thể ảnh hưởng đến việc thực thi một phương tiện tài
              chính nhất định. Khi Quý khách tiến hành đặt Lệnh, chúng tôi sẽ
              tiến hành suy xét đến các yếu tố thực thi và thứ tự ưu tiên thực
              hiện (tầm quan trọng) của chúng sẽ được xác định như sau:
            </p>
            <p>
              1. Mức giá. Mức độ quan trọng tương đối được chúng tôi đánh giá ở
              mức “cao”.
            </p>
            <p>
              2. Tốc độ. Mức độ quan trọng tương đối được chúng tôi đánh giá ở
              mức “cao”.
            </p>
            <p>
              3. Khả năng thực thi và quyết toán. Mức độ quan trọng tương đối
              được chúng tôi đánh giá ở mức “cao”.
            </p>
            <p>
              4. Kích thước. Mức độ quan trọng tương đối được chúng tôi đánh giá
              ở mức “cao”.
            </p>
            <p>
              Công ty húng tôi có vai trò chủ chốt đối với các Lệnh mà Quý khách
              đặt với chúng tôi, do đó chúng tôi sẽ là địa điểm thực thi lệnh
              duy nhất.
            </p>
            <p><strong>Thẩm quyền</strong></p>
            <p>
              Chúng tôi sẽ có quyền thực thi các hành động cho Quý khách, dựa
              trên các Chỉ thị đã được hoặc có ý định được đưa ra bởi Quý khách,
              mà không cần truy vấn thêm về tính xác thực, thẩm quyền hay danh
              tính của người ra chỉ thị, hoặc mục đích của chỉ thị, nếu như phía
              Công ty chúng tôi nhận được chỉ thị này kèm theo số Tài khoản và
              mật khẩu chính xác của Quý khách. Nếu Tài khoản của Quý khách là
              tài khoản chung, Quý khách đồng ý rằng chúng tôi được phép hành
              động theo chỉ thị của bất kỳ người nào có quyền nắm giữ Tài khoản
              chung mà không cần truy vấn thêm. Chúng tôi không có trách nhiệm
              phải truy vấn thêm về vấn đề thẩm quyền đại diện này và sẽ không
              chịu trách nhiệm về hậu quả của bất kỳ hành động nào, được thực
              hiện hoặc không được thực hiện bởi chúng tôi, dựa trên bất kỳ chỉ
              thị nào hoặc theo thẩm quyền đại diện của bất kỳ cá nhân nào như
              trên.
            </p>
            <p><strong>Hủy/rút lại chỉ thị</strong></p>
            <p>
              Quý khách có thể hủy Lệnh thông qua Hệ thống giao dịch trực tuyến
              của Công ty Blue Sun Capital Ltd, miễn là chúng tôi chưa thực hiện
              Lệnh này tại thời điểm Quý khách gửi yêu cầu hủy. Tuy nhiên chúng
              tôi sẽ chỉ có thể tiến hành hủy chỉ thị của Quý khách nếu nhận
              được yêu cầu rõ ràng từ phía Quý khách. Các chỉ thị đã được thực
              hiện sẽ chỉ có thể được rút lại hoặc sửa đổi bởi Quý khách, sau
              khi có sự đồng ý từ phía chúng tôi. Công ty Blue Sun Capital Ltd
              sẽ không chịu trách nhiệm cho bất kỳ khiếu nại, bồi thường, tổn
              thất, thiệt hại chi phí hoặc phí nào, bao gồm cả chi phí pháp lý,
              phát sinh trực tiếp hoặc gián tiếp do việc hủy lệnh thất bại.
            </p>
            <p><strong>Quyền không chấp nhận Lệnh</strong></p>
            <p>
              Chúng tôi có thể, nhưng sẽ không bắt buộc, chấp nhận Chỉ thị để
              bước vào một Giao dịch. Nếu chúng tôi từ chối tham gia vào Giao
              dịch được đề xuất, chúng tôi sẽ không bắt buộc phải thông báo lý
              do, tuy nhiên Công ty chúng tôi sẽ thông báo kịp thời về việc từ
              chối đến cho Quý khách.
            </p>
            <p><strong>Kiểm soát các Lệnh trước khi thực thi</strong></p>
            <p>
              Chúng tôi có toàn quyền (nhưng không có nghĩa vụ) quyết định về
              việc đặt ra các giới hạn và/hoặc tham số để kiểm soát khả năng đặt
              Lệnh của Quý khách. Các giới hạn và/hoặc tham số như vậy có thể
              được chúng tôi sửa đổi, tăng, giảm, xóa hoặc thêm vào tùy theo
              quyết định của riêng chúng tôi, và có thể bao gồm (nhưng không
              giới hạn) như sau:
            </p>
            <p>
              1. kiểm soát số tiền tối đa Quý khách có thể đặt để mở một vị thế
              (giao dịch) bằng bất kỳ sản phẩm nào của Công ty Blue Sun Capital Ltd;
            </p>
            <p>
              2. kiểm soát các vị thế (giao dịch) tối đa có thể được đặt đối với
              mỗi nhà giao dịch và với mỗi tài sản;
            </p>
            <p>3. kiểm soát tổng rủi ro của chúng tôi với Quý khách;</p>
            <p>
              4. kiểm soát mức giá khi gửi Lệnh (bao gồm, nhưng không giới hạn
              trong, việc kiểm soát các Lệnh ở mức giá chênh lệch lớn so với giá
              thị trường tại thời điểm Lệnh được gửi tới Sổ ghi Lệnh);
            </p>
            <p>
              5. kiểm soát Dịch vụ điện tử (bao gồm, nhưng không giới hạn trong,
              mọi quy trình xác minh để đảm bảo rằng mọi Lệnh cụ thể hoặc
            </p>
            <p>
              6. bất kỳ giới hạn, tham số hoặc kiểm soát nào khác mà chúng tôi
              có thể được yêu cầu thực hiện theo Quy định Áp dụng.
            </p>
            <p>
              Nếu Quý khách vượt qua các giới hạn và/hoặc tham số mà chúng tôi
              đặt ra, giao dịch của Quý khách sẽ bị chặn và/hoặc bị đình chỉ.
            </p>
            <p>
              Các giới hạn giao dịch sẽ được thông báo trước cho Quý khách thông
              qua trang web hoặc nền tảng giao dịch của Công ty Blue Sun Capital Ltd.
            </p>
            <p><strong>Điều chỉnh Giao dịch</strong></p>
            <p>
              Khách hàng phải nhận thức được rằng các giao dịch Forex có mức độ
              rủi ro cao. Số tiền ký quỹ ban đầu có thể nhỏ hơn so với giá trị
              của ngoại tệ để các giao dịch được sử dụng ‘đòn bẩy’. Một chuyển
              động thị trường tương đối nhỏ có thể có tác động tương đối lớn đối
              với các khoản tiền mà Khách hàng đã hoặc sẽ nạp vào để giao dịch.
              Việc này sẽ mang lại cả thời cơ cũng thách thức tới cho Quý khách.
              Công ty Blue Sun Capital Ltd là đơn vị duy nhất có quyền mở rộng
              các mức spread, điều chỉnh đòn bẩy, thay đổi tỷ lệ rollover
              và/hoặc tăng yêu cầu ký quỹ mà không cần thông báo trước, trong
              một số điều kiện thị trường bao gồm, nhưng không giới hạn, như khi
              bàn giao dịch đóng cửa, xung quanh các thông báo quan trọng, do
              kết quả của các thay đổi trong thị trường tín dụng và/hoặc tại
              thời điểm biến động cực đoan của thị trường. Trong những trường
              hợp như vậy, Khách hàng đồng ý bồi thường cho Công ty Blue Sun Capital Ltd cho bất kỳ và tất cả các tổn thất có thể xảy ra do việc mở
              rộng spread và điều chỉnh đòn bẩy.
            </p>
            <p><strong>Thực thi Lệnh</strong></p>
            <p>
              Chúng tôi sẽ nỗ lực hết sức trong khả năng của mình để thực thi
              các Lệnh của Quý khách ngay lập tức. Tuy nhiên, khi chấp nhận Lệnh
              của Quý khách, chúng tôi không tuyên bố hoặc đảm bảo rằng có thể
              thực hiện lệnh, hoặc lệnh này sẽ được thực hiện đúng theo chỉ thị
              của Quý khách. Nếu chúng tôi gặp phải bất kỳ khó khăn nào liên
              quan đến việc thay mặt Quý khách thực hiện chuẩn xác các Lệnh,
              chúng tôi sẽ có thông báo kịp thời tới cho Quý khác.
            </p>
            <p><strong>Xác nhận</strong></p>
            <p>
              Vào cuối mỗi ngày giao dịch, Quý khách có thể xem xác nhận cho tất
              cả các Giao dịch mà chúng tôi đã thực hiện thay mặt Quý khách vào
              ngày giao dịch đó tại Tài khoản trực tuyến của Quý khách trên
              trang web của chúng tôi. Quý khách có trách nhiệm thông báo cho
              Công ty Blue Sun Capital Ltd nếu thấy có bất kỳ xác nhận nào không
              chính xác. Các xác nhận, trong trường hợp không có lỗi rõ ràng, sẽ
              được kết luận và ràng buộc với Quý khách, trừ khi Quý khách phản
              đối bằng văn bản trong vòng 5 ngày làm việc. Quý khách có thể yêu
              cầu nhận sao kê Tài khoản hàng tháng hoặc hàng quý qua email, bằng
              cách gửi yêu cầu cho Công ty Blue Sun Capital Ltd. Công ty Blue Sun Capital Ltd không bắt buộc phải cung cấp cho Quý khách bản sao
              kê Tài khoản bằng giấy. Chi phí xuất sao kê sẽ do Quý khách chi
              trả.
            </p>
            <p><strong>Hủy giao dịch</strong></p>
            <p>
              Chúng tôi có quyền từ chối Lệnh hoặc hủy giao dịch nếu chúng tôi
              có đủ lý do/bằng chứng cho thấy đã xảy ra những điều sau:
            </p>
            <p>
              1. có hành vi gian lận/bất hợp pháp dẫn đến phát sinh giao dịch
              này,
            </p>
            <p>
              2. trong bất kỳ trường hợp nào mà Công ty Blue Sun Capital Ltd có
              lý do để tin rằng các hoạt động giao dịch của một đối tượng nào đó
              có thể là bất hợp pháp;
            </p>
            <p>
              3. trong bất kỳ trường hợp nào mà Công ty Blue Sun Capital Ltd có
              thể phải chịu bất kỳ bất lợi về mặt tài chính, quy định hoặc tiền
              phạt nào do hoạt động của bất kỳ ai gây ra;
            </p>
            <p>
              4. trong bất kỳ trường hợp nào mà một hoặc nhiều giao dịch bị Công
              ty Blue Sun Capital Ltd nhận định là được thực hiện trong khi vi
              phạm Thỏa thuận này.
            </p>
            <p>
              5. các Lệnh được đặt dựa trên mức giá bị thao túng do lỗi hệ thống
              hoặc trục trặc hệ thống,
            </p>
            <p>
              6. giao dịch chênh lệch giá trên các nền tảng của chúng tôi do lỗi
              hệ thống; và
            </p>
            <p>
              7. các giao dịch phối hợp giữa các bên liên quan để trục lợi từ
              các lỗi hệ thống và sự chậm trễ trong việc cập nhật hệ thống.
            </p>
            <p>
              Chúng tôi có quyền hủy bỏ bất kỳ và/hoặc tất cả các vị thế giao
              dịch và giữ lại và/hoặc tịch thu bất kỳ lợi nhuận nào mà Khách
              hàng thu được từ các giao dịch của mình nếu chúng tôi cho rằng
              Khách hàng đã tham gia vào Arbitrage (giao dịch chênh lệch giá)
              thị trường.
            </p>
            <p><strong>Vô hiệu hóa và hủy bỏ tiền nạp</strong></p>
            <p>
              Chúng tôi có quyền không chấp nhận tiền do Quý khách nạp vào
              và/hoặc hủy khoản tiền Quý khách đã nạp trong các trường hợp sau:
            </p>
            <p>
              1. nếu Quý khách không cung cấp cho Công ty bất kỳ chứng từ nào mà
              chúng tôi yêu cầu nhằm mục đích nhận dạng khách hàng hoặc vì bất
              kỳ lý do nào khác;
            </p>
            <p>
              2. nếu Công ty Blue Sun Capital Ltd nghi ngờ hoặc có lo ngại rằng
              các chứng từ được gửi có thể là sai hoặc giả mạo;
            </p>
            <p>
              3. nếu Công ty Blue Sun Capital Ltd nghi ngờ Quý khách có liên
              quan đến hoạt động bất hợp pháp hoặc lừa đảo;
            </p>
            <p>
              4. nếu Công ty Blue Sun Capital Ltd được thông báo rằng thẻ tín
              dụng hoặc thẻ ghi nợ của Quý khách (hoặc bất kỳ phương thức thanh
              toán nào khác được sử dụng) đã bị mất hoặc bị đánh cắp;
            </p>
            <p>
              5. trong trường hợp Công ty Blue Sun Capital Ltd cho rằng có rủi
              ro bồi hoàn; và
            </p>
            <p>
              6. khi Quý khách nạp $3.000 trở lên, hoặc khi Quý khách thực hiện
              nạp hơn 10 khoản tiền vào Tài khoản giao dịch của mình và Công ty
              Blue Sun Capital Ltd không thể xác minh chi tiết thẻ tín dụng hoặc
              thẻ ghi nợ của Quý khách, hoặc không thể xác minh bất kỳ phương
              thức thanh toán nào khác được Quý khách sử dụng.
            </p>
            <p>
              Trong trường hợp muốn hủy khoản tiền đã nạp, với điều kiện khoản
              tiền của Quý khách không bị các cơ quan có thẩm quyền tịch thu với
              lý do nghi ngờ có hành vi rửa tiền hoặc vì bất kỳ hành vi vi phạm
              pháp luật nào khác, khoản tiền của Quý khách sẽ được hoàn lại vào
              tài khoản ngân hàng mà ban đầu đã chuyển tiền cho công ty chúng
              tôi.
            </p>
            <p><strong>Tác nghiệp và quyết toán</strong></p>
            <p>
              Quý khách sẽ nhanh chóng cung cấp bất kỳ chỉ thị, tiền hoặc chứng
              từ nào Quý khách có thể cung cấp được với một Giao dịch, dựa theo
              Giao dịch đó như được sửa đổi bởi bất kỳ chỉ thị nào do chúng tôi
              cung cấp.
            </p>
            <p><strong>Giới hạn vị thế (giao dịch)</strong></p>
            <p>
              Chúng tôi có thể yêu cầu Quý khách giới hạn số lượng vị thế (giao
              dịch) mở mà Quý khách có thể duy trì tại chỗ chúng tôi bất cứ lúc
              nào và chúng tôi có thể tùy ý đóng bất kỳ một hoặc nhiều Giao dịch
              để đảm bảo duy trì mức giới hạn giao dịch này.
            </p>
            <p><strong>Roll Over</strong></p>
            <p>
              Trong một số điều kiện thị trường nhất định, Quý khách có thể được
              phép giao dịch bằng tính năng Roll Over. Tính năng Roll Over cho
              phép Quý khách kéo dài thời gian hết hạn của vị thế giao dịch
              trước khi đến ngày đáo hạn. Tính năng này có thể được sử dụng theo
              các điều kiện sau:
            </p>
            <p>
              1. Một khoản tiền trị giá bằng 30% tiền nạp ban đầu phải được thêm
              tự động vào khoản đầu tư ban đầu của Quý khách.
            </p>
            <p>
              2. Tính năng Roll Over chỉ có thể được sử dụng trong trường hợp
              tiến trình biến động của giá theo sau không theo hướng mà Quý
              khách đã dự đoán.
            </p>
            <p>
              3. Quý khách chỉ có thể sử dụng tính năng Roll Over một lần cho
              mỗi vị thế giao dịch.
            </p>
            <p>
              4. Tính năng Roll Over chỉ khả dụng tối đa 15 phút trước khi đến
              thời gian hết hạn.
            </p>
            <p><strong>Giao dịch không đúng cách hoặc lạm dụng</strong></p>
            <p>
              Mục tiêu của Công ty Blue Sun Capital Ltd là cung cấp thanh khoản
              giao dịch hiệu quả nhất cho Khách hàng với mức giá cập nhật, có
              khả năng giao dịch nhất đối với hầu hết các phương tiện tài chính
              được chúng tôi cung cấp trên nền tảng giao dịch. Do việc mang tới
              thông tin cập nhật về mức giá hiện hành trên thị trường được thực
              hiện mang tính tự động hóa cao, Quý khách thừa nhận và chấp nhận
              rằng đôi lúc có thể xảy ra việc báo giá chưa được chuẩn xác.
            </p>
            <p>
              Nếu Quý khách thực hiện các chiến lược giao dịch với mục tiêu khai
              thác (các) báo giá chưa chính xác này hoặc thực hiện các hành vi
              sai trái (thường được gọi là “sniping), Công ty Blue Sun Capital Ltd sẽ coi đây là hành vi không thể chấp nhận được. Trong
              trường hợp Công ty Blue Sun Capital Ltd, bằng phán xét của riêng
              mình và đi kèm thiện chí, xác định rằng Quý khách hoặc bất kỳ đại
              diện nào thay mặt Quý khách giao dịch đang lợi dụng, trục lợi, cố
              gắng lợi dụng hoặc thu lợi từ các hành vi sai trái đó, hoặc rằng
              Quý khách đang tiến hành giao dịch không phù hợp hoặc lạm dụng
              khác, chẳng hạn như:
            </p>
            <p>
              a) các hành động gian lận/bất hợp pháp dẫn đến phát sinh giao
              dịch;
            </p>
            <p>
              b) các Lệnh được đặt dựa trên giá cả bị thao túng do lỗi hệ thống
              hoặc trục trặc hệ thống;
            </p>
            <p>
              c) giao dịch chênh lệch giá trên các nền tảng của chúng tôi do lỗi
              hệ thống; và/hoặc
            </p>
            <p>
              d) các giao dịch phối hợp giữa các bên liên quan để trục lợi từ
              các lỗi hệ thống và sự chậm trễ trong việc cập nhật hệ thống.
            </p>
            <p>
              Trong các trường hợp này, phía Công ty Blue Sun Capital Ltd sẽ có
              quyền:
            </p>
            <p>1) điều chỉnh mức spread đã thiết lập cho Quý khách; và/hoặc</p>
            <p>
              2) hạn chế quyền truy cập của Quý khách tới các mức giá cập nhật,
              có thể giao dịch ngay lập tức, bao gồm việc Chúng tôi sẽ chỉ cung
              cấp báo giá thủ công cho Quý khách; và/hoặc
            </p>
            <p>
              3) tại bất cứ thời điểm nào trong mối quan hệ giao dịch giữa hai
              bên, nếu như Chúng tôi xác định có sai phạm, Chúng tôi sẽ thu từ
              tài khoản của Quý khách mọi khoản lợi nhuận giao dịch lịch sử do
              Quý khách nhận được thông qua việc lạm dụng thanh khoản; và/hoặc
            </p>
            <p>4) từ chối một Lệnh hoặc hủy giao dịch; và/hoặc</p>
            <p>
              5) ngay lập tức chấm dứt mối quan hệ giao dịch giữa Quý khách và
              Công ty
            </p>
            <p><strong>Giao dịch bị cấm</strong></p>
            <p>
              Mọi nhân viên đã từng hoặc hiện đang làm việc làm việc toàn thời
              gian hoặc bán thời gian cho Công ty Blue Sun Capital Ltd hoặc các
              đơn vị có liên quan, trong suốt thời gian mà nhân viên đó đã hoặc
              đang phục cho Công ty Blue Sun Capital Ltd hoặc các đơn vị liên
              quan và sau khi chấm dứt công tác, đều không được phép trở thành
              khách hàng của bất kỳ thương hiệu nào của Công ty Blue Sun Capital Ltd (trực tiếp hoặc gián tiếp, một mình hoặc với các đối tác,
              công ty liên kết hoặc bất kỳ bên thứ ba nào khác) mà không có sự
              chấp thuận trước bằng văn bản của Công ty Blue Sun Capital Ltd.
            </p>
            <p>
              Trong trường hợp Công ty Blue Sun Capital Ltd nhận thấy rằng các
              nhân viên này đang tiến hành giao dịch với bất cứ thương hiệu nào
              của Công ty Blue Sun Capital Ltd chúng tôi mà không có sự chấp
              thuận trước bằng văn bản của Công ty Blue Sun Capital Ltd và/hoặc
              giao dịch thông qua bên thứ ba, chúng tôi sẽ coi tất cả giao dịch
              này là lạm dụng và/hoặc giao dịch không phù hợp. Khi chuyện này
              xảy ra, chúng tôi sẽ ngay lập tức đóng (các) tài khoản giao dịch
              và toàn bộ vị thế (giao dịch) đang mở của nhân viên đang công tác
              cho công ty và/hoặc nhân viên cũ có hành vi sai phạm. Đồng thời,
              Chúng tôi cũng sẽ tịch thu mọi khoản tiền được giữ trong tài khoản
              của các đối tượng này. Trong thời gian thỏa thuận giữa công ty
              đã/đang liên kết với Công ty Blue Sun Capital Ltd còn hiệu lực và
              sau khi chấm dứt thỏa thuận hợp tác với Công ty Blue Sun Capital Ltd, các đơn vị này không được phép trở thành khách hàng của
              bất kỳ thương hiệu nào của Công ty Blue Sun Capital Ltd (trực tiếp
              hoặc gián tiếp, một mình hoặc với các đối tác, công ty liên kết,
              chi nhánh hoặc bất kỳ bên thứ ba nào khác) mà không có sự chấp
              thuận trước bằng văn bản của Công ty Blue Sun Capital Ltd. Nếu
              Công ty Blue Sun Capital Ltd nhận thấy rằng công ty đã/đang liên
              kết với Chúng tôi hiện đang giao dịch với bất kỳ thương hiệu nào
              của Công ty Blue Sun Capital Ltd mà không có sự chấp thuận trước
              bằng văn bản của Công ty Blue Sun Capital Ltd và/hoặc giao dịch
              thông qua bên thứ ba, chúng tôi sẽ coi tất cả giao dịch này là lạm
              dụng và/hoặc giao dịch không phù hợp. Khi chuyện này xảy ra, chúng
              tôi sẽ ngay lập tức đóng (các) tài khoản giao dịch và toàn bộ vị
              thế (giao dịch) đang mở của đơn vị đã/đang với công ty chúng tôi
              có hành vi sai phạm. Đồng thời, Chúng tôi cũng sẽ tịch thu mọi
              khoản tiền được giữ trong tài khoản của các đơn vị này.
            </p>
            <p>
              <strong
                >Chức năng Trailing Stop (Dừng cắt lỗ dưới) trong trường hợp
                Terminal MT4 bị đóng</strong
              >
            </p>
            <p>
              Chức năng Trailing Stop (Dừng cắt lỗ dưới) sẽ không hoạt động
              trong trường hợp Terminal MetaTrader 4 trên máy khách bị đóng.
              Việc này xảy ra là do chức năng Trailing Stop hoạt động trên phần
              Terminal, và nếu Terminal của khách hàng bị đóng lại thì sẽ đặt
              được điểm cắt lỗ bằng Trailing Stop trước khi quá trình đóng
              Terminal được kích hoạt.
            </p>
            <p><strong>Rút tiền</strong></p>
            <p>
              Với điều kiện không làm ảnh hưởng và tuân theo các điều khoản của
              Thỏa thuận này, cùng tất cả các Quy định Áp dụng và các điều kiện
              kèm theo đối với các khoản thanh toán cho Quý khách theo chương
              trình thưởng bonus hoặc giảm giá do chúng tôi tiến hành, Quý khách
              có thể rút tiền từ Tài khoản của mình với điều kiện là số tiền đó
              không được sử dụng cho các mục đích ký quỹ hoặc trở thành nợ đối
              với chúng tôi. Khi yêu cầu rút tiền được chấp thuận, yêu cầu rút
              tiền của Quý khách sẽ được chúng tôi xử lý và gửi đến cùng một
              ngân hàng, thẻ tín dụng hoặc nguồn khác để thực hiện tác vụ càng
              sớm càng tốt. (Lưu ý: Một số ngân hàng và công ty thẻ tín dụng có
              thể mất thời gian để xử lý thanh toán, đặc biệt về các loại tiền
              tệ khi có sự tham gia của ngân hàng đại lý trong giao dịch). Chúng
              tôi trả chuyển số tiền này vào tài khoản ngân hàng/ thẻ tín
              dụng/nguồn khác cho Quý Khách. Quý khách hoàn toàn chịu trách
              nhiệm về các thông tin thanh toán mà Quý khách đã cung cấp cho
              Công ty Blue Sun Capital Ltd và Công ty Blue Sun Capital Ltd không
              chịu trách nhiệm nếu Quý khách cung cấp thông tin ngân hàng sai
              hoặc không chính xác. Ngoài ra thì Quý khách có thể phải chịu mức
              phí rút tiền của bên thứ ba và mức phí này sẽ có thể thay đổi theo
              các điều khoản và điều kiện của bên thứ ba. Các khoản phí này có
              thể được xác minh theo yêu cầu của Quý khách.
            </p>
            <p>
              Nếu Quý khách yêu cầu rút tiền từ Tài khoản của mình và chúng tôi
              không thể tuân thủ nếu như không đóng một vài giao dịch hiện tại
              của Quý khách thì chúng tôi sẽ không tuân thủ yêu cầu rút tiền này
              cho đến khi Quý khách thực hiện đóng hết các giao dịch cần thiết
              để có thể tiến hành rút tiền. Để chúng tôi có thể xử lý yêu cầu
              rút tiền của Quý khách, vui lòng đảm bảo rằng số tiền còn lại
              trong tài khoản của Quý khách sau khi rút tiền tuân thủ chính sách
              rút tiền thưởng bonus của Công ty chúng tôi, được nêu chi tiết
              trong phần 9 ở trên. Nếu Quý khách chưa đáp ứng các yêu cầu giao
              dịch bonus cần thiết tại thời điểm Quý khách thực hiện yêu cầu rút
              tiền, bonus sẽ được ghi nợ từ tài khoản giao dịch của Quý khách.
              Việc rút tiền sẽ chỉ được thực hiện theo yêu cầu của Quý khách,
              bằng cách chuyển khoản vào tài khoản dưới tên của Quý khách hoặc
              phương thức khác mà chúng tôi, theo phán xét của riêng công ty, có
              thể xác định.
            </p>
            <p>
              Công ty Blue Sun Capital Ltd có quyền từ chối yêu cầu rút tiền nếu
              yêu cầu này không phù hợp với một số điều kiện nhất định được đề
              cập trong Thỏa thuận này, hoặc trì hoãn việc xử lý yêu cầu nếu Quý
              khách không cung cấp đủ chứng từ cần thiết.
            </p>
            <p>
              Công ty Blue Sun Capital Ltd sẽ cố gắng xử lý kịp thời các yêu cầu
              rút tiền của Quý khách, tuy nhiên thời gian cần thiết để xử lí
              khoản tiền mà Quý khách muốn rút và chuyển thành công vào trong
              tài khoản của Quý khách sẽ còn phụ thuộc vào phương thức được sử
              dụng khi nạp tiền.
            </p>
            <p>
              Vui lòng xem các khung thời gian đích bên dưới để biết thời gian
              xử lí đối với các phương thức rút tiền khác nhau:
            </p>
            <p>Nếu đã nạp tiền bằng cách sử dụng:</p>
            <p>· chuyển khoản, tối đa 5 ngày làm việc</p>
            <p>
              · một phương thức thanh toán trực tuyến, tối đa 5 ngày làm việc
            </p>
            <p>· thẻ tín dụng/thẻ ghi nợ, tối đa 10 ngày làm việc</p>
            <p>· Chi trả liên quan đến chứng khoán trên CFDs</p>
            <p>
              Thanh toán trên Chia tách cổ phiếu, Gộp cổ phiếu, Cổ tức cổ phiếu
              và các sự kiện liên quan đến chứng khoán khác có thể tác động đến
              giá cổ phiếu và do đó làm biến động giá của tài sản dựa trên CFD.
              Đối tượng nắm giữ trạng thái CFD không có quyền sở hữu phương tiện
              cơ sở. Tuy nhiên, khi khách hàng giữ trạng thái CFD trường, Công
              ty Blue Sun Capital Ltd sẽ trả cổ tức tương đương cho khách hàng
              đó và khấu trừ số tiền tương đương từ các khách hàng giữ trạng
              thái CFD đoản. Quy trình này sẽ được thực hiện đúng vào hoặc ngay
              sau ngày chia cổ tức vì đó là khi hiệu quả kinh tế sẽ hiện hữu
              trên giá cổ phiếu cơ sở.
            </p>
            <p><strong>Lưu trữ tài khoản giao dịch MT4</strong></p>
            <p>
              Nếu trong thời gian liên tục ba (3) tháng chúng tôi không ghi nhận
              được bất kỳ hoạt động nào trong Tài khoản giao dịch MT4 của Quý
              khách và số dư tài khoản của Quý khách bằng 0, Tài khoản giao dịch
              MT4 của Quý khách và tất cả lịch sử Tài khoản sẽ được lưu trữ trên
              máy chủ giao dịch của chúng tôi.
            </p>
            <p>
              Nếu Quý khách muốn tiếp tục sử dụng Tài khoản giao dịch MT4 của
              mình hoặc khôi phục Tài khoản trong tương lai, vui lòng liên hệ
              với chúng tôi tại
            </p>
            <p>
              <strong>Tài khoản không hoạt động và Tài khoản ngủ đông</strong>
            </p>
            <p>
              Khách hàng thừa nhận và xác nhận rằng với (các) tài khoản giao
              dịch được giữ bởi Công ty Blue Sun Capital Ltd do Khách hàng của
              Công ty Blue Sun Capital Ltd mở tại Công ty chúng tôi mà Khách
              hàng không:
            </p>
            <p>1. đặt một giao dịch;</p>
            <p>2. mở hoặc đóng vị thế (giao dịch); và/hoặc</p>
            <p>3. nạp tiền vào tài khoản giao dịch của Khách hàng;</p>
            <ul>
              <li>
                sẽ được Công ty Blue Sun Capital Ltd phân loại là Tài khoản
                không hoạt động (Active Account).
              </li>
              <li>
                Thêm vào đó, Quý khách thừa nhận và xác nhận rằng các Tài khoản
                không hoạt động đó sẽ phải chịu khoản phí hàng tháng là $10
                (hoặc một khoản tương đương khi quy đổi ra loại tiền tệ khác).
                Khoản phí này sẽ được dùng để phục vụ công tác duy trì/quản lý
                các Tài khoản không hoạt động này. Quý khách cũng đồng ý rằng
                mọi Tài khoản không hoạt động, giữ số dư/tài sản bằng 0, sẽ được
                chuyển thành Tài khoản ngủ đông (Dormant Account).
              </li>
            </ul>
            <p><strong>Để kích hoạt lại Tài khoản ngủ đông</strong></p>
            <p>
              Quý khách phải liên hệ với Bộ phận Chăm sóc Khách hàng của Công ty
              Blue Sun Capital Ltd và thông báo cho nhân viên của chúng tôi về
              mong muốn kích hoạt lại Tài khoản của mình. Sau đó, Tài khoản ngủ
              đông của Khách hàng sẽ được kích hoạt lại (với điều kiện Quý khách
              đã cung cấp cho Công ty Blue Sun Capital Ltd đủ các giấy tờ chứng
              minh thân phận cần thiết, nếu có) và trở thành Tài khoản Hoạt
              động.
            </p>
          </div>
          <!-- 10 -->
          <div>
            <p>
              <span id="electronic-trading"
                ><strong>10. ĐIỀU KHOẢN GIAO DỊCH ĐIỆN TỬ</strong></span
              >
            </p>
            <p><strong>Phạm vi</strong></p>
            <p>
              Các điều khoản này áp dụng khi Quý khách sử dụng bất kỳ Dịch vụ
              điện tử nào.
            </p>
            <p><strong>Giờ Truy cập và giao dịch</strong></p>
            <p>
              Sau khi Quý khách đã trải qua các quy trình bảo mật liên quan đến
              Dịch vụ điện tử do chúng tôi cung cấp, Quý khách sẽ có quyền truy
              cập vào trang web và/hoặc nền tảng giao dịch của Công ty Blue Sun Capital Ltd, trừ khi có thỏa thuận khác hoặc được nêu trên trang
              web của chúng tôi để tiến hành đặt Lệnh cho các Phương tiện tài
              chính của công ty Blue Sun Capital Ltd chúng tôi cung cấp và tham
              gia giao dịch với Công ty Blue Sun Capital Ltd. Ngoài ra, Quý
              khách sẽ có thể sử dụng máy tính cá nhân, điện thoại thông minh
              hoặc bất kỳ thiết bị tương tự nào khác được kết nối với internet
              để giao dịch trên Nền tảng giao dịch của Công ty Blue Sun Capital Ltd, cùng với và thông qua Công ty Blue Sun Capital Ltd. Liên
              quan đến vấn đề này, xin Quý khách hiểu rằng Công ty Blue Sun Capital Ltd có thể dựa theo phán xét của riêng mình để đưa ra quyết
              định chấm dứt quyền truy cập của Quý khách vào các hệ thống của
              Công ty Blue Sun Capital Ltd để bảo vệ cả Công ty và lợi ích của
              Quý khách và đảm bảo tính hiệu lực và hiệu quả của hệ thống.
            </p>
            <p>
              Mọi tham chiếu đến giờ giao dịch của Công ty Blue Sun Capital Ltd
              đều theo Giờ chuẩn Greenwich (Giờ GMT) theo định dạng 24 giờ. Dịch
              vụ điện tử của chúng tôi thường sẽ hoạt động liên tục từ 21:00 GMT
              Chủ nhật đến 21:00 GMT Thứ Sáu (giờ mùa đông) hàng tuần, trừ các
              ngày lễ mà thị trường Forex không hoạt động và trừ các trường hợp
              thị trường đóng cửa do các phương tiện tài chính kém thanh khoản.
              Vui lòng tham khảo trang web của chúng tôi để biết thêm chi tiết
              về thời gian hoạt động đối với từng phương tiện tài chính. Chúng
              tôi có quyền tự đưa ra quyết định đình chỉ hoặc sửa đổi khung giờ
              hoạt động của mình, và nếu trường hợp đó xảy ra thì trang web của
              chúng tôi sẽ được cập nhật không chậm trễ để thông báo các thay
              đổi cho Quý khách. Liên quan đến vấn đề khung giờ mở cửa, như được
              xác định trên các trang web được điều hành bởi công ty chúng tôi,
              và các quyền giao dịch của Quý khách sẽ được áp dụng dựa theo
              thông tin này. Chúng tôi có thể thay đổi các quy trình bảo mật của
              mình bất cứ lúc nào và chúng tôi sẽ thông báo cho Quý khách về bất
              kỳ quy trình mới nào áp dụng cho Quý khách sớm nhất có thể.
            </p>
            <p>
              <strong
                >Nhập Lệnh điện tử cho các Lệnh Thị trường bằng với thực thi
                Lệnh</strong
              >
            </p>
            <p>
              Nếu muốn nhập Lệnh giao dịch Forex online, Quý khách cần phải truy
              cập vào cửa sổ Thị trường, sau đó nhấp vào phần “MUA/BÁN” đối với
              thị trường mình muốn giao dịch. Một cửa sổ mới sẽ xuất hiện, tại
              đây Quý khách cần nhập mức giá và kích cỡ lô giao dịch. Lệnh sẽ
              được khớp ngay sau khi Quý khách nhấn nút OK ,với điều kiện Quý
              khách có đủ tiền trong Tài khoản của mình. Việc đặt lệnh có thể
              thất bại do một số nguyên nhân sau thay đổi giá dealer, khoản ký
              quỹ không đủ, chưa xác định khối lượng lô giao dịch hoặc do gặp
              phải các khó khăn kỹ thuật không lường trước được.
            </p>
            <p><strong>Hạn chế đối với các dịch vụ được cung cấp</strong></p>
            <p>
              Sẽ có các hạn chế về số lượng Giao dịch mà Quý khách có thể tham
              gia vào mỗi ngày và cả về tổng giá trị của các Giao dịch đó khi sử
              dụng Dịch vụ điện tử. Vui lòng tham khảo trang web của chúng tôi
              để biết thêm thông tin chi tiết về các giới hạn áp dụng cho Giao
              dịch được thực hiện thông qua Dịch vụ điện tử của chúng tôi.
            </p>
            <p><strong>Yêu cầu truy cập</strong></p>
            <p>
              Quý khách sẽ chịu trách nhiệm cung cấp Hệ thống giúp cho phép Quý
              khách sử dụng Dịch vụ điện tử.
            </p>
            <p><strong>Phát hiện virus</strong></p>
            <p>
              Tùy vào từng thời điểm, Quý khách sẽ chịu trách nhiệm cài đặt và
              sử dụng đúng các chương trình phát hiện/quét vi-rút do chúng tôi
              yêu cầu.
            </p>
            <p><strong>Sử dụng thông tin, dữ liệu và phần mềm</strong></p>
            <p>
              Trong trường hợp Quý khách nhận được bất kỳ dữ liệu, thông tin
              hoặc phần mềm nào khác thông qua Dịch vụ điện tử ngoài các dữ liệu
              mà Quý khách có quyền được tiếp cận theo Thỏa thuận này, Quý khách
              sẽ cần thông báo ngay cho chúng tôi và sẽ không sử dụng các dữ
              liệu, thông tin hoặc phần mềm đó theo bất kỳ cách nào.
            </p>
            <p><strong>Tiêu chuẩn duy trì</strong></p>
            <p>Khi sử dụng Dịch vụ điện tử, Quý khách phải:</p>
            <p>
              1. đảm bảo rằng Hệ thống được duy trì ổn định và phù hợp để sử
              dụng với Dịch vụ điện tử đó;
            </p>
            <p>
              2. tùy vào từng thời điểm, tiến hành chạy các thử nghiệm và cung
              cấp thông tin liên quan cho chúng tôi để chúng tôi tiến hành xem
              xét để thiết lập Hệ thống đáp ứng các yêu cầu được chúng tôi thông
              báo cho Quý khách;
            </p>
            <p>3. thực hiện quét virus một cách thường xuyên;</p>
            <p>
              4. thông báo cho chúng tôi ngay lập tức nếu phát hiện có bất cứ
              hành vi truy cập trái phép nào vào Dịch vụ điện tử hoặc biết được
              hay nghi ngờ rằng có các Giao dịch/Chỉ thị trái phép diễn ra và
              nếu có thể, Quý khách sẽ việc sử dụng trái phép này chấm dứt; và
            </p>
            <p>
              5. tuyệt đối không rời bỏ thiết bị mà Quý khách đã dùng để truy
              cập Dịch vụ điện tử của chúng tôi hoặc cho phép bất kỳ ai khác sử
              dụng thiết bị cho đến khi Quý khách đăng xuất khỏi Dịch vụ điện
              tử.
            </p>
            <p><strong>Lỗi hệ thống</strong></p>
            <p>
              Trong trường hợp Quý khách phát hiện có lỗi, trục trặc hoặc vi rút
              trong Hệ thống hoặc trong Dịch vụ điện tử, Quý khách sẽ thông báo
              ngay cho chúng tôi về lỗi, trục trặc hoặc vi rút đó và ngừng sử
              dụng Dịch vụ điện tử cho đến khi Quý khách nhận được sự cho phép
              tiếp tục sử dụng từ phía chúng tôi.
            </p>
            <p><strong>Sở hữu trí tuệ</strong></p>
            <p>
              Tất cả các quyền về bằng sáng chế, bản quyền, quyền thiết kế, nhãn
              hiệu thương mại và mọi quyền sở hữu trí tuệ khác (dù đã đăng ký
              hoặc chưa đăng ký) liên quan đến Dịch vụ điện tử sẽ luôn nằm trong
              tay chúng tôi hoặc người cấp phép của chúng tôi. Quý khách không
              được sao chép, can thiệp, giả mạo, thay đổi, sửa đổi hoặc điều
              chỉnh Dịch vụ điện tử hoặc bất kỳ phần hoặc bộ phận nào của chúng,
              trừ khi đã được chúng tôi cho phép bằng văn bản. Quý khách không
              được phép dịch ngược hoặc tháo rời Dịch vụ điện tử, cũng như không
              được phép có ý định thực hiện hoặc cho phép các hành vi tương tự
              được thực hiện, trừ trường hợp các hành vi đó được pháp luật cho
              phép rõ ràng. Bất kỳ bản sao nào của Dịch vụ điện tử được thực
              hiện theo luật đều phải tuân theo các điều khoản và điều kiện của
              Thỏa thuận này. Quý khách phải đảm bảo rằng trên các bản sao này
              phải có đủ các thông tin về quyền hạn, bản quyền và thương hiệu
              của chúng tôi. Đồng thời, Quý khách cần phải duy trì một bản ghi
              cập nhật về số lượng bản sao của Dịch vụ điện tử do Quý khách tạo
              ra. Nếu chúng tôi yêu cầu, Quý khách sẽ cung cấp cho chúng tôi một
              cách nhanh nhất có thể bản thống kê về số lượng và nơi các bản sao
              của Dịch vụ điện tử này đang có mặt.
            </p>
            <p><strong>Trách nhiệm pháp lý và bồi thường</strong></p>
            <p>
              Với điều kiện không gây ảnh hưởng đến bất kỳ điều khoản nào khác
              của Thỏa thuận này, có liên quan đến giới hạn trách nhiệm và quy
              định bồi thường, các điều khoản sau sẽ được áp dụng cho Dịch vụ
              điện tử của chúng tôi.
            </p>
            <p><strong>1. Lỗi hệ thống</strong></p>
            <p>
              Chúng tôi sẽ không chịu trách nhiệm với Quý khách về các thiệt hại
              mà Quý khách có thể phải chịu do lỗi truyền dẫn, lỗi kỹ thuật,
              trục trặc, can thiệp bất hợp pháp vào thiết bị mạng, quá tải mạng,
              chặn truy cập độc hại của bên thứ ba, trục trặc internet, gián
              đoạn hoặc các lỗi khác do nhà cung cấp dịch vụ internet gây ra.
              Quý khách thừa nhận rằng các lỗi hệ thống trên có thể khiến quyền
              truy cập vào Dịch vụ điện tử bị hạn chế hoặc không khả dụng đó và
              chúng tôi bảo lưu quyền khi đình chỉ quyền truy cập Dịch vụ điện
              tử vì các lý do nêu tren khi có thông báo.
            </p>
            <p><strong>2. Sự chậm trễ</strong></p>
            <p>
              Cả chúng tôi và bất kỳ nhà cung cấp phần mềm bên thứ ba nào cũng
              không chấp nhận bất kỳ trách nhiệm pháp lý nào đối với các sự chậm
              trễ, không chính xác, lỗi hoặc thiếu sót trong bất kỳ dữ liệu nào
              được cung cấp cho Quý khách có liên quan đến Dịch vụ điện tử.
            </p>
            <p>
              Chúng tôi không chấp nhận bất kỳ trách nhiệm pháp lý nào về sự
              chậm trễ, không chính xác hoặc sai sót về mức giá báo cho Quý
              khách nếu sự chậm trễ, không chính xác hoặc lỗi này là do phía
              cung cấp dịch vụ bên thứ ba cộng tác với chúng tôi gây ra.
            </p>
            <p>
              Chúng tôi sẽ không có nghĩa vụ thực hiện bất kỳ chỉ thị nào được
              xác định là đưa ra dựa trên các lỗi gây do hệ thống chậm trễ trong
              việc cập nhật giá do hệ thống cung cấp giá hoặc bên cung cấp dịch
              vụ bên thứ ba gây ra. Chúng tôi không chấp nhận bất kỳ trách nhiệm
              pháp lý nào đối với các giao dịch được thực hiện dựa trên cơ sở và
              là kết quả của sự chậm trễ như mô tả ở trên.
            </p>
            <p><strong>3. Virus từ Dịch vụ điện tử</strong></p>
            <p>
              Chúng tôi sẽ không chịu trách nhiệm với Quý khách (dù là trong hợp
              đồng, do làm sai, hoặc do bất cẩn) trong trường hợp nếu có vi-rút,
              sâu, bom phần mềm hoặc thứ tương tự nào được đưa vào Hệ thống
              thông qua Dịch vụ điện tử hoặc bất kỳ phần mềm nào do chúng tôi
              cung cấp cho Quý khách để Quý khách sử dụng Dịch vụ điện tử, miễn
              là chúng tôi đã thực hiện các bước hợp lý để ngăn chặn các sự việc
              kể trên.
            </p>
            <p><strong>4. Virus từ hệ thống của Quý khách</strong></p>
            <p>
              Quý khách sẽ đảm bảo rằng không có vi-rút máy tính, sâu, bom phần
              mềm hoặc các thứ tương tự được đưa vào hệ thống máy tính hoặc mạng
              của chúng tôi. Và Quý khách sẽ bồi thường cho chúng tôi theo yêu
              cầu nếu chúng tôi phải chịu tổn thất do các nguyên nhân trên.
            </p>
            <p><strong>5. Sử dụng trái phép</strong></p>
            <p>
              Chúng tôi sẽ không chịu trách nhiệm cho bất kỳ tổn thất, trách
              nhiệm pháp lý hoặc chi phí nào phát sinh từ việc sử dụng trái phép
              Dịch vụ điện tử của chúng tôi. Quý khách sẽ yêu cầu bồi thường,
              bảo vệ và giữ cho chúng tôi không bị tổn hại và chống lại mọi tổn
              thất, trách nhiệm pháp lý, bản án, vụ kiện, hành động, tố tụng,
              khiếu nại bồi thường, thiệt hại và chi phí phát sinh từ hoặc do
              các hành động hoặc thiếu sót của bất kỳ ai sử dụng Dịch vụ điện tử
              bằng mật khẩu đã xác lập của Quý khách, cho dù Quý khách có cho
              phép người này sử dụng hay không.
            </p>
            <p><strong>6. Thị trường</strong></p>
            <p>
              Chúng tôi sẽ không chịu trách nhiệm cho bất kỳ hành động nào được
              thực hiện bởi hoặc theo chỉ thị của một sàn giao dịch, đơn vị
              thanh toán bù trừ hoặc cơ quan quản lý.
            </p>
            <p>
              <strong>7. Đình chỉ hoặc rút lại vĩnh viễn có thông báo</strong>
            </p>
            <p>
              Chúng tôi có thể tạm dừng hoặc rút lại vĩnh viễn Dịch vụ điện tử
              bằng cách thông báo bằng văn bản cho Quý khách 24 giờ trước đó.
            </p>
            <p>
              <strong>8. Đình chỉ ngay lập tức hoặc rút lại vĩnh viễn</strong>
            </p>
            <p>
              Chúng tôi có quyền, đơn phương và có hiệu lực ngay lập tức, đình
              chỉ hoặc rút lại vĩnh viễn quyền sử dụng bất kỳ Dịch vụ điện tử
              hoặc bất kỳ phần nào trong đó của Quý Khách mà không cần thông báo
              nếu chúng tôi cho rằng việc này là cần thiết hoặc nên được thực
              hiện. Ví dụ: do Quý khách không tuân thủ Quy định áp dụng, vi phạm
              bất cứ điều khoản nào của Thỏa thuận này, khi xảy ra Sự kiện vi
              phạm, sự cố mạng, lỗi cấp điện, nhằm mục đích bảo trì hoặc để bảo
              vệ Quý khách khi có vi phạm an ninh xảy ra. Ngoài ra, việc sử dụng
              Dịch vụ điện tử có thể bị tự động chấm dứt, khi đến hạn chấm dứt
              (vì bất kỳ lý do gì) của:
            </p>
            <p>
              1. bất kỳ giấy phép nào được cấp cho chúng tôi liên quan đến Dịch
              vụ điện tử; hoặc là
            </p>
            <p>2. thỏa thuận này.</p>
            <p>3. Ảnh hưởng của việc chấm dứt</p>
            <p>
              Trong trường hợp việc sử dụng Dịch vụ điện tử bị chấm dứt vì bất
              kỳ lý do gì theo quyết định của chúng tôi, Quý khách sẽ trả lại
              cho chúng tôi hoặc hủy tất cả phần cứng, phần mềm và tài liệu cùng
              tất cả bản sao mà chúng tôi đã cung cấp cho Quý khách liên quan
              đến Dịch vụ điện tử này.
            </p>
          </div>
          <!-- 11 -->
          <div>
            <p>
              <span id="no-trading"
                ><strong
                  >11. GIAI ĐOẠN “KHÔNG GIAO DỊCH”/ ĐIỀU KHOẢN CHUNG VỀ “MỘT
                  CHẠM”</strong
                ></span
              >
            </p>
            <p><strong>Giai đoạn không có giao dịch</strong></p>
            <p>
              Mỗi tài sản có thời gian giao dịch riêng, Quý khách có thể xem
              thông tin chi tiết trong bảng chỉ số tài sản của chúng tôi. Trên
              trang của nhà giao dịch, Quý khách sẽ có thể quan sát thấy thời
              gian “trước khi đến hạn” và “thời gian còn lại để giao dịch”.
            </p>
            <p>
              Nhìn chung thì “thời gian không giao dịch” có thể kéo dài từ 2
              phút đến 30 phút trước khi đến thời gian hết hạn. Tùy vào từng
              loại tài sản, điều kiện thị trường và thời gian hết hạn của từng
              tài sản mà thời gian không giao dịch sẽ khác nhau. Khoảng thời
              gian này cũng sẽ biến đổi khi một trong các điều kiện cơ sở tài
              sản cơ bản có thay đổi.
            </p>
            <p>
              Ít nhất 5 phút trước “thời gian không giao dịch”, sẽ có một thông
              báo với đồng hồ đếm ngược xuất hiện trên màn hình của nhà giao
              dịch, đồng hồ này sẽ đếm ngược thời gian còn lại đến lúc “thời
              gian không giao dịch”.
            </p>
            <p><strong>Phạm vi</strong></p>
            <p>
              Các điều khoản này áp dụng khi Quý khách sử dụng Dịch vụ “Một
              chạm” của chúng tôi.
            </p>
            <p>
              <strong
                >Kết quả của quyền chọn “In-The-Money” và
                “Out-Of-The-Money”</strong
              >
            </p>
            <p>
              Nếu tài sản đạt đến tỷ lệ được xác định trước vào đúng 17:00 GMT
              cùng ngày, Khách hàng sẽ có đủ điều kiện để nhận khoản thanh toán
              lên tới 500% tại thời điểm hết hạn. Tuy nhiên, nếu như vào bất kỳ
              ngày nào mà khoản đầu tư rơi vào tình trạng “Out-Of-The-Money”,
              giao dịch sẽ duy trì mở liên tục và được kiểm tra mỗi ngày để xem
              liệc mức giá đã đạt đến tỷ lệ “In-The-Money” được xác định trước
              hay không. Giao dịch vẫn được mở cho đến thứ Sáu, tại thời điểm
              này giao dịch sẽ hết hạn.
            </p>
            <p><strong>Mua, chi trả và hoàn tiền</strong></p>
            <p>
              Khách hàng có thể mua các quyền chọn One Touch bất cứ khi nào thị
              trường cho tài sản đó đã đóng. Xin lưu ý rằng để khách hàng nhận
              được mức chi trả Payout, giá mẫu của tài sản cơ sở cần phải đạt
              hoặc vượt qua tỷ lệ mục tiêu đã đặt trước một lần duy nhất trong
              suốt thời gian hiệu lực của quyền chọn. Trong trường hợp giá của
              tài sản cơ sở không đạt đến mức quy định trước, Khách hàng sẽ
              không nhận được bất kỳ khoản hoàn trả nào và sẽ bị mất toàn bộ số
              tiền đầu tư. Do đó, số tiền lãi hoặc rủi ro đối với quyền chọn này
              đã được đặt và biết trước.
            </p>
            <p>
              Quý khách chỉ có thể mua quyền chọn này theo đơn vị, với mức giá
              được chỉ định trên trang web. Các quyền chọn sẽ được lấy mẫu (được
              kiểm tra để xác minh xem liệu chúng có đạt tỷ lệ mục tiêu hay
              không) mỗi ngày một lần vào lúc 17:00 GMT, từ thứ Hai đến thứ Sáu.
              Mỗi khi tỷ lệ mẫu không được công bố năm lần trong tuần, số lượng
              mẫu cũng sẽ giảm theo.
            </p>
            <p>
              Khoản chi trả Payout đã xác định trước sẽ được chuyển đến tài
              khoản của Quý khách vào ngày hết hạn quyền chọn, ngay cả khi các
              điều khoản của quyền chọn đã được đáp ứng trước ngày hết hạn này.
            </p>
            <p><strong>Kiểm soát các Lệnh trước khi thực hiện</strong></p>
            <p>
              Trong trường hợp xảy ra sự cố kỹ thuật đối với nền tảng giao dịch
              hoặc giá cả của các phương tiện tài chính được cung cấp trên thị
              trường có sự biến động đột biến hoặc bất thường, chúng tôi bảo lưu
              quyền sau, thực hiện theo quyết định của riêng Công ty:
            </p>
            <p>1. không thi hành Lệnh;</p>
            <p>2. thay đổi giá niêm yết của (các) quyền chọn;</p>
            <p>3. thay đổi tỷ lệ hoàn trả offer của (các) quyền chọn;</p>
            <p>
              4. đặt giới hạn về số tiền đầu tư với từng quyền chọn hoặc đặt
              giới hạn về số lượng đơn vị có thể mua được;
            </p>
            <p>
              5. chấm dứt việc bán các quyền chọn hoặc offer cho Quý khách một
              báo giá mới.
            </p>
            <p>
              Trong trường hợp chúng tôi cung cấp cho Quý khách một báo giá mới,
              Quý khách có quyền chấp nhận hoặc từ chối và hủy bỏ việc thực hiện
              Giao dịch.
            </p>
            <p>
              Trong mọi trường hợp, chúng tôi không chấp nhận bất kỳ trách nhiệm
              pháp lý gây ra do mọi chậm trễ hoặc thay đổi trong điều kiện thị
              trường trước khi một Giao dịch cụ thể nào bị ảnh hưởng.
            </p>
            <p><strong>Hủy bỏ giao dịch</strong></p>
            <p>
              Sau khi đã mua quyền chọn thì Quý khách không thể hủy bỏ giao dịch
              tại bất kỳ thời điểm nào trước khi quyền chọn đến hạn.
            </p>
          </div>
          <!-- 12 -->
          <div>
            <p>
              <span id="margining-arrangements"
                ><strong>12. QUẢN LÝ KÝ QUỸ</strong></span
              >
            </p>
            <p><strong>Trách nhiệm pháp lý</strong></p>
            <p>
              Khi chúng tôi thực hiện hoặc điều chỉnh Giao dịch, Quý khách cần
              lưu ý rằng, tùy thuộc vào bản chất của Giao dịch, Quý khách có thể
              phải chịu trách nhiệm thanh toán thêm khi Giao dịch không được
              hoàn thành, khi thực hiện quyết toán trước hoặc đóng giao dịch của
              mình. Quý khách có thể sẽ được yêu cầu thực hiện các khoản thanh
              toán khác nhau bằng cách ký quỹ các khoản tùy theo mức giá mua của
              khoản đầu tư, thay vì trả (hoặc nhận) toàn bộ giá mua (hoặc bán)
              ngay lập tức. Sự dịch chuyển mức giá thị trường của khoản đầu tư
              mà Quý khách tiến hành sẽ ảnh hưởng đến số tiền ký quỹ mà Quý
              khách sẽ cần bỏ ra. Chúng tôi sẽ theo dõi các yêu cầu ký quỹ của
              Quý khách hàng ngày và thông báo cho Quý khách ngay khi có thể về
              số tiền của các khoản thanh toán ký quỹ được yêu cầu theo điều
              khoản này.
            </p>
            <p><strong>Margin call(Yêu cầu Ký quỹ)</strong></p>
            <p>
              Quý khách đồng ý thanh toán theo yêu cầu cho phía chúng tôi khoản
              tiền trên bằng cách ký quỹ tùy vào từng thời điểm. Chúng tôi có
              thể tùy ý đưa ra yêu cầu một cách hợp lý nhằm phục cho mục đích
              bảo vệ Công ty khỏi mất mát hoặc rủi ro thua lỗ trong các Giao
              dịch hiện tại, tương lai hoặc dự tính theo
            </p>
            <p><strong>Không đáp ứng được Margin call</strong></p>
            <p>
              Xin lưu ý rằng trong trường hợp Quý khách không đáp ứng được
              Margin call, chúng tôi có thể ngay lập tức đóng các trạng thái
              giao dịch của Quý khách.
            </p>
            <p><strong>Hình thức ký quỹ</strong></p>
            <p>
              Tiền ký quỹ phải được thanh toán tiền mặt bằng loại tiền tệ được
              chúng tôi chấp nhận, theo yêu cầu của Công ty tùy vào từng thời
              điểm. Tiền ký quỹ trả cho chúng tôi sẽ được giữ dưới dạng tiền của
              khách hàng, dựa theo các yêu cầu của Quy tắc đối với Tiền của
              Khách hàng. Quý khách có thể nạp khoản Tiền ký quỹ bằng chuyển
              khoản ngân hàng, thẻ tín dụng, ví điện tử hoặc bằng các phương
              tiện khác theo chỉ định (nếu có) từ Công ty chúng tôi.
            </p>
            <p><strong>Bù trừ khi xảy ra Vi ước</strong></p>
            <p>
              Nếu xuất hiện Sự kiện Vi ước hoặc Thỏa thuận này chấm dứt, chúng
              tôi sẽ tiến hành bù trừ số dư của khoản tiền mặt ký quỹ mà chúng
              tôi nợ Quý khách với các nghĩa vụ (do phía chúng tôi tự định giá
              một cách phù hợp) của Quý khách cần hoàn thành cho Công ty. Số
              tiền chênh lệch nếu có được thanh toán giữa hai bên sau khi đã bù
              trừ, sẽ tuân theo quy định về Số tiền thanh lý phải trả theo Khoản
              15 (Giá trị ròng).
            </p>
            <p><strong>Đảm bảo khác</strong></p>
            <p>
              Quý khách đồng ý ký tên/đóng dấu hoặc thực hiện các động thái
              tương tự nhằm giúp các chứng từ mà Công ty yêu cầu có hiệu lực, và
              đồng thời tiến hành các bước khác theo yêu cầu hợp lý từ phía
              chúng tôi để hoàn thiện lợi ích bảo mật của Công ty và có được
              quyền sở hữu hợp pháp đối với Nghĩa vụ được bảo đảm.
            </p>
            <p><strong>Điều khoản không cầm cố</strong></p>
            <p>
              Quý khách cam kết không tạo ra hoặc không thu bất kỳ lợi ích bảo
              mật nào, cũng như không đồng ý trao quyền, chuyển nhượng bất kỳ
              khoản tiền mặt nào đã được chuyển cho chúng tôi, ngoại trừ quyền
              nắm giữ tài sản thế chấp thường xuyên đối với các loại chứng khoán
              được nắm giữ trong một hệ thống thanh toán bù trừ.
            </p>
            <p><strong>Quyền cầm giữ chung</strong></p>
            <p>
              Ngoài các quyền trên, với điều kiện không ảnh hưởng đến bất kỳ
              quyền nào khác mà chúng tôi có thể được hưởng theo Thỏa thuận này
              hoặc bất kỳ Quy định Áp dụng nào, chúng tôi sẽ có Quyền cầm giữ
              chung đối với tất cả tiền mặt do chúng tôi hoặc Cộng sự của chúng
              tôi hoặc người chúng tôi chọn thay mặt Quý Khách nắm giữ cho đến
              khi Quý khách hài lòng với các Nghĩa vụ được bảo đảm.
            </p>
          </div>
          <!-- 13 -->
          <div>
            <p>
              <span id="client-funds"><strong>13. QUỸ KHÁCH HÀNG</strong></span>
            </p>
            <p><strong>Quỹ Khách hàng</strong></p>
            <p>
              Chúng tôi sẽ xử lý các khoản tiền nhận được từ Quý khách hoặc do
              chúng tôi thay mặt Quý khách nắm giữ theo các yêu cầu của các quy
              định có liên quan. Cụ thể, các khoản tiền thuộc về Quý khách nhằm
              sử dụng cho mục đích giao dịch sẽ được giữ trong tài khoản tại bất
              kỳ ngân hàng hoặc tổ chức tài chính nào được sử dụng để nhận các
              khoản tiền cho Công ty, theo như chỉ định tùy vào từng thời điểm
              của Công ty Blue Sun Capital Ltd, và được giữ trong các tài khoản
              dưới tên của Công ty Blue Sun Capital Ltd.
            </p>
            <p>
              Bằng việc chấp thuận Thỏa thuận này, Quý khách đã cho phép Công ty
              Blue Sun Capital Ltd thực hiện bất cứ giao dịch đối chiếu nào nếu
              cần để giúp số dư tài khoản ngân hàng khớp với số dư tài khoản
              giao dịch. Với điều kiện không ảnh hưởng đến tính tổng quát của
              các điều khoản đã nêu trên, các nghiệp vụ đối chiếu này sẽ bao
              gồm: rút ​​tiền để quyết toán mọi giao dịch được thực hiện theo
              Thỏa thuận và cho mọi khoản phải trả của Quý khách hoặc thay mặt
              Quý khách trả cho Công ty Blue Sun Capital Ltd hoặc bất kỳ người
              nào khác.
            </p>
            <p>
              Điều này được hiểu rằng bất kỳ khoản tiền nào mà Công ty Blue Sun Capital Ltd phải trả cho Quý khách, sẽ được thanh toán trực tiếp
              cho Quý khách vào tài khoản ngân hàng mà Quý khách là người thụ
              hưởn. Yêu cầu chuyển tiền sẽ được Công ty Blue Sun Capital Ltd xử
              lý trong khoảng thời gian đã xác định trên trang web chính thức
              của Công ty Blue Sun Capital Ltd, và thời gian cần thiết để ghi có
              vào tài khoản cá nhân của Quý khách sẽ phụ thuộc vào nhà cung cấp
              tài khoản ngân hàng của Quý khách.
            </p>
            <p>
              Quý khách đồng ý rằng mọi khoản tiền Quý khách gửi trong tài khoản
              ngân hàng của Công ty Blue Sun Capital Ltd, sẽ được nạp vào tài
              khoản giao dịch của Quý khách vào ngày giá trị của khoản thanh
              toán mà chúng tôi nhận được sau khi đã trừ đi bất kỳ khoản phí/chi
              phí nào mà Quý khách cần trả cho đơn vị cung cấp tài khoản ngân
              hàng hoặc bất kỳ trung gian nào khác có liên quan trong quá trình
              giao dịch. Công ty Blue Sun Capital Ltd sẽ cần phải tiến hành xác
              minh danh tính của người gửi và đảm bảo rằng người gửi tiền là Quý
              khách, trước khi chấp nhận bất kỳ khoản tiền nào do Quý khách nạp.
              Nếu không đáp ứng đủ các điều kiện nêu trên, Công ty Blue Sun Capital Ltd có quyền hoàn trả số tiền đã nạp, sau khi đã bù trừ các
              khoản cần thiết, qua phương thức mà người nạp tiền sử dụng.
            </p>
            <p><strong>Tiền lãi</strong></p>
            <p>
              Quý khách thừa nhận và xác nhận rằng Quý khách sẽ không thu được
              tiền lãi trên số dư tài khoản của mình.
            </p>
            <p>
              <strong
                >Các ngân hàng nước ngoài, sàn giao dịch trung gian, đại lý
                thanh toán hoặc đối tác OTC</strong
              >
            </p>
            <p>
              Chúng tôi sẽ nỗ lực hết sức mình để thay mặt Quý khách lưu giữ
              tiền Quý khách gửi cho chúng tôi trong phạm vi các nước Liên minh
              Châu u, tuy nhiên chúng tôi cũng có quyền giữ tiền của Quý khách
              trong một ngân hàng được thành lập bên ngoài Liên minh Châu u. Chế
              độ pháp lý và quy định áp dụng cho các ngân hàng hoặc cá nhân
              thuộc trường hợp trên có thể khác với chế độ pháp lý và quy định
              tại Liên minh châu u, và trong trường hợp xảy ra mất khả năng
              thanh toán hoặc bất kỳ thủ tục tương tự nào khác liên quan đến
              ngân hàng hoặc đối tượng trên, tiền của Quý khách có thể sẽ được
              xử lý khác với phương thức sẽ được áp dụng trong trường hợp khoản
              tiền được gửi trong tài khoản ngân hàng tại các nước Liên minh
              Châu u. Chúng tôi sẽ không chịu trách nhiệm về nguy cơ mất khả
              năng thanh toán, hành vi hoặc thiếu sót của bất kỳ bên thứ ba nào
              được đề cập trong điều khoản này.
            </p>
            <p><strong>Các khoản tiền chưa được nhận của khách hàng</strong></p>
            <p>
              Quý khách đồng ý rằng nếu trong sáu năm mà số dư trong tài khoản
              của Quý khách không có bất kỳ biến động nào, chúng tôi có quyền
              dừng việc coi khoản tiền trong tài khoản này là Tiền của Khách
              hàng. Chúng tôi sẽ gửi thư tới địa chỉ mới nhất đã ghi nhận được
              của Quý khách để thông báo cho Quý khách về ý định không tiếp tục
              coi số dư của Quý khách là Tiền của Khách hàng và cho Quý khách 28
              ngày để đưa ra yêu cầu nhận tiền.
            </p>
            <p><strong>Trách nhiệm pháp lý và bồi thường</strong></p>
            <p>
              Quý khách đồng ý rằng Công ty chúng tôi sẽ không chịu trách nhiệm
              cho bất kỳ hành vi vi ước nào của mọi đối tác, ngân hàng, người
              giám sát hoặc các tổ chức nào khác giữ tiền thay cho Quý khách,
              hoặc Quý khách thông qua các đổi tượng này để thực hiện giao dịch.
            </p>
            <p>
              Công ty Blue Sun Capital Ltd sẽ không chịu trách nhiệm về mọi tổn
              thất Quý khách phải chịu liên quan đến các khoản tiền do chúng tôi
              nắm giữ, trừ khi tổn thất đó phát sinh trực tiếp do Công ty mắc
              phải sơ suất không thể tha thứ, cố ý vi ước hoặc gian lận.
            </p>
            <p><strong>Bù trừ khi xảy ra Vi ước</strong></p>
            <p>
              Nếu xuất hiện Sự kiện Vi ước hoặc Thỏa thuận này chấm dứt, chúng
              tôi sẽ tiến hành bù trừ số dư của khoản tiền mà chúng tôi nợ Quý
              khách với các nghĩa vụ (do phía chúng tôi tự định giá một cách phù
              hợp) của Quý khách cần hoàn thành cho Công ty. Số tiền chênh lệch
              nếu có được thanh toán giữa hai bên sau khi đã bù trừ, sẽ tuân
              theo quy định về Số tiền thanh lý phải trả theo Khoản 16 (Giá trị
              ròng).
            </p>
            <p><strong>Đảm bảo khác</strong></p>
            <p>
              Quý khách đồng ý ký tên/đóng dấu hoặc thực hiện các động thái
              tương tự nhằm giúp các chứng từ mà Công ty yêu cầu có hiệu lực, và
              đồng thời tiến hành các bước khác theo yêu cầu hợp lý từ phía
              chúng tôi để hoàn thiện lợi ích bảo mật của Công ty và có được
              quyền sở hữu hợp pháp đối với Nghĩa vụ được bảo đảm.
            </p>
            <p><strong>Điều khoản không cầm cố</strong></p>
            <p>
              Quý khách cam kết không tạo ra hoặc không thu bất kỳ lợi ích bảo
              mật nào, cũng như không đồng ý trao quyền, chuyển nhượng bất kỳ
              khoản tiền mặt nào đã được chuyển cho chúng tôi, ngoại trừ quyền
              nắm giữ tài sản thế chấp thường xuyên đối với các loại chứng khoán
              được nắm giữ trong một hệ thống thanh toán bù trừ.
            </p>
            <p><strong>Quyền cầm giữ chung</strong></p>
            <p>
              Ngoài các quyền trên, với điều kiện không ảnh hưởng đến bất kỳ
              quyền nào khác mà chúng tôi có thể được hưởng theo Thỏa thuận này
              hoặc bất kỳ Quy định Áp dụng khác, chúng tôi sẽ có Quyền cầm giữ
              chung đối với tất cả tiền mặt do chúng tôi hoặc Cộng sự của chúng
              tôi hoặc người chúng tôi chọn thay mặt Quý Khách nắm giữ cho đến
              khi Quý khách hài lòng với các Nghĩa vụ được bảo đảm.
            </p>
          </div>
          <!-- 14 -->
          <div>
            <p>
              <span id="representations-waranties"
                ><strong>14. TUYÊN BỐ, BẢO ĐẢM VÀ GIAO KÈO</strong></span
              >
            </p>
            <p>
              Quý khách tuyên bố và bảo đảm với chúng tôi vào ngày Thỏa thuận
              này có hiệu lực và kể từ ngày của mỗi Giao dịch diễn ra, rằng:
            </p>
            <p>
              1. nếu Quý khách là một thể nhân, Quý khách đã ở độ tuổi hợp pháp
              và Quý khách có đủ năng lực pháp lý để tham gia Thỏa thuận này;
            </p>
            <p>2. nếu Quý khách không phải là thể nhân:</p>
            <p>
              · Quý khách được thành lập, cấu thành và tồn tại phù hợp theo luật
              pháp hiện hành của khu vực tài phán của nơi Quý khách đã được
              thành lập;
            </p>
            <p>
              · thực hiện và cung cấp Thỏa thuận này, tất cả các Giao dịch và
              việc thực hiện tất cả các nghĩa vụ dự tính theo Thỏa thuận này đã
              được Quý khách ủy quyền hợp lệ; và
            </p>
            <p>
              · mỗi thể nhân thực thi và thực hiện Thỏa thuận này thay mặt Quý
              khách, gia nhập các Giao dịch và thực hiện tất cả các nghĩa vụ
              được nêu trong Thỏa thuận này, đã được Quý khách ủy quyền hợp lệ
              và đã cung cấp tất cả thông tin và/hoặc chứng từ cần thiết cho
              Chúng tôi,
            </p>
            <p>
              3. Quý khách có tất cả các quyền, quyền hạn, quyền chấp thuận,
              giấy phép và ủy quyền cần thiết, đồng thời Quý khách đã thực hiện
              mọi động thái cần thiết để tham gia và thực hiện một cách hợp pháp
              Thỏa thuận này và các Giao dịch khác, và để trao các quyền lợi và
              quyền hạn bảo mật được nêu trong Thỏa thuận này;
            </p>
            <p>
              4. các đối tượng thay mặt Quý khách tham gia vào Thỏa thuận này và
              mỗi Giao dịch phải được ủy quyền hợp lệ để thực hiện các công việc
              kể trên, đồng thời Quý khách phải thông báo chi tiết về mối quan
              hệ của đối tượng này với Quý khách cho chúng tôi bằng cách cung
              cấp tất cả thông tin và/hoặc chứng từ cần thiết;
            </p>
            <p>
              5. Thỏa thuận này, mỗi Giao dịch và các nghĩa vụ được tạo ra trong
              cả hai trường hợp trên đều ràng buộc Quý khách và có hiệu lực đối
              với Quý khách theo các điều khoản của đã quy định trong đó (theo
              nguyên tắc áp dụng đối với tải sản/vốn chủ sở hữu). Các điều khoản
              kể trên không và sẽ không vi phạm các điều khoản của bất kỳ quy
              định, lệnh, trách nhiệm hoặc thỏa thuận khác mà Quý khách bị ràng
              buộc;
            </p>
            <p>
              6. không có Sự kiện Vi ước hoặc bất kỳ sự kiện nào có thể trở
              thành Sự kiện Vi ước (có đưa ra thông báo, quyết định hoặc kết hợp
              các điều trên theo thời gian) xảy ra liên quan đến Quý khách hoặc
              bất kỳ Nhà cung cấp hỗ trợ tín dụng nào;
            </p>
            <p>
              7. Quý khách đóng vai trò là chủ sở hữu (nhưng không phải là người
              được ủy thác) chính và duy nhất khi tham gia Thỏa thuận này và vào
              mỗi Giao dịch. Trong trường hợp mà ở hiện tại hoặc trong tương lai
              Quý khách muốn mở nhiều hơn một tài khoản với Công ty Blue Sun Capital Ltd dưới tư cách khách hàng cá nhân (thể nhân) hoặc là người
              thụ hưởng của khách hàng doanh nghiệp (pháp nhân), Quý khách cần
              phải cung cấp ngay thông tin cho chúng tôi rằng Quý khách là chủ
              sở hữu/người thụ hưởng của (các) tài khoản trong quá trình mở tài
              khoản và cung cấp cho chúng tôi thông tin và/hoặc chứng từ cần
              thiết liên quan đến mối quan hệ giữa thể nhân và/hoặc (các) pháp
              nhân này;
            </p>
            <p>
              8. mọi thông tin nào Quý khách cung cấp hoặc đã cung cấp cho chúng
              tôi về tình hình tài chính, chỗ ở hoặc các vấn đề khác của Quý
              khách là chính xác và không gây hiểu lầm trong bất kỳ khía cạnh
              trọng yếu nào;
            </p>
            <p>
              9. Quý khách sẵn sàng và có khả năng tài chính để gánh chịu nguy
              cơ mất toàn bộ số tiền đầu tư do Giao dịch, và Quý khách sẽ giao
              dịch với khoản đầu tư phù hợp với khả năng của bản thân; và
            </p>
            <p>
              10. trừ khi có thỏa thuận khác từ phía chúng tôi, Quý khách là chủ
              sở hữu duy nhất của tất cả các khoản tiền Quý khách chuyển theo
              Thỏa thuận này, hoàn toàn không chịu bất kỳ khoản chi phí bảo mật
              nào khác ngoại trừ quyền nắm giữ tài sản thế chấp thường xuyên đối
              với các loại chứng khoán được nắm giữ trong một hệ thống thanh
              toán bù trừ.
            </p>
            <p><strong>Giao ước:</strong></p>
            <p>Giao ước của Quý khách với chúng tôi:</p>
            <p>
              1. Quý khách sẽ luôn luôn có được và tuân thủ, và sẽ thực hiện mọi
              động thái cần thiết để duy trì đầy đủ hiệu lực của tất cả các
              quyền, quyền hạn, quyền chấp thuận, giấy phép và ủy quyền được đề
              cập trong điều khoản này;
            </p>
            <p>
              2. Quý khách sẽ nhanh chóng thông báo cho chúng tôi về việc xảy ra
              bất kỳ Sự kiện vỡ nợ hoặc sự kiện tiềm ẩn nào đối với chính Quý
              khách hoặc bất kỳ Nhà cung cấp hỗ trợ tín dụng nào;
            </p>
            <p>
              3. Quý khách sẽ tiến hành các bước hợp lý nhằm tuân thủ tất cả các
              Quy định áp dụng liên quan đến Thỏa thuận này và bất kỳ Giao dịch
              nào, miễn là các Quy định này được áp dụng cho Quý khách hoặc
              chúng tôi;
            </p>
            <p>
              4. Quý khách sẽ không gửi Lệnh hoặc thực hiện bất kỳ hành động nào
              có thể khiến chúng tôi hiểu sai rằng quý khách muốn gửi Lệnh hoặc
              định giá cho một phương tiện tài chính. Quý khách cũng sẽ không
              gửi Lệnh mà chúng tôi có lý do để tin rằng Lệnh này vi phạm Quy
              định áp dụng hoặc bằng cách lợi dụng (các) tài khoản Quý khách có
              thể duy trì với Công ty Blue Sun Capital Ltd để trục lợi. Các Lệnh
              này sẽ bị coi là Lệnh lạm dụng hệ thống, bao gồm nhưng không giới
              hạn trong ý định trục lợi từ sự trễ giá, giao dịch ở mức giá ngoài
              thị trường và/hoặc ngoài giờ giao dịch và lạm dụng hệ thống để
              giao dịch ở mức giá bị thao túng; và
            </p>
            <p>
              5. khi có yêu cầu hợp lý từ phía chúng tôi, Quý khách sẽ cung cấp
              cho chúng tôi các thông tin để chứng minh các vấn đề được đề cập
              trong điều khoản này hoặc theo các Quy định áp dụng.
            </p>
            <p>Quý khách đồng ý và hiểu rằng:</p>
            <p>
              Trong trường hợp Công ty Blue Sun Capital Ltd có đủ bằng chứng để
              chỉ ra rằng một số tiền Quý khách nhận được là tiền thu được từ
              các hành vi hoặc sản phẩm bất hợp pháp của bất kỳ hoạt động tội
              phạm nào và/hoặc thuộc về bên thứ ba, Công ty Blue Sun Capital Ltd
              có quyền hoàn trả các khoản này cho người gửi, có thể là Quý khách
              hoặc người thụ hưởng của pháp nhân liên quan. Ngoài ra, Quý khách
              cũng đồng ý và hiểu rằng Công ty Blue Sun Capital Ltd có thể đảo
              ngược mọi Giao dịch được thực hiện trong Tài khoản giao dịch của
              Quý khách và có thể đơn phương chấm dứt thỏa thuận này. Công ty
              Blue Sun Capital Ltd, theo quyết định của cán bộ kiểm soát tuân
              thủ của chúng tôi, báo cáo cho các cơ quan, ban ngành liên quan
              khi phát hiện bất cứ giao dịch đáng ngờ nào.Công ty Blue Sun Capital Ltd có quyền thực hiện mọi hành động pháp lý chống lại Quý
              khách để bù đắp và bồi thường thiệt hại khi xảy ra các vi phạm kể
              trên. và đòi Quý khách bổi thường các thiệt hại mà Quý khách gây
              ra cho Công ty Blue Sun Capital Ltd khi thực hiện các hành vi vi
              phạm kể trên.
            </p>
          </div>
          <!-- 15 -->
          <div>
            <p>
              <span id="event-default"
                ><strong>15. SỰ KIỆN CỦA DEFAULT</strong></span
              >
            </p>
            <p>
              Các điều sau đây sẽ cấu thành Sự kiện Vi ước, và khi sự kiện này
              xảy ra Công ty Blue Sun Capital Ltd sẽ được ủy quyền để thực hiện
              các quyền của mình như đã mô tả dưới đây:
            </p>
            <p>
              1. Khi Quý khách không thể quyết toán khi đến hạn thanh toán theo
              Thỏa thuận này hoặc theo bất kỳ điều khoản nào khác của Thỏa thuận
              này. Quý khách vẫn không thể hoàn thành nghĩa vụ thanh toán trong
              vòng một ngày làm việc sau khi chúng tôi có thông báo về việc
              không thực hiện nghĩa vụ;
            </p>
            <p>
              2. Quý khách bắt đầu các trường hợp tố tụng tự nguyện hoặc thủ tục
              khác, cố gắng hoặc đề xuất thanh lý, tổ chức lại,sắp xếp hoặc
              thành phần, đóng băng hoặc lệnh cấm, hoặc các khoản bồi thường
              tương tự khác liên quan đến Quý khách, hoặc các khoản nợ của Quý
              khách khi xảy ra phá sản, mất khả năng thanh toán, bị giám sát
              hoặc luật tương tự (bao gồm bất kỳ luật doanh nghiệp hoặc luật nào
              khác có thể được áp dụng đối với cho Quý khách, nếu mất khả năng
              thanh toán) hoặc tìm kiếm sự bổ nhiệm người ủy thác, người nhận,
              người thanh lý, người bảo quản, người quản lý, người giám sát hoặc
              một quan chức tương tự khác, hoặc bất kỳ phần quan trọng nào của
              tài sản của Quý khách, hoặc nếu Quý khách thực hiện bất kỳ hành
              động nào của công ty để ủy quyền cho bất kỳ điều khoản nào đã nói
              ở trên và trong trường hợp sắp xếp lại, điều chỉnh không được
              chúng tôi chấp thuận;
            </p>
            <p>
              3. khi Quý khách là đối tượng trong các trường hợp tố tụng không
              tự nguyện hoặc thủ tục khác, cố gắng hoặc đề xuất thanh lý, tổ
              chức lại,sắp xếp hoặc thành phần, đóng băng hoặc lệnh cấm, hoặc
              các khoản bồi thường tương tự khác liên quan đến Quý khách, hoặc
              các khoản nợ của Quý khách khi xảy ra phá sản, mất khả năng thanh
              toán, bị giám sát hoặc luật tương tự (bao gồm bất kỳ luật doanh
              nghiệp hoặc luật nào khác có thể được áp dụng đối với cho Quý
              khách, nếu mất khả năng thanh toán) hoặc tìm kiếm sự bổ nhiệm
              Người giám sát Quý khách hoặc giám sát bất kỳ phần đáng kể nào
              trong tài sản của Quý khách và trường hợp không tự nguyện đó hoặc
              thủ tục khác:
            </p>
            <p>
              A. đã không được miễn bỏ trong vòng năm ngày kể từ ngày tổ chức
              hoặc tuyên bố; hoặc là
            </p>
            <p>
              B. đã bị miễn bỏ trong khoảng thời gian kể trên vì nguyên nhân duy
              nhất là do thiếu tài sản để trang trải chi phí cho trường hợp đó
              hoặc thủ tục khác;
            </p>
            <p>
              4. Quý khách qua đời, mất khả năng suy xét, không thể thanh toán
              các khoản nợ đến hạn hoặc bị phá sản hoặc mất khả năng thanh toán,
              như được định nghĩa trong bất kỳ luật phá sản hoặc luật mất khả
              năng thanh toán nào áp dụng cho Quý khách: là bất kỳ khoản nợ nào
              của Quý khách không được thanh toán vào ngày đáo hạn,hoặc trở nên
              có khả năng tại bất kỳ thời điểm nào được tuyên bố, do và phải trả
              theo các thỏa thuận hoặc phương tiện chứng minh khoản nợ đó trước
              khi đến hạn phải trả, hoặc có bất kỳ vụ kiện, hành động hoặc thủ
              tục tố tụng nào khác liên quan đến Thỏa thuận gây ra do mọi sự
              thực thi, tài liệu đính kèm nào, hoặc một người đóng góp chiếm hữu
              toàn bộ hoặc bất kỳ phần tài sản, tài sản cơ sở hoặc tài sản nào
              khác của Quý khách (hữu hình và vô hình);
            </p>
            <p>
              5. you or any Credit Support Provider (or any Custodian acting on
              behalf of either of you or a Credit Support Provider) disaffirms,
              disclaims or repudiates any obligation under this Agreement or any
              guarantee, hypothecation agreement, margin or security agreement
              or document, or any other document containing an obligation of a
              third party (“Credit Support Provider”), or of you, in favour of
              us supporting any of your obligations under this Agreement (each a
              “Credit Support Document”);
            </p>
            <p>
              6. Quý khách hoặc một trong số các Nhà cung cấp hỗ trợ tín dụng
              nào (hoặc bất kỳ Người giám sát nào thay mặt Quý khách hoặc Nhà
              cung cấp hỗ trợ tín dụng) không đồng ý, chối bỏ hoặc từ chối bất
              kỳ nghĩa vụ nào theo Thỏa thuận này hoặc theo bất kỳ bảo lãnh,
              thỏa thuận giả định, ký quỹ, chứng từ hoặc thỏa thuận bảo mật,
              hoặc các tài liệu khác chứa nghĩa vụ của bên thứ ba (Nhà cung cấp
              hỗ trợ tín dụng) hoặc của Quý khách, để giúp chúng tôi có thể hỗ
              trợ Quý khách thực hiện các nghĩa vụ theo Thỏa thuận này (theo mỗi
              Chứng từ hỗ trợ tín dụng);
            </p>
            <p>
              7. bất kỳ đại diện hoặc bảo hành nào được thực hiện hoặc đưa ra,
              hoặc được coi là do Quý khách tạo ra hoặc đưa ra theo Thỏa thuận
              này, hoặc bất kỳ Tài liệu hỗ trợ tín dụng nào được chứng minh là
              sai hoặc gây hiểu lầm trong bất kỳ khía cạnh quan trọng nào tại
              thời điểm chứng từ được tạo ra hoặc đưa ra, hoặc được cho là được
              tạo hoặc đưa ra;
            </p>
            <p>
              8. Quý khách hoặc bất kỳ Nhà cung cấp hỗ trợ tín dụng nào không
              thể tuân thủ hoặc thực hiện một trong các thỏa thuận hoặc nghĩa vụ
              nào được tuân thủ hoặc thực hiện theo Tài liệu hỗ trợ tín dụng
              hiện hành;
            </p>
            <p>
              9. bất kỳ tuyên bố hoặc bảo hành nào được thực hiện hoặc đưa ra,
              hoặc được coi là được thực hiện hoặc đưa ra bởi một trong các Nhà
              cung cấp hỗ trợ tín dụng, theo bất kỳ Tài liệu hỗ trợ tín dụng nào
              bị chứng minh là sai hoặc gây hiểu lầm trong bất kỳ khía cạnh quan
              trọng nào tại thời điểm chứng từ được tạo ra hoặc đưa ra, hoặc
              được cho là được tạo hoặc đưa ra;
            </p>
            <p>
              10. bất kỳ sự kiện nào được nêu trong các khoản từ 15.2 đến khoản
              15.4 của khoản 15 này (Sự kiện Vi ước) xảy ra đối với bất kỳ Nhà
              cung cấp hỗ trợ tín dụng nào;
            </p>
            <p>
              11. Bất kỳ tình huống nào chúng tôi cho là cần thiết hoặc nên làm
              để bảo vệ bản thân hoặc có bất kỳ hành động nào được thực hiện
              hoặc một sự kiện xảy ra mà chúng tôi cho rằng có thể có ảnh hưởng
              bất lợi nghiêm trọng đến khả năng thực hiện nghĩa vụ nào đó của
              Quý khách theo Thỏa thuận này;
            </p>
            <p>
              12. Quý khách không thực hiện hoặc bỏ qua việc thông báo cho chúng
              tôi năng lực của Quý khách với tư cách là chủ sở hữu/người thụ
              hưởng của các tài khoản Quý khách có thể duy trì với chúng tôi
              và/hoặc khả năng của Quý khách trong việc làm người quản lý tiền
              thay mặt cho các khách hàng khác của chúng tôi;
            </p>
            <p>
              13. Quý khách lợi dụng sự trễ giá để trục lợi và Quý khách đặt
              Lệnh với giá không còn phù hợp, Quý khách giao dịch với giá ngoài
              thị trường và/hoặc ngoài giờ giao dịch, Quý khách thao túng hệ
              thống để giao dịch với giá không được chúng tôi niêm yết và Quý
              khách thực hiện bất kỳ hành động nào khác cấu thành giao dịch
              không phù hợp; hoặc là
            </p>
            <p>
              14. bất kỳ sự kiện vi ước nào (dù được mô tả ra sao) xảy ra liên
              quan đến Quý khách theo bất kỳ thỏa thuận nào khác giữa hai bên.
            </p>
          </div>
          <!-- 16 -->
          <div>
            <p>
              <span id="netting"><strong>16. NETTING</strong></span>
            </p>
            <p><strong>Quyền khi có Vi ước</strong></p>
            <p>
              Khi xảy ra Sự kiện vi ước, chúng tôi có thể thực hiện các quyền
              của mình theo điều khoản này, ngoại trừ trong trường hợp xảy ra Sự
              kiệnvi ước như được quy định tại khoản 15.2 hoặc khoản 15.3 của
              định nghĩa về Sự kiện vi ước (các Vi ước phá sản), quy định chấm
              dứt tự động của điều khoản này sẽ được áp dụng.
            </p>
            <p><strong>Ngày thanh toán</strong></p>
            <p>
              Theo điều khoản phụ sau đây, tại bất kỳ thời điểm nào sau khi xảy
              ra Sự kiện vi ước, chúng tôi có thể, bằng cách thông báo cho Quý
              khách, chỉ định một ngày (Ngày thanh toáný) để chấm dứt và thanh
              toán Giao dịch theo điều khoản này.
            </p>
            <p><strong>Tự động chấm dứt</strong></p>
            <p>
              Ngày xảy ra Sự kiện vi ước sẽ tự động tạo thành Ngày thanh toán,
              mà không cần bất kỳ thông báo nào của chúng tôi và các quy định
              của điều khoản phụ sau đây sẽ được áp dụng.
            </p>
            <p><strong>Tính toán số tiền thanh toán</strong></p>
            <p>Khi xảy ra Ngày thanh toán:</p>
            <p>
              1. không ai trong hai bên có nghĩa vụ thực hiện bất kỳ khoản thanh
              toán hoặc giao hàng nào nữa theo bất kỳ Giao dịch nào, ngoại trừ
              điều khoản này, đã thất bại do thực hiện vào hoặc sau Ngày thanh
              toán và các nghĩa vụ đó sẽ được thực thi bằng cách quyết toán (cho
              dù là thanh toán, bù trừ hoặc cách khác) của Số tiền thanh toán
              (như được định nghĩa dưới đây);
            </p>
            <p>
              2. chúng tôi sẽ (vào hoặc ngay khi có thể thực hiện được sau Ngày
              thanh toán) xác định (có chiết khấu nếu thích hợp), đối với mỗi
              Giao dịch, tổng chi phí, tổn thất hoặc, tùy theo từng trường hợp,
              doanh thu, theo Đồng tiền cơ sở do chúng tôi chỉ định bằng văn bản
              hoặc bằng loại tiền hợp pháp của Hoa Kỳ nếu như không có chỉ định
              trước (và, nếu phù hợp, bao gồm bất kỳ tổn thất thương lượng, chi
              phí tài trợ hoặc, không trùng lặp, chi phí, tổn thất, tùy theo
              từng trường hợp, doanh thu, như là kết quả của việc chấm dứt,
              thanh lý, thu được, thực hiện hoặc thiết lập lại bất kỳ vị thế nào
              hoặc vị thế giao dịch liên quan) là kết quả của chấm dứt, theo
              Thỏa thuận này, của từng khoản thanh toán hoặc giao hàng mà nếu
              không được yêu cầu. thì phải được thực hiện theo Giao dịch (giả sử
              đáp ứng được các điều kiện liên quan, nếu phù hợp, với các báo giá
              thị trường được công bố trên hoặc giá quyết toán chính thức được
              thiết lập bởi các sàn giao dịch có liên quan, có thể có vào, hoặc
              ngay trước ngày tính toán); và
            </p>
            <p>
              3. chúng tôi sẽ coi mỗi chi phí hoặc tổn thất đối với chúng tôi,
              được xác định như trên, là số tiền dương và từng khoản lãi của
              chúng tôi là số tiền âm và tổng hợp tất cả số tiền trên để tạo ra
              tổng tiền, dương hoặc âm, được tính bằng Đồng cơ sở (Số tiền thanh
              toán).
            </p>
            <p><strong>Người chi trả</strong></p>
            <p>
              Nếu Số tiền thanh toán được xác định theo điều khoản này là số
              tiền dương, Quý khách sẽ trả cho chúng tôi khoản tiền này, và nếu
              như đó là số tiền âm, chúng tôi sẽ trả tiền lại cho Quý khách.
              Chúng tôi sẽ thông báo cho Quý khách về Số tiền thanh toán và số
              tiền phải t, người phải trả ngay sau khi tính toán xong.
            </p>
            <p><strong>Các giao dịch khác</strong></p>
            <p>
              Trong trường hợp chấm dứt Thỏa thuận và tiến hành thanh toán theo
              điều khoản này, chúng tôi cũng sẽ có quyền tự quyết, chấm dứt và
              thanh lý, theo các quy định của khoản này, bất kỳ giao dịch nào
              khác được thực hiện giữa hai bên.
            </p>
            <p><strong>Thanh toán</strong></p>
            <p>
              Số tiền thanh toán sẽ được thanh toán bằng Đồng tiền cơ sở vào
              thời điểm kết thúc ngày giao dịch sau khi hoàn thành chấm dứt và
              thanh toán theo điều khoản này (được chuyển đổi theo yêu cầu của
              luật áp dụng sang bất kỳ loại tiền nào khác, mọi chi phí chuyển
              đổi sẽ do Quý khách chịu và (nếu có) sẽ được khấu trừ vào bất kỳ
              khoản thanh toán nào cho Quý khách). Bất kỳ Số tiền thanh toán nào
              không được thanh toán vào ngày đáo hạn sẽ được coi là số tiền chưa
              thanh toán và chịu lãi suất, với tỷ lệ trung bình mà tiền gửi qua
              đêm bằng loại tiền của khoản thanh toán đó được cung cấp bởi các
              ngân hàng lớn trên thị trường liên ngân hàng Luân Đôn vào lúc
              11:00 am (giờ Luân Đôn) (hoặc nếu không sẽ do chúng tôi quyết định
              giá) cộng thêm 1% mỗi năm, đối với mỗi ngày mà số tiền đó vẫn chưa
              được trả.
            </p>
            <p><strong>Đồng tiền cơ sở</strong></p>
            <p>
              Nhằm mục đích của các tính toán dưới đây, chúng tôi có thể chuyển
              đổi số tiền bằng bất kỳ loại tiền nào khác thành Đồng tiền cơ sở
              theo tỷ lệ quy đổi tại thời điểm tính toán, do chúng tôi lựa chọn
              một cách phù hợp.
            </p>
            <p><strong>Thanh toán</strong></p>
            <p>
              Trừ khi Ngày thanh toán đã xảy ra hoặc đã được thiết lập một cách
              hiệu quả, chúng tôi sẽ không có nghĩa vụ thực hiện bất kỳ khoản
              thanh toán hoặc giao nhận nào theo Giao dịch, miễn là Sự kiện Vi
              ước hoặc bất kỳ sự kiện nào có thể xảy ra ( với việc đưa ra thông
              báo, quyết định hoặc kết hợp các phước thức) đối với Quý khách đã
              xảy ra và vẫn đang tiếp tục.
            </p>
            <p><strong>Quyền bổ sung</strong></p>
            <p>
              Các quyền của chúng tôi theo điều khoản này sẽ được bổ sung, và
              không bị giới hạn hoặc loại trừ bất kỳ quyền nào khác mà chúng tôi
              có thể có (cho dù theo thỏa thuận, hoạt động của pháp luật hay
              nguyên nhân khác).
            </p>
            <p><strong>Áp dụng Netting vào giao dịch</strong></p>
            <p>
              Điều khoản này áp dụng cho mỗi Giao dịch được ký kết hoặc tồn tại
              giữa hai bên vào hoặc sau ngày Thỏa thuận này có hiệu lực.
            </p>
            <p><strong>Thỏa thuận đơn</strong></p>
            <p>
              Thỏa thuận này, các điều khoản cụ thể áp dụng cho từng Giao dịch
              được ký kết theo Thỏa thuận này và tmọi sửa đổi đối với bất kỳ
              điều khoản nào sẽ cùng nhau tạo thành một thỏa thuận duy nhất giữa
              hai bên. Cả Quý khách và Công ty đều thừa nhận rằng tất cả các
              Giao dịch được ký kết vào hoặc sau ngày Thỏa thuận này có hiệu
              lực, đã được ký kết dựa trên cơ sở Thỏa thuận này và tất cả các
              điều khoản đó tạo thành một thỏa thuận duy nhất giữa hai bên.
            </p>
          </div>
          <!-- 17 -->
          <div>
            <p>
              <span id="rights-default"
                ><strong>17. QUYỀN KHI CÓ VI ƯỚC</strong></span
              >
            </p>
            <p><strong>Vi ước</strong></p>
            <p>
              Khi có Sự kiện Vi ước hoặc vào mọi thời điểm do chúng tôi toàn
              quyết định, Công ty cho rằng Quý khách đã không thực hiện (hoặc
              chúng tôi tin tưởng một cách hợp lý rằng Quý khách sẽ không thể
              hoặc không sẵn sàng thực hiện) bất kỳ nghĩa vụ nào của Quý khách
              đối với chúng tôi, ngoài các quyền theo khoản 16 (Netting), chúng
              tôi có quyền thực hiện các hành động sau đây mà không cần thông
              báo trước cho Quý khách:
            </p>
            <p>
              1. thay vì trả lại các khoản đầu tư tương đương với các khoản đầu
              tư trong tài khoản của Quý khách, nhằm chi trả cho Quý khách giá
              trị thị trường hợp lý của các khoản đầu tư đó tại thời điểm chúng
              tôi thực hiện quyền đó; và/hoặc
            </p>
            <p>
              2. bán một số khoản đầu tư của Quý khách thuộc sở hữu của chúng
              tôi hoặc sở hữu của bất cứ đối tượng nào được chỉ định hoặc bên
              thứ ba dựa theo hoặc tuân theo Thỏa thuận này. Trong mỗi trường
              hợp chúng tôi có thể tùy ý lựa chọn và/hoặc theo các điều khoản
              trên chúng tôi có thể toàn quyền đưa ra các quyết định mà chúng
              tôi cho rằng phù hợp (mà không chịu trách nhiệm cho bất kỳ tổn
              thất hoặc giảm giá nào) để thu về các khoản tiền đủ để bù đắpbất
              kỳ số tiền nào do Quý khách gây ra dưới đây; và/hoặc
            </p>
            <p>
              3. đóng, thay thế hoặc đảo ngược bất kỳ Giao dịch nào, mua, bán,
              mượn hoặc cho vay hoặc tham gia vào bất kỳ Giao dịch nào khác, hực
              hiện, hoặc không thực hiện, hành động khác đó vào thời điểm bất kỳ
              theo quyết định của chúng tôi nếu thấy cần thiết hoặc phù hợp để
              trang trải, giảm bớt hoặc loại bỏ tổn thất hoặc trách nhiệm pháp
              lý của chúng tôi theo hoặc đối với bất kỳ hợp đồng, vịthế hoặc cam
              kết nào của Quý khách; và / hoặc
            </p>
            <p>
              4. hủy bỏ và/hoặc xem xét vô hiệu hóa mọi Giao dịch và lợi nhuận
              hoặc thua lỗ thu được hoặc chưa và/hoặc đóng (các) tài khoản Quý
              khách duy trì với chúng tôi theo Thỏa thuận này, ngay lập tức và
              không cần thông báo trước.
            </p>
          </div>
          <!-- 18 -->
          <div>
            <p>
              <span id="termination-default"
                ><strong
                  >18. CHẤM DỨT THỎA THUẬN KHÔNG XẢY RA VI ƯỚC</strong
                ></span
              >
            </p>
            <p><strong>Chấm dứt</strong></p>
            <p>
              Trừ khi trong Quy định áp dụng có yêu cầu, một trong hai bên có
              thể chấm dứt Thỏa thuận này (và mối quan hệ giữa hai bên) bằng
              cách thông báo bằng văn bản về việc chấm dứt thỏa thuận cho bên
              còn lại trước mười ngày. Chúng tôi có thể chấm dứt Thỏa thuận này
              ngay lập tức nếu Quý khách không tuân thủ hoặc thực hiện bất kỳ
              điều khoản nào của Thỏa thuận này, hoặc trong trường hợp Quý khách
              mất khả năng thanh toán. Trong trường hợp chấm dứt, tất cả các vị
              thế mở của Khách hàng sẽ được đóng lại tại ngày chấm dứt mà không
              làm mất đi tính hiệu lực của các điều khoản đã nêu ở trên, bao gồm
              các khoản phí, lệ phí và hình phạt.
            </p>
            <p>Khi chấm dứt Thỏa thuận này</p>
            <p>
              1. tất cả số tiền Quý khách phải trả cho chúng tôi sẽ đến hạn ngay
              lập tức và phải trả bao gồm (nhưng không giới hạn):
            </p>
            <p>· tất cả các khoản phí, lệ phí và hoa hồng; và</p>
            <p>
              · mọi chi phí giao dịch phát sinh khi chấm dứt Thỏa thuận này; và
            </p>
            <p>
              · mọi tổn thất và chi phí phát sinh khi kết thúc bất kỳ Giao dịch
              nào hoặc giải quyết hoặc ký kết các nghĩa vụ còn tồn đọng do chúng
              tôi thay mặt Quý khách thực hiện.
            </p>
            <p>
              2. Công ty Blue Sun Capital Ltd sẽ áp dụng các quy tắc thực thi
              tốt nhất trong trường hợp Quý khách chưa cung cấp cho Công ty
              Blue Sun Capital Ltd các chỉ thị cụ thể về việc đóng các vị thế
              (giao dịch) đang mở của Quý khách.
            </p>
            <p>
              3. Hoàn trả toàn bộ khoản tiền còn dư trong tài khoản giao dịch
              của Quý khách vào tài khoản ngân hàng của Quý khách, cụ thể là tài
              khoản mà trước đó số tiền đã bị ghi nợ.Chúng tôi có thể hoàn tiền
              cho Quý khách vào một tài khoản ngân hàng khác mà Quý khách là
              người thụ hưởng, miễn là Quý khách cung cấp cho chúng tôi đầy đủ
              chứng từ cần thiết để xác minh rằng tài khoản đó thuộc về Quý
              khách.
            </p>
            <p><strong>Quyền hiện có</strong></p>
            <p>
              Việc chấm dứt sẽ không ảnh hưởng đến các quyền và nghĩa vụ và giao
              dịch còn tồn đọng sẽ tiếp tục chịu sự điều chỉnh của Thỏa thuận
              này và các điều khoản cụ thể đã được thỏa thuận giữa chúng tôi
              liên quan đến các Giao dịch đó cho đến khi tất cả các nghĩa vụ
              được thực hiện đầy đủ.
            </p>
          </div>
          <!-- 19 -->
          <div>
            <p>
              <span id="exclusions-limitations"
                ><strong>19. LOẠI TRỪ, GIỚI HẠN VÀ BỒI THƯỜNG</strong></span
              >
            </p>
            <p><strong>Các điều khoản loại trừ chung</strong></p>
            <p>
              Cần lưu ý rằng Công ty Blue Sun Capital Ltd và các tổ chức liên
              quan đến Công ty Blue Sun Capital Ltd, sẽ thực hiện Giao dịch một
              cách thiện chí và trong khả năng của mình. Tuy nhiên chúng tôi và
              các giám đốc, cán bộ, nhân viên hoặc đại lý của chúng tôi đều sẽ
              không phải chịu trách nhiệm cho bất kỳ tổn thất, thiệt hại, phí
              hoặc chi phí nào, cho dù phát sinh do sơ suất, vi phạm hợp đồng,
              diễn giải sai hay bất cứ nguyên do nào khác, do Quý khách gây ra
              hoặc phải gánh chịu theo Thỏa thuận này (bao gồm mọi Giao dịch
              hoặc khi chúng tôi từ chối tham gia vào một Giao dịch được đề
              xuất) trừ khi tổn thất đó là hậu quả có thể thấy trước một cách
              hợp lý hoặc phát sinh trực tiếp do Công ty chúng tôi để xảy ra sơ
              suất không thể tha thứ, cố ý vi ước hoặc gian lận. Trong mọi
              trường hợp, chúng tôi sẽ không chịu trách nhiệm đối với các tổn
              thất mà Quý khách hoặc bất kỳ bên thứ ba nào phải chịu, đối với
              mọi thiệt hại đặc biệt hoặc hậu quả nào, mất lợi nhuận, mất thiện
              chí hoặc mất cơ hội kinh doanh phát sinh theo hoặc liên quan đến
              Thỏa thuận này, cho dù phát sinh do sơ suất, vi phạm hợp đồng,
              diễn giải sai hay bất cứ nguyên do nào khác. Mọi nội dung trong
              Thỏa thuận sẽ không hạn chế trách nhiệm của chúng tôi khi có
              thương vong cá nhân xảy ra do sơ suất của chúng tôi.
            </p>
            <p>
              Công ty Blue Sun Capital Ltd sẽ không chịu trách nhiệm đối với mọi
              trường hợp Quý khách mất cơ hội kinh doanh, dẫn đến tổn thất hoặc
              giảm (hoặc tăng) giá trị của các Phương tiện tài chính của Quý
              khách.
            </p>
            <p><strong>Ảnh hưởng về thuế</strong></p>
            <p>
              Chúng tôi phủ nhận mọi trách nhiệm pháp lý một cách không giới hạn
              đối với ảnh hưởng bất lợi về thuế đối với bất kỳ Giao dịch nào.
            </p>
            <p><strong>Các cấp trong Công ty Blue Sun Capital Ltd</strong></p>
            <p>
              Các cấp độ được trình bày trên trang web của chúng tôi là các cấp
              độ mà tại đó Công ty Blue Sun Capital Ltd sẵn sàng bán quyền chọn
              cho Quý khác. Các cấp độ này không phải là cấp độ thị trường theo
              thời gian thực.
            </p>
            <p><strong>Thay đổi trên thị trường</strong></p>
            <p>
              Cách tính tỷ lệ đáo hạn của Giao dịch về chỉ số, cổ phiếu, ngoại
              tệ và hàng hóa được cung cấp bởi Công ty Blue Sun Capital Ltd sẽ
              được cập nhật theo thời gian,
            </p>
            <p>
              các tài sản do Công ty Blue Sun Capital Ltd cung cấp và cách tính
              toanstyr lệ đáo hạn cua các chỉ số, cổ phiếu, ngoại tệ và hàng hóa
              do Công ty Blue Sun Capital Ltd cung cấp có thể thay đổi theo thời
              gian tùy theo phán quyết của Công ty Blue Sun Capital Ltd. Khách
              hàng cam liên tục cập nhật về các tài sản và cách tính toán đã nêu
              trên.
            </p>
            <p>
              Chúng tôi bảo lưu quyền, theo quyết định của riêng mình, không
              thực hiện Lệnh, hoặc thay đổi giá niêm yết của Giao dịch, hoặc
              cung cấp cho Quý khách báo giá mới, trong trường hợp nền tảng giao
              dịch gặp lỗi kỹ thuật, hoặc trong trường hợp giá của phương tiện
              tài chính được cung cấp có biến động bất thường. Trong trường hợp
              chúng tôi cung cấp cho Quý khách báo giá mới, Quý khách có quyền
              chấp nhận hoặc từ chối và hủy bỏ việc thực hiện Giao dịch.
            </p>
            <p>
              Chúng tôi phủ nhận mọi trách nhiệm pháp lý một cách không giới hạn
              do bất kỳ sự chậm trễ hoặc thay đổi trong điều kiện thị trường
              trước khi có Giao dịch cụ thể nào bị ảnh hưởng.
            </p>
            <p><strong>Trách nhiệm hữu hạn</strong></p>
            <p>
              Chúng tôi sẽ không chịu trách nhiệm với Quý khách về việc thực
              hiện một phần hoặc không thực hiện nghĩa vụ của chúng tôi vì bất
              cứ nguyên nhân nào ngoài tầm kiểm soát hợp lý của Công ty, bao gồm
              nhưng không giới hạn trong các sự cố, chậm trễ, trục trặc hoặc
              thất bại trong việc truyền dẫn, truyền thông hoặc máy tính gặp
              trục trặc, hành động trong ngành, hành động khủng bố, yếu tố tự
              nhiên, hành vi và quy định của bất kỳ cơ quan chính quyền hoặc
              siêu quốc gia nào, hoặc lỗi do các sàn giao dịch hoặc đại lý trung
              gian, đại lý hoặc người quản lý của người giám sát, người giám
              sát, đại lý, dealer, đơn vị thanh toán bù trừ của chúng tôi, hoặc
              các tổ chức quy định hoặc tự điều chỉnh, vì bất kỳ lý do nào,
              không thể thực hiện nghĩa vụ của mình.Mọi nội dung trong Thỏa
              thuận này sẽ không loại trừ hoặc hạn chế bất kỳ nghĩa vụ hoặc
              trách nhiệm pháp lý nào mà chúng tôi có thể phải thực hiện cho Quý
              khách theo Quy định áp dụng, có thể không được loại trừ hoặc hạn
              chế theo đó.
            </p>
            <p>
              Công ty Blue Sun Capital Ltd sẽ nỗ lực hết sức nhằm đảm bảo rằng
              tiền và/hoặc Phương tiện tài chính của Quý khách sẽ được gửi tại
              các Ngân hàng và tổ chức có uy tín. Tuy nhiên, Công ty Blue Sun Capital Ltd sẽ không chịu trách nhiệm trong trường hợp xảy ra
              thua lỗ do tình hình tài chính của ngân hàng hoặc tổ chức bị suy
              giảm. hoặc cho các sự kiện như thanh khoản, nhận hoặc bất kỳ sự
              kiện nào khác gây ra cho Ngân hàng hoặc tổ chức tổn thất dẫn đến
              mất tất cả hoặc một phần tiền ký gửi.
            </p>
            <p>
              Với điều kiện không gây ảnh hưởng đến bất kỳ điều khoản nào khác
              của Thỏa thuận này, Công ty Blue Sun Capital Ltd sẽ không chịu
              trách nhiệm về:
            </p>
            <p>
              Lỗi hệ thống (của Công ty Blue Sun Capital Ltd hoặc nhà cung cấp
              dịch vụ)
            </p>
            <p>Sự chậm trễ</p>
            <p>Virus</p>
            <p>Sử dụng trái phép</p>
            <p>
              Đối với bất kỳ hành động nào được thực hiện bởi, hoặc theo chỉ dẫn
              của Thị trường, đơn vị thanh toán bù trừ hoặc cơ quan quản lý.
            </p>
            <p>
              Quý khách cũng thừa nhận rằng Quý khách có trách nhiệm kiểm tra kỹ
              ngày hết hạn của các quyền chọn được thông báo trên trang web
              chính thức của Công ty.
            </p>
            <p><strong>Trách nhiệm đối với các Lệnh</strong></p>
            <p>
              Quý khách sẽ chịu trách nhiệm cho tất cả các Lệnh được nhập thay
              mặt Quý khách, thông qua Dịch vụ điện tử của Chúng tôi. Và Quý
              khách sẽ hoàn toàn chịu trách nhiệm với chúng tôi về việc quyết
              toán cho mọi Giao dịch phát sinh Lệnh đó.
            </p>
            <p><strong>Toàn bộ thỏa thuận</strong></p>
            <p>
              Quý khách thừa nhận rằng Quý khách đã không dựa dẫm vào, hoặc bị
              buộc phải tham gia Thỏa thuận này bởi một đại diện khác ngoài các
              đối tượng đã được quy định rõ ràng trong Thỏa thuận. Chúng tôi sẽ
              không chịu trách nhiệm với Quý khách (về vốn chủ sở hữu, hợp đồng
              hoặc trách nhiệm pháp lý) đối với một đại diện không được quy định
              trong Thỏa thuận này và đây sẽ không tính là gian lận.
            </p>
            <p><strong>Bồi thường</strong></p>
            <p>
              Quý khách sẽ trả cho chúng tôi các khoản tiền mà Công ty có thể
              yêu cầu, trên cơ sở bồi thường đầy đủ, cho bất kỳ tổn thất, trách
              nhiệm pháp lý, phí hoặc chi phí nào (bao gồm phí pháp lý), các
              loại thuế mà chúng tôi có thể phải chịu, hoặc phải chịu cho bất kỳ
              tài khoản hoặc Giao dịch nào của Quý khách hoặc là kết quả của bất
              kỳ hành vi diễn giải sai nào của Quý khách hoặc bất kỳ vi phạm
              nghĩa vụ của Quý khách theo Thỏa thuận này (bao gồm mọi Giao dịch)
              hoặc bởi việc thực thi các quyền của chúng tôi.
            </p>
          </div>
          <!-- 20 -->
          <div>
            <p>
              <span id="miscellaneous"
                ><strong>20. CÁC ĐIỀU KHOẢN KHÁC</strong></span
              >
            </p>
            <p><strong>Sửa đổi</strong></p>
            <p>
              Chúng tôi có quyền sửa đổi các điều khoản của Thỏa thuận này. Nếu
              chúng tôi thực hiện bất kỳ thay đổi quan trọng nào đối với Thỏa
              thuận này, chúng tôi sẽ gửi thông báo bằng văn bản cho Quý khách
              trước đó ít nhất mười ngày làm việc.Các sửa đổi này sẽ có hiệu lực
              vào ngày được chỉ định trong thông báo. Trừ khi có thỏa thuận
              khác, việc sửa đổi sẽ không ảnh hưởng đến bất kỳ lệnh hay Giao
              dịch nào hoặc bất kỳ quyền hoặc nghĩa vụ pháp lý nào có thể đã
              phát sinh.
            </p>
            <p>
              Nếu muốn phản đối, Quý khách có thể chấm dứt Thỏa thuận trong vòng
              mười ngày kể từ khi thông báo bằng cách gửi thư bảo đảm cho chúng
              tôi, với điều kiện tiên quyết là tất cả các giao dịch đang chờ xử
              lý thay mặt Quý khách sẽ được hoàn thành. Khi hết thời hạn nêu
              trên mà Khách hàng không đưa ra bất kỳ phản đối nào, chúng tôi sẽ
              coi rằng Quý khách đã đồng ý và/hoặc chấp nhận nội dung sửa đổi.
            </p>
            <p><strong>Thông báo</strong></p>
            <p>
              Trừ khi có thỏa thuận khác, tất cả các thông báo, chỉ thị và thông
              tin liên lạc khác được cung cấp bởi chúng tôi theo Thỏa thuận này
              sẽ được gửi đến địa chỉ hoặc số fax mà Quý khách đã cung cấp cho
              chúng tôi. Tương tự, tất cả các thông báo,chỉ thị và thông tin
              liên lạc khác được cung cấp bởi Quý khách theo Thỏa thuận này sẽ
              được gửi cho chúng tôi bằng văn bản tới địa chỉ dưới đây:
            </p>
            <p><strong>Thông tin liên lạc của chúng tôi</strong></p>
            <p>
              <strong>Tên: Blue Sun Capital Ltd<br /> </strong>
            </p>
            <p>
              <strong>Địa chỉ: </strong>First Floor, First St Vincent Bank Ltd
              Building, James Street, Kingstown, St. Vincent and the Grenadines
            </p>
            <p><strong>Địa chỉ email:</strong> support@comfyfc.com</p>
            <p>
              <strong>Số điện thoại:</strong> +61 862 302 765<strong
                ><br />
              </strong>
            </p>
            <p>
              Quý khách sẽ thông báo ngay lập tức cho chúng tôi khi có bất kỳ
              thay đổi nào trong địa chỉ nhận thông báo, chỉ thị và thông tin
              liên lạc khác của Quý khách.
            </p>
            <p><strong>Giao tiếp Điện tử</strong></p>
            <p>
              Theo Quy định áp dụng, mọi giao tiếp giữa hai bên sử dụng chữ ký
              điện tử và mọi liên lạc qua trang web của Công ty và/hoặc Dịch vụ
              điện tử sẽ được ràng buộc tương tự như quy định áp dụng cho giao
              tiếp bằng văn bản. Các Lệnh hoặc chỉ thị được gửi tới cho Quý
              khách qua e-mail hoặc phương tiện điện tử khác sẽ tạo thành bằng
              chứng đưa ra các Lệnh hoặc chỉ thị này.
            </p>
            <p><strong>Ghi âm cuộc gọi</strong></p>
            <p>
              Chúng tôi có thể ghi âm lại các cuộc trò chuyện qua điện thoại mà
              không sử dụng âm cảnh báo để đảm bảo rằng các điều khoản quan
              trọng của Giao dịch và mọi thông tin quan trọng khác liên quan đến
              Giao dịch được ghi lại kịp thời và chính xác. Các bản ghi này sẽ
              hoàn toàn thuộc quyền sở hữu của chúng tôi và được Quý khách chấp
              nhận dùng làm bằng chứng cho các Lệnh hoặc chỉ thị đưa ra.
            </p>
            <p><strong>Bản ghi giữa hai bên</strong></p>
            <p>
              Các bản ghi giữa Quý khách và Công ty, trừ trường hợp có sai sót,
              sẽ là bằng chứng cho các giao dịch của Quý khách với chúng tôi
              liên quan đến các dịch vụ mà Công ty cung cấp. Quý khách sẽ không
              phản đối việc thừa nhận bản ghi của chúng tôi làm bằng chứng trong
              bất kỳ thủ tục tố tụng nào vì các lí do như: bản ghi không phải
              bản gốc, không phải bằng văn bản và cũng không phải là tài liệu do
              máy tính tạo ra. Quý khách sẽ không dựa dẫm vào chúng tôi để tuân
              thủ nghĩa vụ lưu trữ hồ sơ thuộc về Quý khách, dù cho chúng tôi có
              thể, một cách hoàn toàn tự quyết, cung cấp các bản ghi cho quý
              khách nếu có yêu cầu.
            </p>
            <p><strong>Bản ghi của Quý khách</strong></p>
            <p>
              Quý khách đồng ý giữ các bản ghi đầy đủ theo Quy định hiện hành,
              để thể đúng hiện bản chất và thời gian mà các Lệnh này được gửi
              đi. Quý khách có thể truy cập bản ghi trực tuyến của bản thân bất
              cứ lúc nào thông qua nền tảng giao dịch của chúng tôi. Chúng tôi
              sẽ gửi cho Quý khách bản sao kê hàng tháng hoặc hàng quý qua email
              nếu như nhận được yêu cầu từ Quý khách.
            </p>
            <p><strong>Thủ tục khiếu nại</strong></p>
            <p>
              Chúng tôi có nghĩa vụ thiết lập và duy trì các quy trình nội bộ để
              xử lý khiếu nại một cách công bằng và kịp thời. Quý khách có thể
              gửi khiếu nại cho chúng tôi qua nhiền phương thức như: bằng thư,
              điện thoại, email hoặc gặp trực tiếp. Chúng tôi sẽ gửi cho Quý
              khách một văn bản xác nhận khiếu nại của Quý khách ngay sau khi
              nhận, kèm theo chi tiết về các thủ tục khiếu nại của chúng tôi
              theo các luật liên quan theo St Vincent &amp; The Grenadines
              Financial Services Authority (FSA). Vui lòng liên hệ với chúng tôi
              nếu Quý khách muốn biết thêm chi tiết về các thủ tục khiếu nại của
              Công ty.
            </p>
            <p><strong>Quyền của bên thứ ba</strong></p>
            <p>
              Thỏa thuận này sẽ vì lợi ích và ràng buộc đối với cả hai bên: Quý
              khách và Công ty, cùng những người kế thừa và được hai bên giao
              quyền. Quý khách sẽ không chuyển giao, chuyển hoặc chuyển nhượng
              hoặc có ý định chuyển giao, chuyển hoặc chuyển nhượng các quyền
              hoặc nghĩa vụ của Quý khách theo Thỏa thuận này hoặc bất kỳ lợi
              ích nào trong Thỏa thuận này, mà không có sự đồng ý trước bằng văn
              bản của chúng tôi. Bất kỳ hành vi chuyển giao, chuyển hoặc chuyển
              nhượng nào vi phạm điều điều khoản này sẽ bị vô hiệu. Quý khách
              đồng ý rằng chúng tôi có thể không cần thông báo thêm cho Quý
              khách, và tuân theo Quy định áp dụng, tiến hành chuyển nhượng toàn
              bộ hoặc bất kỳ quyền, lợi ích, nghĩa vụ, rủi ro và/hoặc lợi nhuận
              nào của chúng tôi theo Thỏa thuận này bằng mọi phương tiện nào
              chúng tôi cho là phù hợp, cho bất kỳ ai có thể tham gia hợp đồng
              liên quan đến việc chuyển nhượng đó với Công ty, và Quý khách đồng
              ý rằng chúng tôi có thể chuyển cho đối tượng này toàn bộ thông tin
              mà chúng tôi nắm giữ về Quý khách.
            </p>
            <p><strong>Điều khoản thời gian thực hiện</strong></p>
            <p>
              Thời gian sẽ là điều cốt yếu đối với tất cả các nghĩa vụ của Quý
              khách theo Thỏa thuận này (bao gồm mọi Giao dịch). Tức Quý khách
              sẽ phải chịu trách nhiệm nếu không thực hiện nghĩa vụ đúng thời
              gian quy định.
            </p>
            <p><strong>Quyền hạn và phương thức bồi thường</strong></p>
            <p>
              Các Quyền hạn và phương thức bồi thường được cung cấp theo Thỏa
              thuận này sẽ tích lũy và không loại trừ các quyền được quy định
              bởi pháp luật. Chúng tôi không có nghĩa vụ thực hiện bất kỳ Quyền
              hạn và phương thức bồi thường nào, dù là thực hiện, hoặc theo
              phương thức hay thời gian có lợi cho Quý khách. Trường hợp chúng
              tôi không thể thực hiện hoặc trì hoãn thực hiện bất kỳ quyền nào
              của chúng tôi theo Thỏa thuận này (bao gồm mọi Giao dịch) hoặc các
              việc tương tự, việc này không đồng nghĩa rằng chúng tôi đã khước
              từ các quyền eneu trên hoặc bất kỳ Quyền hạn và phương thức bồi
              thường nào khác. Việc chúng tôi thực hiện một hoặc một phần Quyền
              hạn và phương thức bồi thường sẽ không ngăn cản chúng tôi tiếp tục
              thực hiện các Quyền hạn và phương thức bồi thường này hoặc Quyền
              hạn và phương thức bồi thường khác trong tương lai.
            </p>
            <p><strong>Vô hiệu một phần</strong></p>
            <p>
              Vào bất cứ thời điểm nào, nếu có điều khoản nào trong Thỏa thuận
              này là, hoặc trở thành bất hợp pháp, không hợp lệ hoặc không thể
              thực thi được theo bất kỳ khía cạnh nào theo luật pháp của bất kỳ
              khu vực tài phán nào, thì tính hợp pháp, hiệu lực và khả thi của
              các điều khoản còn lại của Thỏa thuận này, cũng như tính hợp pháp,
              hiệu lực và khả thi của điều khoản đó theo luật của khu vực tài
              phán khác sẽ không bị ảnh hưởng hoặc suy yếu theo bất cứ cách nào.
            </p>
          </div>
          <!-- 21 -->
          <div>
            <p>
              <span id="governing-law"
                ><strong
                  >21. ĐIỀU KHOẢN VỀ LUẬT ÁP DỤNG ĐIỀU CHỈNH</strong
                ></span
              >
            </p>
            <p><strong>Luật điều chỉnh</strong></p>
            <p>
              Thỏa thuận này sẽ được điều chỉnh và hiểu theo luật pháp Vương
              quốc Anh.
            </p>
            <p><strong>Quyền hạn pháp lý</strong></p>
            <p>Mỗi bên cam kết không thể hủy ngang như sau:</p>
            <p>
              i. đồng ý vì lợi ích của hai bên rằng các St. Vincent sẽ có thẩm
              quyền giải quyết bất kỳ vụ kiện, hành động hoặc thủ tục tố tụng
              nào khác liên quan đến Thỏa thuận này (Tố tụng) và không thể hủy
              bỏ quyền tài phán của các tòa án đó (với điều kiện tiên quyết là
              điều này sẽ không ngăn cản chúng tôi đưa ra hành động tại tòa án
              của bất kỳ khu vực tài phán nào khác); và
            </p>
            <p>
              ii. khước từ bất kỳ sự phản đối nào có thể xảy ra, vào bất cứ lúc
              nào, đối với việc đặt địa điểm diễn ra cácThủ tục tố tụng nào được
              đưa ra tại bất kỳ tòa án nào, và đồng ý không tuyên bố rằng các
              Thủ tục đó đã được đưa tới một diễn đàn bất tiện hoặc rằng tòa án
              đó không có thẩm quyền đối xử lý sự việc trên.
            </p>
            <p><strong>Từ bỏ Quyền miễn trừ và chấp thuận thực thi</strong></p>
            <p>
              Quý khách từ bỏ không hủy ngang, tới mức tối đa được luật pháp
              hiện hành cho phép, đối với vấn đề liên quan đến bản thân và doanh
              thu và tài sản của Quý khách (không phân biệt mục đích đã sử dụng
              hoặc định sử dụng) tất cả các quyền miễn trừ vì lý do chủ quyền
              hoặc các căn cứ tương tự khác từ vụ kiện; phán quyết của bất kỳ
              tòa án; bồi thường theo lệnh của tòa, lệnh yêu cầu thực thi cụ thể
              hoặc để khôi phục tài sản; đi kèm tài sản (cho dù trước hay sau
              khi phán xét); và thi hành hoặc thực thi bất kỳ phán quyết nào mà
              Quý khách hoặc doanh thu hoặc tài sản của Quý khách có thể được
              hưởng trong bất kỳ Thủ tục tố tụng nào tại tòa án của bất kỳ khu
              vực tài phán nào, và đồng ý không thể hủy bỏ rằng Quý khách sẽ
              không yêu cầu bất kỳ quyền miễn trừ nào trong bất kỳ Thủ tục tố
              tụng nào. Quý khách đồng ý đối với mọi Thủ tục tố tụng đưa ra các
              quy trình hoặc bồi thường có liên quan, bao gồm nhưng không giới
              hạn việc tạo,thực thi hoặc thi hành đối cới bất kỳ tài sản nào
              (không phân biệt mục đích đã sử dụng hay sắp sử dụng) khi có phán
              quyết hoặc mệnh lệnh liên quan đến tố tụng.
            </p>
            <p>
              <strong>Dịch vụ của quy trinh tố tụng</strong><br />
              <span style="margin-bottom: 3em"
                >Nếu Quý khách ở bên ngoài St. Vincent, khi xảy ra tố tụng tại
                St. Vincent, dịch vụ liên quan đến quy trình tố tụng sẽ được gửi
                đến địa chỉ ở St. Vincent mà Quý khách trước đó đã chỉ định,
                nhằm phục vụ các trường hợp xảy ra tố tụng. Điều này không ảnh
                hưởng đến quyền phục vụ quy trình của chúng tôi theo cách khác
                được pháp luật cho phép.</span
              >
            </p>
          </div>
        </div>
      </div>
      <!-- Terms and Conditions Text Ends-->
    </div>
  </div>
  <!-- Page Content Ends -->
  <div
    class="terms_fix_index"
    v-bind:class="{ '': windowTop < 50, is_fixed: windowTop > 1500 }"
  >
    <div class="terms_index_list" :class="{ showlist: showIndex }">
      <a @click="toggleShowIndex('#definitions-interpretations', 120)"
        >1. Definitions and Interpretation</a
      >
      <a @click="toggleShowIndex('#introduction', 120)">2. Introduction</a>
      <a @click="toggleShowIndex('#general', 120)">3. General</a>
      <a @click="toggleShowIndex('#regulation', 120)">4. Regulation</a>
      <a @click="toggleShowIndex('#costs-payments', 120)"
        >5. Costs, Payments and Charges</a
      >
      <a @click="toggleShowIndex('#right-cancel', 120)">6. Right to Cancel</a>
      <a @click="toggleShowIndex('#non-advised', 120)">7. Non Advised</a>
      <a @click="toggleShowIndex('#customer-accounts', 120)"
        >8. Customer Accounts and Initial Deposits</a
      >
      <a @click="toggleShowIndex('#trading-policies', 120)"
        >9. Trading Policies and Procedures</a
      >
      <a @click="toggleShowIndex('#electronic-trading', 120)"
        >10. Electronic Trading Terms</a
      >
      <a @click="toggleShowIndex('#no-trading', 120)"
        >11. “No Trading” Periods- “One Touch” General Terms</a
      >
      <a @click="toggleShowIndex('#margining-arrangements', 120)"
        >12. Margining Arrangements</a
      >
      <a @click="toggleShowIndex('#client-funds', 120)">13. Client Funds</a>
      <a @click="toggleShowIndex('#representations-waranties', 120)"
        >14. Representations, Warranties and Covenants</a
      >
      <a @click="toggleShowIndex('#event-default', 120)"
        >15. Event of Default</a
      >
      <a @click="toggleShowIndex('#netting', 120)">16. Netting</a>
      <a @click="toggleShowIndex('#rights-default', 120)"
        >17. Rights on Default</a
      >
      <a @click="toggleShowIndex('#termination-default', 120)"
        >18. Termination without Default</a
      >
      <a @click="toggleShowIndex('#exclusions-limitations', 120)"
        >19. Exclusions, Limitations and Indemnity</a
      >
      <a @click="toggleShowIndex('#miscellaneous', 120)">20. Miscellaneous</a>
      <a @click="toggleShowIndex('#governing-law', 120)"
        >21. Governing Law and Jurisdiction</a
      >
    </div>
    <div
      class="terms_index_btn btn btn-primary rounded-circle"
      @click="toggleShowIndex('', 120)"
    >
      Jump To Terms
    </div>
  </div>
</template>

<script lang="ts">
import TopBar from "../TopBar.vue";
import Header from "../Header.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { TopBar, Header },
  data() {
    return {
      showIndex: false,
      windowTop: 0,
    };
  },
  methods: {
    toggleShowIndex(selector: string, offset: number) {
      this.showIndex = !this.showIndex;
      this.scrollIntoViewWithOffset(selector, offset);
    },
    scrollIntoViewWithOffset(selector: string, offset: number) {
      window.scrollTo({
        behavior: "smooth",
        top:
          document.querySelector(selector).getBoundingClientRect?.().top -
          document.body.getBoundingClientRect().top -
          offset,
      });
      console.log(selector, offset);
    },
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    },
  },
  mounted() {
    window.scroll(0, 0);
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
});
</script>
