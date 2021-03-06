import {createContainer} from '@/util'
import Component from './Component'
import TaskService from '@/service/TaskService'

import './style.scss'

export default createContainer(Component, (state) => {

    // TODO: need some more tracking of options here

    return {
        task: state.task.detail,
        loading: state.task.loading
    }
}, () => {
    const taskService = new TaskService()

    return {
        async getTaskDetail (taskId) {
            return taskService.get(taskId)
        },

        async resetTaskDetail () {
            return taskService.resetTaskDetail()
        }
    }
})
