import pic from './assets/2909591.jpg'
function Card(){
    
    const fruits= [{name : "apple", calories: 95}, 
                   {name: "banana", calories: 50}, 
                   {name: "watermelon", calories: 20}];
    const listItems = fruits.map(fruit => <li>{fruit.name}: &nbsp;{fruit.calories}</li>);

    fruits.sort((a,b) => (a.name.localeCompare(b.name)));

    return(<ol>{listItems}</ol>);
}

export default Card