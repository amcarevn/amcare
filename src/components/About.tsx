const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Về <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Amcare</span>
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-600 font-semibold mb-8">
            CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ AMCARE
          </h3>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
            <p>
              Amcare là công ty uy tín hoạt động trong lĩnh vực cung cấp túi ngực và hỗ trợ chăm sóc ngoài y tế, 
              đồng hành cùng khách hàng trong suốt quá trình trước, trong và sau phẫu thuật thẩm mỹ.
            </p>
            <p>
              Với đội ngũ chăm sóc viên được đào tạo bài bản và giàu kinh nghiệm, chúng tôi cam kết mang đến 
              dịch vụ chăm sóc tận tâm, chuyên nghiệp, giúp khách hàng phục hồi an toàn và nhanh chóng sau phẫu thuật.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Chăm sóc trước phẫu thuật</h4>
            <p className="text-gray-600 text-sm">Tư vấn và chuẩn bị tâm lý, thể chất cho khách hàng</p>
          </div>
          
          <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Hỗ trợ trong phẫu thuật</h4>
            <p className="text-gray-600 text-sm">Đồng hành cùng khách hàng và bác sĩ trong suốt quá trình</p>
          </div>
          
          <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Chăm sóc hậu phẫu</h4>
            <p className="text-gray-600 text-sm">Chăm sóc toàn diện với công nghệ AI thông minh</p>
          </div>
          
          <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Theo dõi sức khỏe</h4>
            <p className="text-gray-600 text-sm">Giám sát quá trình phục hồi qua ứng dụng di động</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Thành tựu nổi bật</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'năm kinh nghiệm' },
              { number: '500+', label: 'chăm sóc viên' },
              { number: '5000+', label: 'khách hàng' },
              { number: '20+', label: 'tỉnh thành' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="card p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">Sứ mệnh của chúng tôi</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Amcare cam kết mang đến giải pháp chăm sóc sức khỏe toàn diện, ứng dụng công nghệ AI 
            để nâng cao chất lượng dịch vụ và trải nghiệm của khách hàng. Chúng tôi không ngừng 
            đổi mới và hoàn thiện để trở thành đối tác tin cậy trong hành trình làm đẹp và chăm sóc sức khỏe.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Tìm hiểu thêm về dịch vụ
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
