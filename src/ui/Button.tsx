import dark from "./dark";
function Button(props){
    return (
        <button style={dark.download}>{props.children}</button>
    );
}
export default Button;