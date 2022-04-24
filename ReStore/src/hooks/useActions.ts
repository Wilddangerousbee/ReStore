import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as Actions from "../store/actions";

const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(Actions, dispatch);
}

export default useAction 