import React from 'react'
import './header.css'

const HeaderContent = () => {
  return (
    <div className="header-content">
        <h1>Trường Đại học Kinh doanh và Công nghệ Hà Nội</h1>
        <p>(Thư viện điện tử Công nghệ thông tin)</p>
        <form action=''>
            <h1>Bạn tìm kiếm?</h1>
            <p>Tìm kiếm</p>
            <select>
                <option value="#">--Tìm theo chuyên ngành--</option>
                <option value="#">--Tất cả--</option>
            </select>
            <p>Tên tài liệu </p>
            <input type="text" placeholder="Seach"/>
            <p>Tên tác giả</p>
            <input type="text" placeholder="Seach"/>
            <button className="btn">Tìm kiếm</button>
        </form>    
    </div>
  )
}

export default HeaderContent
