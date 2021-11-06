import { memo, useMemo, useState,useRef } from "react";
function Usemeno({ onIncrease }) {
  //  console.log('re-render')
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef()
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price:(Number(price))//.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')// +price || parseInt(price)
      },]);
    setName('')
    setPrice('')
    nameRef.current.focus()
  };
  const total = useMemo(() => {
      const result = products.reduce((result,prod)=>{
          console.log('Tính toán lại ....')
          return result + prod.price
      },0)
      return result
  },[products] )

  console.log(products);
  return (
    <div>
      <>
        <h2> Helo 500 Ae</h2>
        <button onClick={onIncrease}>Thêm</button>
      </>
      <div>
        <input
        ref={nameRef}
          value={name}
          placeholder="Enter Name ....."
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          value={price}
          placeholder="Enter price ....."
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Add</button>
    <div>
    Total :{total}
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price} Vnđ
            </li>
          ))}
        </ul>
    </div>
      </div>
    </div>
  );
}
export default memo(Usemeno);
