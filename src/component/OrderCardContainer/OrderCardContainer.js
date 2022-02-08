import './OrderCardContainer.css';

const OrderCardContainer = ({
  orderCheese,
  orderPepperoni,
  orderSausage,
  orderVegetarian,
  user,
  accessToken,
}) => {
  return (
    <>
      <section className="pizza-cards">
        <h1>Cheese Pizza</h1>
        <img
          src="https://homechef.imgix.net/https%3A%2F%2Fasset.homechef.com%2Fuploads%2Fmeal%2Fplated%2F2996%2Fhomechef_Chicago_Style_Spinach_Deep_Dish_Pizza__8_of_9_.jpg?ixlib=rails-1.1.0&w=1700&auto=format&s=4c6c1797d6bfeca1598067e5eb2f2355"
          alt="Cheese Pizza"
        ></img>
        <button onClick={() => orderCheese(user.sub, accessToken)}>
          Order Now
        </button>
      </section>
      <section className="pizza-cards">
        <h1>Pepperoni Pizza</h1>
        <img
          src="https://cdn.unos.com/images/menus/deepdish/pepperoni.jpg"
          alt="Pepperoni Pizza"
        ></img>
        <button onClick={() => orderPepperoni(user.sub, accessToken)}>
          Order Now
        </button>
      </section>
      <section className="pizza-cards">
        <h1>Sausage Pizza</h1>
        <img
          src="https://cdn.unos.com/images/menus/deepdish/DeepDish_MeatballRicotta_300.jpg"
          alt="Sausage Pizza"
        ></img>
        <button onClick={() => orderSausage(user.sub, accessToken)}>
          Order Now
        </button>
      </section>
      <section className="pizza-cards">
        <h1>Vegetarian Pizza</h1>
        <img
          src="https://cdn.unos.com/images/menus/deepdish/numero-uno.jpg"
          alt="Vegetarian Pizza"
        ></img>
        <button onClick={() => orderVegetarian(user.sub, accessToken)}>
          Order Now
        </button>
      </section>
    </>
  );
};

export default OrderCardContainer;
