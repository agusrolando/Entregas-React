import ItemContador from './ItemContador';

const ItemDetail = ({ item }) => {
    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>
                <ItemContador stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;