import React from 'react'
import './nicePlace.css'

const NicePlace = () => {
  return (
    <section id="nice-place" className="nice-place">
      <div className="container">
          <h1 className="h1-style">Tài liệu nổi bật</h1>
          <div className="nice-place-container row">
            <div className="nice-place-item">
              <div className="nice-place-img">
                <img src="http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg" alt=""/>
              </div>
              <div className="nice-place-text">
                <h2>Lập trình C++</h2>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p>C++ là một loại ngôn ngữ lập trình bậc trung. Đây là ngôn ngữ lập trình đa năng được tạo ra
                  bởi Bjarne Stroustrup</p>
                <button className="btn">Xem thêm</button>
              </div>
            </div>




            <div className="nice-place-item">
              <div className="nice-place-img">
                <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt=""/>
              </div>
              <div className="nice-place-text">
                <h2>Lập trình Java</h2>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p>Java là một trong những ngôn ngữ lập trình hướng đối tượng. Nó được sử dụng trong phát triển phần mềm, trang web, game hay ứng dụng trên các thiết bị di động.</p>
                <button className="btn">Xem thêm</button>
              </div>
            </div>




            <div className="nice-place-item">
              <div className="nice-place-img">
                <img src="data:image/png;base64,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" alt=""/>
              </div>
              <div className="nice-place-text">
                <h2>Lập trình Python</h2>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p>Python là một ngôn ngữ lập trình bậc cao, mã nguồn mở và đa nền tảng. Python được Guido van Rossum giới thiệu vào năm 1991 và đã trải qua 3 giai đoạn phát triển khác nhau</p>
                <button className="btn">Xem thêm</button>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default NicePlace