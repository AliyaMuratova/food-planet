import React from 'react';
import NewHeader from "../NewHeader/NewHeader";
import NewCards from "../NewCards/NewCards";

const New = ({cartItems,onAddItem}) => {
    return (
        <div>
            <NewHeader/>
            <NewCards
                cartItems={cartItems}
                onAddItem={onAddItem}
            />
        </div>
    );
};

export default New;