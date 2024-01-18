import Book from '../Book/Book';
import './Main.scss'



const Main = () => {
    return ( 
        <div className="main_content_wrapper">
            <div className="left_side_bar_wrapper">
                <h3 className='category_title'>Выберите жанр</h3>
                <ul className="category_list">
                    <li>Драма</li>
                    <li>Ужасы</li>
                    <li>Фантастика</li>
                    <li>Мультики</li>
                    <li>Программирование</li>
                </ul>
            </div>
            <div className="right_side_bar">
                <div className="search_wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat excepturi tempora voluptatum facilis? Neque incidunt fuga perferendis nesciunt dolore?</div>
                <div className="list_book_row">
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    
                   
                </div>
            </div>
        </div>
     );
}
 
export default Main;