function Policy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            CHÍNH SÁCH SỬ DỤNG ỨNG DỤNG
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Giới Thiệu
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Chào mừng bạn đến với BeautyCare! Ứng dụng này giúp các cặp đôi theo dõi số ngày yêu nhau, chia sẻ kỷ niệm và kết nối với nhau một cách đặc biệt hơn. Khi sử dụng ứng dụng, bạn đồng ý với các điều khoản và điều kiện được nêu trong chính sách này.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Điều Khoản Sử Dụng
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Ứng dụng được thiết kế dành riêng cho các cặp đôi sử dụng nhằm lưu giữ kỷ niệm và kết nối tình cảm.</li>
              <li>Người dùng phải từ 13 tuổi trở lên để đăng ký và sử dụng ứng dụng.</li>
              <li>Việc sử dụng ứng dụng phải tuân thủ các quy định của pháp luật và không được sử dụng cho mục đích bất hợp pháp.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Quyền Riêng Tư
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng theo chính sách quyền riêng tư.</li>
              <li>Dữ liệu cá nhân như ngày yêu nhau, hình ảnh, tin nhắn chỉ được lưu trữ trên hệ thống để phục vụ trải nghiệm ứng dụng và không được chia sẻ cho bên thứ ba nếu không có sự đồng ý của người dùng.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Nội Dung và Hành Vi Của Người Dùng
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Người dùng chịu trách nhiệm về nội dung mà họ chia sẻ trên ứng dụng.</li>
              <li>Không được phép đăng tải nội dung vi phạm pháp luật, phản cảm hoặc xâm phạm quyền riêng tư của người khác.</li>
              <li>Chúng tôi có quyền gỡ bỏ nội dung không phù hợp hoặc tạm ngừng tài khoản vi phạm chính sách.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Quyền Hạn và Trách Nhiệm
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Chúng tôi không chịu trách nhiệm về bất kỳ tổn thất nào phát sinh từ việc sử dụng ứng dụng.</li>
              <li>Chúng tôi có thể tạm ngừng hoặc thay đổi dịch vụ bất kỳ lúc nào mà không cần thông báo trước.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Thanh Toán và Mua Hàng Trong Ứng Dụng
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Một số tính năng có thể yêu cầu thanh toán hoặc đăng ký gói dịch vụ nâng cao.</li>
              <li>Mọi giao dịch được xử lý thông qua App Store và tuân theo chính sách thanh toán của Apple.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Liên Hệ Hỗ Trợ
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nếu có bất kỳ câu hỏi hoặc khiếu nại nào liên quan đến ứng dụng, vui lòng liên hệ với chúng tôi qua email:{' '}
              <a href="mailto:info@runagent.io" className="text-blue-600 hover:text-blue-800 underline">
                info@runagent.io
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Thay Đổi Chính Sách
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Chúng tôi có thể cập nhật chính sách này theo thời gian. Người dùng sẽ được thông báo về bất kỳ thay đổi nào thông qua ứng dụng hoặc email.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Policy
