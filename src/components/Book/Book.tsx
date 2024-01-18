import './Book.scss'

import futurama from '../../assets/book_img/futurama.jpg'

const Book = () => {
    return ( 
        <div className="book_wrapper">
                        <div className="img_book_wrapper">
                            <img src={futurama} alt="#Futurama" />
                        </div>
                        <h3 className="title_book">Футурама</h3>
                        <span className="description_book">Сериал рассказывает историю Филипа Дж. Фрая, 25-летнего парня, застрявшего на бесперспективной работе разносчика пиццы.</span>
                        <button className="add_book">Заказать книгу</button>
            </div>
     );
}
 
export default Book;
