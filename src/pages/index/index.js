import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import API from "../../service/api";
import "./index.scss";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页",
  };
  todetail = () => {
    Taro.navigateTo({
      url: "/pages/detail/index",
    });
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}
  componentDidMount() {}
  componentDidShow() {
    API.post(
      "/reset/admin/user/queryUserList",
      {
        pageNo: 1,
        pageSize: 10,
      },
      "application/x-www-form-urlencoded"
    );
    /*   window.completeLoading(); */
  }

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View>首页</View>
        <Button onClick={this.todetail}>去详情页</Button>
      </View>
    );
  }
}

export default Index;
