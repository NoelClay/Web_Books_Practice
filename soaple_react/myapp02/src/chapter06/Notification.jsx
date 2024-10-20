import React from "react";

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText:{
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );
    }

    componentDidMount(){
        console.log(`${this.props.id} 마운트가 된 뒤에 호출될거야`)
    }
    componentDidUpdate(){
        console.log( `${this.props.id} 업데이트가 된뒤에 마다 호출될거야`)
    }
    componentWillUnmount(){
        console.log(`${this.props.id} 언마운트 직전에 호출될거야`)
    }


}
export default Notification;