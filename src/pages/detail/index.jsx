import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

/* import "./index.scss"; */

// @connect(
//   ({ counter }) => ({
//     counter
//   }),
//   dispatch => ({
//     add() {
//       dispatch(add());
//     },
//     dec() {
//       dispatch(minus());
//     },
//     asyncAdd() {
//       dispatch(asyncAdd());
//     }
//   })
// )
class Index extends Component {
  //   config = {
  //     navigationBarBackgroundColor:'#333333'
  //     }
  //   }
  toindex = () => {
    Taro.navigateTo({
      url: "/pages/index/index",
    });
  };
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <View>
        详情页
        <Button onClick={this.toindex}>点击</Button>
      </View>
    );
  }
}

export default Index;
