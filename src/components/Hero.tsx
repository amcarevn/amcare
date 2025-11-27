const Hero = () => {
  return (
    <section className="min-h-screen gradient-bg relative overflow-hidden flex items-center justify-center pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Giải pháp chăm sóc bệnh nhân{' '}
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              hậu phẫu thông minh với AI
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Đồng hành cùng khách hàng trong suốt quá trình trước, trong và sau phẫu thuật thẩm mỹ
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4">
              Tìm hiểu thêm
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Liên hệ ngay
            </button>
          </div>
          
          {/* Stats preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
              <div className="text-gray-200 text-sm md:text-base">năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-gray-200 text-sm md:text-base">chăm sóc viên</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">5000+</div>
              <div className="text-gray-200 text-sm md:text-base">khách hàng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">20+</div>
              <div className="text-gray-200 text-sm md:text-base">tỉnh thành</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
