import React, { useState } from 'react';

const Cart = ({ cart, setCart, isDeleted, setIsDeleted }) => {
    const [isOpen, setIsOpen] = useState(false);


    //TODO: 장바구니를 열고 닫는 함수를 완성하세요.
    //setIsOpen 함수를 사용하여 State값을 업데이트하세요.
    const toggleCart = () => isOpen === true ? setIsOpen(false) : setIsOpen(true);

    //TODO: cart에 담긴 상품의 총 가격을 계산하세요.
    //reduce 함수를 사용하여 총 가격을 계산하세요.
    const totalPrice = cart.reduce((acc, product) => {
        return acc + product.price;
    }, 0)

    //TODO: (선택 과제) 상품 가격에 서식을 지정하세요.
    //상품 가격을 3자리마다 콤마(,)를 찍어주는 함수를 작성하세요.
    //예시) 1000000 => 1,000,000
    //이 함수의 사용법은 totalPriceFormatted(가격) 입니다.
    //HINT : https://shape-coding.tistory.com/72
    const totalPriceFormatted = (price) => price.toLocaleString();

    //TODO: 결제하기 버튼 구현하기
    //결제하기 버튼을 눌렀을 때 alert를 띄우고
    //장바구니를 비워주세요.
    const handlePurchase = () => {
        setCart([]);
        return alert(`결제 되었습니다.`)
    };

    const handleDelete = () => (
        isDeleted === false ? setIsDeleted(true) : setIsDeleted(false)
    )

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>장바구니</h2>
                <div onClick={toggleCart}>{isOpen ? '▼' : '▲'}</div>
            </div>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                isOpen &&
                cart.map((item, index) => (
                    <div className="cartItem">
                        <span className="delete">
                            <input type="checkbox" id={item.id} onClick={handleDelete} />
                        </span>
                        <label for={item.id} className="cart-item" key={index}>
                            <img src={item.img} alt={item.name} />
                            <span>{item.name}</span>
                            <span>₩{item.price.toLocaleString()}</span>
                        </label>
                    </div>
                ))
            )}
            {totalPrice > 0 && (
                <div className="price-item">합계 금액 : {totalPriceFormatted(totalPrice) || totalPrice} 원</div>
            )}
            <div className="buttons">
                <button className="deleteButton" disabled={cart.length === 0}>
                    삭제하기
                </button>
                <button onClick={handlePurchase} disabled={cart.length === 0}>
                    결제하기
                </button>
            </div>
        </div>
    );
};

export default Cart;
