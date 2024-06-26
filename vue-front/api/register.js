import request from '@/utils/request'

export default{
    //根据手机号码发送短信
    getMobile(mobile){
        return request({
            url: `/msmservice/msm/send/${mobile}`,
            method: 'get'
            })
    },
    //用户注册
    register(formItem){
        return request({
            url: `/serviceUcenter/ucenter-member/register`,
            method: 'post',
            data: formItem
        })
    }

}
