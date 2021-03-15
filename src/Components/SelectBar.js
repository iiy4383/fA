// selectbtn-clicked (right: 21%), selectbtn-one(right: 46%), selectbtn-two(right: 71%)
// functionbarposition (right: 20%), firstfunction(right: 45%), secondfunction(right: 70%)

import SelectButton from "../Res/Images/SelectBar.png";
import SelectBarAnimator from "./SelectBarAnimator.js";

const SelectBar = () => {

    const onSelectButtonClicked = e => {
        SelectBarAnimator();
    }

    return (
        <div id="select_button_circle" className="absolute top-0 right-select-bar flex items-center justify-center
                                                    rounded-full h-20 w-20 border-4 border-transparent
                                                    hover:shadow-2xl hover:opacity-100
                                                    transition-all ease-in-out duration-700"
                                                    onClick={onSelectButtonClicked}>

            <img src={SelectButton} alt="Select Button" width="60px" height="60px" className="opacity-80 hover:opacity-100"/>
        </div>
    );
};

export default SelectBar;