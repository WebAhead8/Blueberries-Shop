import React from 'react'
import './MyCard.css'
import { getAllProducts } from '../../Fetches/getProductsFetch'
import { buy } from '../../Fetches/buyFetch'
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useHistory } from "react-router-dom";


function MyCard({ myCard, setMyCard, logedIn }) {
  const history = useHistory();

  const [products, setProducts] = React.useState([])
  const [myCardArray, setmyCardArray] = React.useState([])
  const [myCard_visible, setmyCard_visible] = React.useState(false)
  const [cardNumber, setcardNumber] = React.useState(0)
  const [myCard_buttonClass, setMyCard_buttonClass] = React.useState(
    'myCard_button'
  )
  const [myCardClass, setMyCardClass] = React.useState('myCard')
  const [receiptNumber, setReceiptNumber] = React.useState(1)

  React.useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data)
    })

    const card = JSON.parse(localStorage.getItem("myCard"));
    if (card) {
      setMyCard(card)

    }

  }, [])

  React.useEffect(() => {
    const list = products.map(product => {
      if (myCard[0][product.id] >= 0) {
        return (
          <tr key={product.id}>
            <td>{product.name} </td>
            <td>
              <input
                className='tableinput'
                type='number'
                onChange={e => {
                  let theValue
                  if (e.target.value < 0 || e.target.value === '') {
                    theValue = 0
                  } else {
                    theValue = parseInt(e.target.value)
                    if (theValue > product.quantity) {
                      theValue = product.quantity
                      alert(`we only have ${product.quantity} ${product.name}`)
                    }
                  }
                  let tempObj = { ...myCard[0] }
                  let total = myCard[1]
                  total -= tempObj[product.id] * product.price
                  tempObj[product.id] = theValue
                  total += tempObj[product.id] * product.price
                  localStorage.setItem("myCard", JSON.stringify([tempObj, total]))

                  setMyCard([tempObj, total])
                }}
                value={myCard[0][product.id]}
              />
            </td>
            <td>{product.price}</td>
            <td>{product.price * myCard[0][product.id]}</td>
            <td>
              <img
                src='/img/removeSymbol.png'
                className='removeSymbol'
                onClick={e => {
                  let tempObj = { ...myCard[0] }
                  const total = myCard[1] - tempObj[product.id] * product.price
                  delete tempObj[product.id]
                  localStorage.setItem("myCard", JSON.stringify([tempObj, total]))

                  setMyCard([tempObj, total])
                }}
              />
            </td>
          </tr>
        )
      }
    })
    setmyCardArray(list)
    setcardNumber(Object.keys(myCard[0]).length)
  }, [myCard, products])

  function buyHandler() {

    if (logedIn) {
      const answer = window.confirm('are you sure you want to buy these items')
      if (answer) {
        buy(myCard[0]).then(data => {
          if (data.status === 200) {
            setMyCard([{}, 0])
            exportPDF()
            localStorage.removeItem("myCard")

          }
        })
      }
    } else {
      alert("you must log in first")
      history.push("/login")

    }

    //window.print()

  }

  function exportPDF() {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Blueberries receipt ${receiptNumber}`;
    const headers = [["Product", "Quantity", "Product Price", "Total"]];
    const keys = Object.keys(myCard[0])
    console.log(keys)
    const data = products.filter(product => {
      console.log(product)
      return (keys.includes(product.id + ""))
    })
      .map(product => [product.name, myCard[0][product.id], product.price, product.price * myCard[0][product.id]]);
    setReceiptNumber(receiptNumber + 1)
    data.push(["Total payment", myCard[1]])
    let content = {
      startY: 50,
      head: headers,
      body: data
    };
    //setReceiptNumber
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`rec ${receiptNumber}.pdf`)
  }

  return (
    <div>
      <img
        src='/img/buy.png'
        className={myCard_buttonClass}
        onClick={e => {
          if (myCard_visible) {
            setMyCardClass('myCard')
            setMyCard_buttonClass('myCard_button')
          } else {
            setMyCardClass('myCard myCard_visible')
            setMyCard_buttonClass('myCard_button myCard_button_visible')
          }
          setmyCard_visible(!myCard_visible)
        }}
      />
      <label className={myCard_buttonClass + " cardNumber"} >{cardNumber}</label>
      <div className={myCardClass}>
        <div className='myCardElements'>
          <h2>My Card</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Product Price</th>
                <th>Total</th>
                <th>remove</th>
              </tr>
            </thead>
            <tbody>{myCardArray}</tbody>
            <tfoot>
              <tr>
                <td colSpan='3'>Total Price</td>
                <td colSpan='2'>{myCard[1]}</td>
              </tr>
            </tfoot>
          </table>
          <button onClick={(e) => {
            buyHandler()
          }}>buy</button>
        </div>
      </div>
    </div>
  )
}

export default MyCard
