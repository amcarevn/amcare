const Services = () => {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dịch vụ chăm sóc{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              chuyên nghiệp
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Amcare cung cấp dịch vụ chăm sóc toàn diện, đồng hành cùng khách hàng xuyên suốt hành trình, 
            từ trước, trong và sau phẫu thuật.
          </p>
          <button className="btn-primary px-8 py-3.5 inline-flex items-center gap-2">
            <span>Xem tất cả dịch vụ</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Card 1 */}
          <div className="card p-8 group hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Chăm sóc 24/7</h3>
            <p className="text-gray-600 leading-relaxed">
              Amcare cung cấp dịch vụ hỗ trợ xuyên suốt quá trình thẩm mỹ, giúp khách hàng an tâm từ những bước đầu tiên. 
              Chúng tôi hỗ trợ thủ tục nhập viện, hỗ trợ sinh hoạt hàng ngày, hỗ trợ di chuyển, và quản lý thuốc theo chỉ định của bác sĩ.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all duration-300">
                <span>Tìm hiểu thêm</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="card p-8 group hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Chăm sóc theo yêu cầu</h3>
            <p className="text-gray-600 leading-relaxed">
              Amcare cung cấp dịch vụ chăm sóc hậu phẫu linh hoạt, được thiết kế riêng theo thời gian và nhu cầu của từng khách hàng. 
              Chúng tôi cam kết mang đến sự hỗ trợ tận tâm và chuyên nghiệp, bao gồm hỗ trợ thủ tục nhập viện và quản lý thuốc.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all duration-300">
                <span>Tìm hiểu thêm</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="card p-8 group hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hướng dẫn phục hồi tại nhà</h3>
            <p className="text-gray-600 leading-relaxed">
              Amcare cung cấp dịch vụ hướng dẫn phục hồi tại nhà một cách toàn diện. 
              Chúng tôi sẽ hướng dẫn chi tiết về cách chăm sóc vết mổ đúng cách, 
              các bài tập vận động nhẹ nhàng giúp giảm sưng và quản lý thuốc hiệu quả.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all duration-300">
                <span>Tìm hiểu thêm</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Đội ngũ chuyên nghiệp</h4>
            <p className="text-sm text-gray-600">Được đào tạo bài bản</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Tận tâm chu đáo</h4>
            <p className="text-sm text-gray-600">Chăm sóc tận tình</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">An toàn tuyệt đối</h4>
            <p className="text-sm text-gray-600">Quy trình chuẩn y tế</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Giá cả hợp lý</h4>
            <p className="text-sm text-gray-600">Minh bạch chi phí</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
