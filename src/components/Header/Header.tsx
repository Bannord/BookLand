import './Header.scss'

const Header = () => {
    return ( 
        <header className="header_wrapper">
            <div className="left_bar">
                <div className="img_wrapper">
                    <img src="" alt="" />
                </div>
                <div className="title_site">BookLand</div>
            </div>
            <div className="right_bar">
                <ul className='list_wrapper'>
                    <li className='list_item'>About us</li>
                    <li className='list_item'>Politics</li>
                    <li className='list_item'>Support</li>
                </ul>
                <div className="cart_wrapper">
                    <span className="cart_text">cart</span>
                    <img src="" alt="#cart" />
                </div>
                <div className="like_wrapper">
                    <span className="cart">like</span>
                    <img src="" alt="#like" />
                </div>
            </div>
            
        </header>
     );
}
 
export default Header;