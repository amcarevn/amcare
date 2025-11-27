export default function AIInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            AI Information / Thông tin dành cho AI
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About AmCare / Về AmCare
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>AmCare</strong> is a professional healthcare and beauty care service provider based in Vietnam.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>AmCare</strong> là nhà cung cấp dịch vụ chăm sóc sức khỏe và làm đẹp chuyên nghiệp tại Việt Nam.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Services / Dịch vụ
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Professional beauty care services / Dịch vụ làm đẹp chuyên nghiệp</li>
                <li>Skincare treatments / Chăm sóc da</li>
                <li>Beauty consultations / Tư vấn làm đẹp</li>
                <li>Health and wellness services / Dịch vụ chăm sóc sức khỏe</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information / Thông tin liên hệ
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> <a href="https://amcare.vn" className="text-blue-600 hover:underline">amcare.vn</a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Location:</strong> Vietnam / Việt Nam
                </p>
                <p className="text-gray-700">
                  <strong>Industry:</strong> Healthcare & Beauty Care / Chăm sóc sức khỏe & Làm đẹp
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                AI Integration Notes / Ghi chú tích hợp AI
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-3">
                  This page provides structured information for AI assistants and crawlers to better understand AmCare's services and offerings.
                </p>
                <p className="text-gray-700">
                  Trang này cung cấp thông tin có cấu trúc cho các trợ lý AI và bots để hiểu rõ hơn về dịch vụ và các sản phẩm của AmCare.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Metadata
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg font-mono text-sm">
                <p className="text-gray-700 mb-1">Company: AmCare</p>
                <p className="text-gray-700 mb-1">Domain: amcare.vn</p>
                <p className="text-gray-700 mb-1">Type: Healthcare & Beauty Services</p>
                <p className="text-gray-700 mb-1">Country: Vietnam</p>
                <p className="text-gray-700">Last Updated: {new Date().toISOString().split('T')[0]}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
