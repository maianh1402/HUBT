import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <footer id="footer">
            <div className='container'>
                <h1 className="h1-style">Liên hệ</h1>
                <div className="social-container row">
                    <div className="container-left">
                        <div className="social__item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Số 29A, ngõ 124 phố Vĩnh Tuy, phường Vĩnh Tuy, Q.Hai Bà Trưng, Hà Nội</span>
                        </div>
                        <div className="social__item">
                            <i className="fa-solid fa-phone"></i>
                            <span><a href="tel:+1900 633 695">1900 633 695</a></span>
                        </div>
                        <div className="social__item">
                            <i className="fa-solid fa-mobile"></i>
                            <span><a href="tel:+02436339113">(0243)6339113</a></span>
                            <span><a href="tel:+02436336507">(0243)6336507</a></span>
                        </div>
                        <div className="social__item">
                            <i className="fa-brands fa-facebook"></i>
                            <span><a href="https://www.facebook.com/dhkinhdoanhvacongnghe">facebook.com</a></span>
                        </div>
                        <div className="social__item">
                            <i className="fa-solid fa-envelope"></i>
                            <span><a href="mailto:tttt@hubt.edu.vn">tttt@hubt.edu.vn </a></span>
                        </div>
                        <div className="social__item">
                            <i className="fa-solid fa-globe"></i>
                            <span><a href="http://hubt.edu.vn/">hubt.edu.vn</a></span>
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="social__item">
                            <i className="fa-solid fa-check"></i>
                            <span>Giời mở / đóng cửa: 8.00 - 17.00</span>
                        </div>
                        <div className="social__item">
                            <i className="fa-solid fa-check"></i>
                            <span>Thứ 2 - Chủ nhật</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="dec">
            <p>©2022.Sản phẩm thuộc nhóm nghiên cứu khoa học</p>
        </div>
    </>
  )
}

export default Footer
