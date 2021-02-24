import React from "react"
import "./MyCard.css"
import products from "../../products/data";

function MyCard({ myCard, setMyCard }) {
    const [myCard_visible, setmyCard_visible] = React.useState(false);
    const [myCard_buttonClass, setMyCard_buttonClass] = React.useState("myCard_button");
    const [myCardClass, setMyCardClass] = React.useState("myCard");

    const myCardArray = products.map(product => {
       
        if (myCard[0][product.id]>=0) {
              return (<tr key={product.id}>
                <td>{product.productName} </td>
                <td><input
                className="tableinput"
                type="number"
                onChange={e=>{
                    let theValue;
                    if(e.target.value<0 || e.target.value==="")
                    {
                        theValue=0;
                    }
                    else{
                        theValue=parseInt(e.target.value);
                    }
                    let tempObj={...myCard[0]};
                    let total=myCard[1];
                    total -=(tempObj[product.id]*product.price)
                    tempObj[product.id]=theValue;
                    total+= (tempObj[product.id]*product.price)
                    setMyCard([tempObj,total])
                }}
                value={myCard[0][product.id]}/></td>
                <td>{product.price}</td>
                <td>{product.price * myCard[0][product.id]}</td>
                <td><img src="/img/removeSymbol.png" className="removeSymbol"/></td>
            </tr>)
        }

    })


    return (<div>
        <img src="/img/buy.png" className={myCard_buttonClass} onClick={e => {
            if (myCard_visible) {
                setMyCardClass("myCard");
                setMyCard_buttonClass("myCard_button");
            } else {
                setMyCardClass("myCard myCard_visible");
                setMyCard_buttonClass("myCard_button myCard_button_visible");
            }
            setmyCard_visible(!myCard_visible)

        }} />
        <div className={myCardClass}>
            <div className="myCardElements">
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
                    <tbody>
                        {myCardArray}
                    </tbody>
                    <tfoot>
    <tr>
      <td colSpan="3">Total Price</td>
      <td colSpan="2">{myCard[1]}</td>
    </tr>
  </tfoot>
                </table>
            </div>
        </div>
    </div>)
}

export default MyCard;