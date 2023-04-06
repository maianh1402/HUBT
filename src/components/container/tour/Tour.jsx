import React from 'react'
import './tour.css'

const Tour = () => {
  return (
    <section id="tour" className="tour">
        <div className="container">
            <h1 className="h1-style">Chương trình học</h1>
            <div className="tour-content row" data-aos="zoom-out-right">
                <div className="tour-content-item row">
                    <button className="tour-content-item-img card">
                        <h5 className="card__title">Năm 1</h5>
                    </button>
                    <div className="tour-content-item-text">
                        <h2>Năm 1</h2>
                        <p>Chương trình học nhẹ nhàng tập trung chủ yếu các môn đại cương phối hợp các môn giáo dục thể
                            chất.</p>
                        <button className="btn">Xem thêm</button>
                    </div>
                </div>
            </div>
            <div className="tour-content row" data-aos="zoom-out-left">
                <div className="tour-content-item row">
                    <div className="tour-content-item-text">
                        <h2>Năm 2</h2>
                        <p>Cho sinh viên làm quen các môn nền tảng của một lập trình viên và tạo thói quen tự học, tự
                            tìm hiểu.</p>
                        <button className="btn">Xem thêm</button>
                    </div>
                    <button className="tour-content-item-img card">
                        <h5 className="card__title">Năm 2</h5>
                    </button>
                </div>
            </div>
            <div className="tour-content row" data-aos="zoom-out-right">
                <div className="tour-content-item row">
                    <button className="tour-content-item-img card">
                        <h5 className="card__title">Năm 3</h5>
                    </button>
                    <div className="tour-content-item-text">
                        <h2>Năm 3</h2>
                        <p>Phân chia chuyên ngành, tập trung vào các môn đòi hỏi sinh viên phải học được những kỹ năng
                            chuyên môn.</p>
                        <button className="btn">Xem thêm</button>
                    </div>
                </div>
            </div>
            <div className="tour-content row" data-aos="zoom-out-left">
                <div className="tour-content-item row">
                    <div className="tour-content-item-text">
                        <h2>Năm 4</h2>
                        <p>Sinh viên đi thực tập thực tế, viết báo cáo sau khi kết thúc thực tập và bảo vệ luận văn của
                            mình.</p>
                        <button className="btn">Xem thêm</button>
                    </div>
                    <button className="tour-content-item-img card">
                        <h5 className="card__title">Năm 4</h5>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tour
