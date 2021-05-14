import { connect } from "react-redux";

const Reader = (props) => {
    return (<> Yahppp { JSON.stringify(props.data)}
    </>);
}
const mapStateToProps = (state) => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(Reader);