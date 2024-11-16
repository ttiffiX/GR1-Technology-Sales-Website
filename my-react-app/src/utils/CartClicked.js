import React, {useEffect, useState} from 'react';
// import '../../styles/App.css';
// import '../App.scss';
import '../components/navigation/Nav.scss'
import {useNavigate} from 'react-router-dom';

function CartClicked({count}) {
    const [color, setColor] = useState('white'); // Màu chữ mặc định
    const [isChanging, setIsChanging] = useState(false); // Kiểm tra xem màu có thay đổi không
    const navigate = useNavigate();

    useEffect(() => {
        if (count > 0) {
            setIsChanging(true); // Bắt đầu thay đổi màu
            setColor('red'); // Đổi màu thành đỏ

            // Sau 1s, đổi lại màu cũ
            const timer = setTimeout(() => {
                setColor('white');
                setIsChanging(false);
            }, 450);
            return () => clearTimeout(timer); // Clean up khi component unmount hoặc count thay đổi
        }
    }, [count]); // Chạy lại khi count thay đổi

    const handleClick = () => {
        // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        navigate('/Cart',{ state: { count } });
    }

    return (
        <div>
            <button className={"cartButton"} onClick={handleClick}>
                <span className={"cartText"}>
                    🛒 <p>Cart(</p> <p style={{color: color}}>
                {isChanging ? `${count}` : `${count}`}</p>)
                </span>
            </button>
        </div>
    );
}

export default CartClicked;
