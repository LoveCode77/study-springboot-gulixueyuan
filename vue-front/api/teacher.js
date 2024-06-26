import request from '@/utils/request'

export default{
    getPageList(page, limit){
        return request({
            url:`/eduservice/teacherFront/getTeacherFrontPageList/${page}/${limit}`,
            method: 'post'
        })
    },
     //根据ID查询讲师本身信息+课程信息
     getTeacherInfoByid(id){
        return request({
            url: `/eduservice/teacherFront/getTeacherInfo/${id}`,
            method: `get`
        })
    },
}
