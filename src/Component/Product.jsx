
export default function Product({title,desc,oldPrice,newPrice}){
console.log(title);
    return(
        <>
        <h1>Title:{title}</h1>
        <p>dec:{desc}</p>

        <h2>price : old = {oldPrice} </h2>
        <h2>price : new = {newPrice} </h2>
        
        </>
    )
};
