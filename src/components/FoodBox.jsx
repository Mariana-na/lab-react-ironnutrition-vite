

function  FoodBox ({food, deleteFood}) {
 
    return (
        <div>
            <p>{food.name}</p>

            <img src={food.image} style={{height: "200px"}}/>

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {food.calories} * {food.servings} </b> kcal
            </p>

            <button onClick={() => deleteFood(food.id)} >Delete</button>
        </div>
    )


}

export default FoodBox;