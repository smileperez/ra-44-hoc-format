import react from "react";
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

function withHOC(Component) {
    function Wrapper(props) {
        return <Component {...props} date = {moment(props.date).fromNow()} />;
    }
    return Wrapper;
}

export default withHOC;