import { useEffect, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  //debounce -> 키보드를 하나씩 누를 때 마다 서버로 API 요청이 마구 쏟아지는 것을
  //막아주는 역할, 키보드를 누르고 일정시간이 지나야 API 요청 시작
  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(input); //-> 부모한데 받은 props
    }, 300);
    return () => clearTimeout(debounce);
  }, [input, onSearch]);

  return (
    <>
      <input
        value={input}
        placeholder="검색할 상품을 입력하세요"
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
}
