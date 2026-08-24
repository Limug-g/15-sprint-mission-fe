import { Footer } from '../../Components/Footer/Footer';
import { Nav } from '../../Components/Nav/Nav';
import './Registration.css'

export const Registration = () => {

  const hadleRegister = () => {
    
  }

  return (
    <>
      <Nav />
      <section className="registerWrap">
        <div className="registerContainer">
          <div className="Header">
            <h2>상품 등록하기</h2>
            <div className="registerBtn">등록</div>
          </div>
          <div className="registerForm">
            <div className="itemName">상품명</div>
            <input id='itemName' type="text" placeholder='상품명을 입력해주세요' />
            <div className="description">상품 소개</div>
            <textarea 
            id="description" 
            placeholder='상품 소개를 입력해주세요'
            maxLength={100}
            />
            <div className="price">판매가격</div>
            <input id='price' type="text" placeholder='판매 가격을 입력해주세요' />
            <div className="tag">태그</div>
            <input id='tag' type="text" placeholder='태그를 입력해주세요'/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
